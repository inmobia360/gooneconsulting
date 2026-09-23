const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll('.help-card, .diagnose-output, .solution-card, .principles-inner');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

  revealTargets.forEach((target) => {
    target.classList.add('reveal-ready');
    revealObserver.observe(target);
  });
}

const sectorSelect = document.querySelector('#business-sector');
const otherToggle = document.querySelector('#other-sector-toggle');
const otherSectorWrap = document.querySelector('#other-sector-wrap');
const otherSectorInput = document.querySelector('#other-sector');
const sectorPreview = document.querySelector('#sector-preview');
const summaryPanel = document.querySelector('#sector-summary');
const summaryTitle = document.querySelector('#sector-summary-title');
const summaryIntro = document.querySelector('#sector-summary-intro');
const summaryOptions = document.querySelector('#sector-summary-options');
const summaryLimit = document.querySelector('.sector-summary-limit');
const continueButton = document.querySelector('#sector-continue');
const requestForm = document.querySelector('#business-request-form');

const sectorGuides = {
  'Servicios técnicos a domicilio': {
    areas: 'avisos, visitas, presupuestos, materiales y seguimiento de trabajos',
    process: 'Haz visible cada trabajo con una etapa, una persona responsable y el siguiente paso.',
    automation: 'Valora avisos para visitas pendientes, presupuestos por revisar o trabajos que esperan materiales.',
    ai: 'Como apoyo opcional, una herramienta de IA podría preparar un resumen de una solicitud o un borrador de cierre. Revisa el resultado y no introduzcas datos personales.'
  },
  'Inmobiliarias y profesionales inmobiliarios': {
    areas: 'entrada de contactos, preparación de visitas, documentación y seguimiento de operaciones',
    process: 'Organiza cada operación con estado, responsable y próxima acción acordada.',
    automation: 'Valora recordatorios para visitas, documentación pendiente y seguimientos que necesitan respuesta.',
    ai: 'Como apoyo opcional, una herramienta de IA podría ordenar notas o preparar borradores de comunicación. Revisa cada texto y protege los datos personales.'
  },
  'Despachos profesionales': {
    areas: 'apertura y seguimiento de expedientes, documentos, plazos y solicitudes',
    process: 'Define etapas y responsables para que cada expediente tenga un próximo paso visible.',
    automation: 'Valora avisos para fechas límite, solicitudes pendientes y tareas que esperan información.',
    ai: 'Como apoyo opcional, una herramienta de IA podría resumir información administrativa no sensible. No debe sustituir el criterio profesional ni producir asesoramiento sin revisión.'
  },
  'Clínicas y centros de bienestar': {
    areas: 'organización de citas, recordatorios y tareas administrativas',
    process: 'Separa las tareas de agenda, confirmación y seguimiento administrativo.',
    automation: 'Valora recordatorios de citas y avisos cuando una tarea administrativa queda pendiente.',
    ai: 'Si se explora IA, limitarla a contenido administrativo sin datos de pacientes ni información de salud. Una persona revisa cualquier borrador.'
  },
  'Reformas, construcción y oficios': {
    areas: 'presupuestos, planificación, coordinación de equipos, cambios y comunicación',
    process: 'Mantén visibles las etapas de cada obra, sus responsables y los cambios por confirmar.',
    automation: 'Valora avisos para presupuestos, hitos de planificación y tareas que esperan confirmación.',
    ai: 'Como apoyo opcional, una herramienta de IA podría ordenar notas de coordinación o preparar un borrador de actualización. Revisa el contenido antes de compartirlo.'
  },
  'Agencias de marketing, diseño y servicios digitales': {
    areas: 'entrada de encargos, briefs, revisiones, aprobaciones y entregas',
    process: 'Aclara para cada encargo qué se entrega, quién lo revisa y cuál es el siguiente hito.',
    automation: 'Valora avisos cuando un brief, revisión o aprobación bloquea una entrega.',
    ai: 'Como apoyo opcional, una herramienta de IA podría resumir un brief o preparar una primera estructura. El equipo revisa calidad, derechos y datos antes de usarla.'
  },
  'Comercio y pequeños negocios multicanal': {
    areas: 'consultas, pedidos, devoluciones y actualización de inventario',
    process: 'Define cómo se registra cada consulta o pedido y quién se ocupa del siguiente paso.',
    automation: 'Valora avisos para pedidos con incidencias, devoluciones por resolver o consultas sin respuesta.',
    ai: 'Como apoyo opcional, una herramienta de IA podría clasificar consultas o preparar borradores de respuesta. Una persona confirma disponibilidad, precio y contenido.'
  },
  'Formación y academias': {
    areas: 'matriculaciones, comunicación, preparación de materiales y seguimiento',
    process: 'Organiza las etapas administrativas del curso con responsables y próximos pasos claros.',
    automation: 'Valora avisos para matrículas incompletas, materiales pendientes y comunicaciones planificadas.',
    ai: 'Como apoyo opcional, una herramienta de IA podría ayudar a estructurar materiales generales. No introduzcas datos de estudiantes y revisa todo el contenido.'
  }
};

