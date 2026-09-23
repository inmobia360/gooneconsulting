const objectiveForm = document.querySelector('#objective-form');
const objectiveInput = document.querySelector('#objective');
const runStatus = document.querySelector('#run-status');
const runLog = document.querySelector('#run-log');
const runButton = objectiveForm.querySelector('button[type="submit"]');
const runButtonLabel = document.querySelector('#run-button-label');
const resetButton = document.querySelector('#reset-demo');
const roleRows = [...document.querySelectorAll('.role-row')];
const reviewForm = document.querySelector('#review-form');
const reviewerInput = document.querySelector('#reviewer');
const decisionInput = document.querySelector('#decision');
const reviewState = document.querySelector('#review-state');
const reviewFeedback = document.querySelector('#review-feedback');
const showAllButton = document.querySelector('#show-all');
const legendPanel = document.querySelector('#legend-panel');

const initialObjective = objectiveInput.value;
const roleNames = ['GO Director', 'Company Research', 'Business Model Analyst', 'Pain Point Detector', 'AI Opportunity Agent'];
const roleResults = ['Alcance acotado', 'Entrevista simulada', 'Vacíos identificados', 'Hipótesis etiquetada', 'Alternativa sin IA'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let runCount = 0;
let runToken = 0;

objectiveForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const objective = objectiveInput.value.trim();
  if (!objective || objective.length > 160) {
    objectiveInput.setCustomValidity('Escribe una pregunta de hasta 160 caracteres.');
    objectiveInput.reportValidity();
    return;
  }
  objectiveInput.setCustomValidity('');
  const token = ++runToken;
  runCount += 1;
  runButton.disabled = true;
  runButtonLabel.textContent = 'Reproduciendo…';
  runStatus.innerHTML = '<i></i> Demo en curso';
  reviewState.querySelector('b').textContent = 'Pendiente de revisión humana';
  reviewState.querySelector('small').textContent = 'El informe es fijo y sintético; nada se entrega ni ejecuta.';
  reviewFeedback.textContent = 'Pregunta de esta reproducción: “' + objective + '”. El informe no se recalcula.';
  roleRows.forEach((row) => {
    row.classList.remove('role-active', 'role-complete');
    row.querySelector('.role-result').textContent = 'En espera';
    row.querySelector('.role-check').textContent = '·';
  });

  const delay = reducedMotion ? 35 : 420;
  for (let index = 0; index < roleRows.length; index += 1) {
    if (token !== runToken) return;
    const row = roleRows[index];
    row.classList.add('role-active');
    row.querySelector('.role-result').textContent = 'En curso';
    row.querySelector('.role-check').textContent = '…';
    runLog.textContent = 'Paso ' + (index + 1) + ' de 5 · ' + roleNames[index] + ' revisa el alcance de la demostración.';
    await new Promise((resolve) => window.setTimeout(resolve, delay));
    if (token !== runToken) return;
    row.classList.remove('role-active');
    row.classList.add('role-complete');
    row.querySelector('.role-result').textContent = roleResults[index];
    row.querySelector('.role-check').textContent = '✓';
  }

  runButton.disabled = false;
  runButtonLabel.textContent = 'Reproducir otra vez';
  runStatus.innerHTML = '<i></i> Secuencia completada · ' + runCount;
  runLog.textContent = 'Secuencia local completada. Los resultados visibles siguen siendo el ejemplo sintético fijo.';
});

objectiveInput.addEventListener('input', () => objectiveInput.setCustomValidity(''));

showAllButton.addEventListener('click', () => {
  const expanded = showAllButton.getAttribute('aria-expanded') === 'true';
  showAllButton.setAttribute('aria-expanded', String(!expanded));
  legendPanel.hidden = expanded;
  showAllButton.innerHTML = expanded
    ? 'Ver guía de etiquetas <span aria-hidden="true">＋</span>'
    : 'Ocultar guía <span aria-hidden="true">−</span>';
});

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const reviewer = reviewerInput.value.trim();
  if (!reviewer || reviewer.length > 40) {
    reviewerInput.setCustomValidity('Indica un alias de hasta 40 caracteres.');
    reviewerInput.reportValidity();
    return;
  }
  reviewerInput.setCustomValidity('');
  const ready = decisionInput.value === 'ready';
  const decision = ready ? 'Lista para devolución simulada' : 'Cambios solicitados antes de compartir';
  reviewState.querySelector('b').textContent = decision;
  reviewState.querySelector('small').textContent = 'Revisión demo registrada por ' + reviewer + '. No autoriza implementación.';
  reviewState.querySelector('.review-indicator').style.background = ready ? '#b8d46a' : '#e2bc59';
  reviewFeedback.textContent = ready
    ? 'Decisión local registrada. Una persona aún tendría que preparar la devolución; no se aprueba un piloto.'
    : 'Solicitud de cambios local registrada. La implementación sigue bloqueada.';
});

resetButton.addEventListener('click', () => {
  runToken += 1;
  runCount = 0;
  objectiveInput.value = initialObjective;
  objectiveInput.setCustomValidity('');
  runButton.disabled = false;
  runButtonLabel.textContent = 'Reproducir análisis';
  runStatus.innerHTML = '<i></i> Borrador sintético';
  runLog.textContent = 'La secuencia no se ha reproducido todavía.';
  roleRows.forEach((row) => {
    row.classList.remove('role-active', 'role-complete');
    row.querySelector('.role-result').textContent = roleResults[roleRows.indexOf(row)];
    row.querySelector('.role-check').textContent = '✓';
  });
  reviewerInput.value = '';
  reviewerInput.setCustomValidity('');
  decisionInput.value = 'ready';
  reviewState.querySelector('b').textContent = 'Pendiente de revisión humana';
  reviewState.querySelector('small').textContent = 'Nada se entrega ni se ejecuta desde esta página.';
  reviewState.querySelector('.review-indicator').style.background = '';
  reviewFeedback.textContent = 'La decisión solo existe en esta pestaña y se borra al recargar.';
  legendPanel.hidden = true;
  showAllButton.setAttribute('aria-expanded', 'false');
  showAllButton.innerHTML = 'Ver guía de etiquetas <span aria-hidden="true">＋</span>';
});
