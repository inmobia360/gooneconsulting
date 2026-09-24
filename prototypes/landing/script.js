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
const continueButton = document.querySelector('#sector-continue');
const requestForm = document.querySelector('#business-request-form');

const sectorTopics = {
  'Servicios técnicos a domicilio': 'Para climatización, electricidad, fontanería y mantenimiento, podríamos analizar cómo se gestionan los avisos, las visitas, los presupuestos, los materiales y el seguimiento de cada trabajo.',
  'Inmobiliarias y profesionales inmobiliarios': 'Podríamos analizar la captación, el seguimiento de compradores y vendedores, las visitas, la documentación y la coordinación de operaciones.',
  'Despachos profesionales': 'Podríamos analizar la gestión de expedientes, documentos, fechas límite y solicitudes de clientes.',
  'Clínicas y centros de bienestar': 'Podríamos analizar tareas administrativas, citas y recordatorios. No compartas información de pacientes ni datos de salud.',
  'Reformas, construcción y oficios': 'Podríamos analizar presupuestos, planificación, coordinación de gremios, cambios y comunicación con clientes.',
  'Agencias de marketing, diseño y servicios digitales': 'Podríamos analizar la entrada de encargos, revisiones, aprobaciones, entregas y control de horas.',
  'Comercio y pequeños negocios multicanal': 'Podríamos analizar pedidos, consultas, devoluciones o inventario, según cómo funcione tu negocio.',
  'Formación y academias': 'Podríamos analizar matriculaciones, comunicación con alumnos, materiales y seguimiento del progreso.'
};

function selectedSector() {
  return otherSectorWrap.hidden ? sectorSelect.value.trim() : otherSectorInput.value.trim();
}

function updateSectorPreview() {
  const sector = selectedSector();
  continueButton.disabled = !sector;
  sectorPreview.textContent = !sector
    ? 'Elige tu sector para ver ejemplos de procesos que podríamos analizar.'
    : (sectorTopics[sector] || 'Cuéntanos brevemente cómo funciona tu actividad. Primero entenderemos tu proceso antes de recomendar cambios.');
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
  requestForm.hidden = true;
  updateSectorPreview();
});
otherSectorInput.addEventListener('input', updateSectorPreview);

continueButton.addEventListener('click', () => {
  if (!selectedSector()) return;
  requestForm.hidden = false;
  requestForm.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  requestForm.querySelector('input').focus({ preventScroll: true });
});

requestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!requestForm.reportValidity()) return;

  const sector = selectedSector();
  const email = document.querySelector('#contact-email').value.trim();
  const challenge = document.querySelector('#process-challenge').value.trim();
  const subject = `Consulta de diagnóstico · ${sector}`;
  const body = [
    'Hola Go Once,',
    '',
    'Me gustaría consultaros sobre un proceso de mi negocio.',
    `Sector: ${sector}`,
    `Mi correo: ${email}`,
    '',
    'El proceso o dificultad que quiero revisar:',
    challenge,
    '',
    'Gracias.'
  ].join('\n');

  window.location.href = `mailto:contact@goonceconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