function selectedSector() {
  return otherSectorWrap.hidden ? sectorSelect.value.trim() : otherSectorInput.value.trim();
}

function addSolutionOption(kind, title, description) {
  const article = document.createElement('article');
  article.className = 'sector-solution-option';
  article.dataset.kind = kind;

  const label = document.createElement('span');
  label.className = 'sector-solution-kind';
  label.textContent = kind;

  const content = document.createElement('div');
  const heading = document.createElement('h5');
  heading.textContent = title;
  const detail = document.createElement('p');
  detail.textContent = description;

  content.append(heading, detail);
  article.append(label, content);
  summaryOptions.append(article);
}

function updateSectorPreview() {
  const sector = selectedSector();
  const guide = sectorGuides[sector];
  continueButton.disabled = !sector;
  requestForm.hidden = true;
  continueButton.setAttribute('aria-expanded', 'false');
  summaryOptions.replaceChildren();

  if (!sector) {
    sectorPreview.textContent = 'Elige tu sector para ver posibles líneas de mejora.';
    summaryPanel.hidden = true;
    return;
  }

  summaryPanel.hidden = false;
  if (!guide) {
    sectorPreview.textContent = 'Aún no hay una orientación preparada para este sector.';
    summaryTitle.textContent = 'Todavía no tenemos ideas revisadas para ' + sector;
    summaryIntro.textContent = 'Puedes preparar una consulta opcional para que Go Once valore qué información haría falta antes de sugerir soluciones.';
    summaryLimit.textContent = 'No vamos a inferir procesos ni soluciones a partir de un sector que aún no hemos revisado.';
    return;
  }

  sectorPreview.textContent = 'Orientación general disponible. No es un diagnóstico de tu negocio.';
  summaryTitle.textContent = 'Posibles soluciones para ' + sector;
  summaryIntro.textContent = 'A partir solo del sector que has elegido, estas son ideas para explorar en torno a ' + guide.areas + '.';
  summaryLimit.textContent = 'Son posibilidades, no una afirmación de que todas estas situaciones ocurran en tu negocio. Valida cada idea antes de aplicarla.';
  addSolutionOption('Proceso', 'Aclarar el recorrido', guide.process);
  addSolutionOption('Automatización', 'Reducir seguimientos manuales', guide.automation);
  addSolutionOption('IA opcional', 'Apoyar tareas informativas', guide.ai);
}

sectorSelect.addEventListener('change', () => {
  if (sectorSelect.value && !otherSectorWrap.hidden) {
    otherSectorWrap.hidden = true;
    otherToggle.setAttribute('aria-expanded', 'false');
    otherToggle.textContent = 'Mi sector no aparece';
    otherSectorInput.value = '';
  }
  updateSectorPreview();
});
otherToggle.addEventListener('click', () => {
  const willShow = otherSectorWrap.hidden;
  otherSectorWrap.hidden = !willShow;
  otherToggle.setAttribute('aria-expanded', String(willShow));
  otherToggle.textContent = willShow ? 'Elegir un sector de la lista' : 'Mi sector no aparece';
  if (willShow) {
    sectorSelect.value = '';
    otherSectorInput.focus();
  } else {
    otherSectorInput.value = '';
    sectorSelect.focus();
  }
  updateSectorPreview();
});
otherSectorInput.addEventListener('input', updateSectorPreview);

continueButton.addEventListener('click', () => {
  if (!selectedSector()) return;
  requestForm.hidden = false;
  continueButton.setAttribute('aria-expanded', 'true');
  requestForm.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  requestForm.querySelector('input').focus({ preventScroll: true });
});

requestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!requestForm.reportValidity()) return;

  const sector = selectedSector();
  const email = document.querySelector('#contact-email').value.trim();
  const challenge = document.querySelector('#process-challenge').value.trim();
  const subject = 'Consulta de diagnóstico · ' + sector;
  const body = [
    'Hola Go Once,',
    '',
    'Me gustaría consultaros sobre un proceso de mi negocio.',
    'Sector: ' + sector,
    'Mi correo: ' + email,
    '',
    'El proceso o dificultad que quiero revisar:',
    challenge,
    '',
    'Gracias.'
  ].join('\n');

  window.location.href = 'mailto:contact@goonceconsulting.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});
