# 002 — Landing de Go Once Consulting

## Objetivo

Presentar Go Once Consulting como una consultora que identifica y mejora problemas operativos de profesionales independientes y pequeños negocios de distintos sectores. La página convierte interés en una solicitud de diagnóstico y explica la relación entre el diagnóstico general y los productos verticales de Go Once Business.

## Público y posicionamiento

- Público inicial: empresarios individuales y pequeños negocios, sin limitar la propuesta general a un sector.
- Go Once Consulting: marca y servicio de diagnóstico, diseño e implantación.
- Go Once Diagnose: producto de entrada transversal para entender procesos, priorizar problemas y detectar oportunidades.
- Go Once Business: familia de soluciones verticales para segmentos profesionales concretos. Inmobiliario y servicios técnicos son ejemplos de líneas potenciales; no se presentan como productos ya disponibles.

La página habla de resultados operativos comprensibles: menos tareas manuales, menos errores y olvidos, mejor seguimiento y mayor visibilidad del trabajo. No promete ahorros, ingresos, capacidades desplegadas ni resultados no demostrados.

## Dirección visual revisada

- Tomar como referencia la composición de marca existente: estructura aireada, titular con carácter, visual de proceso, banda de áreas de trabajo y bloques editoriales asimétricos.
- Mantener la paleta oficial (azul noche `#17162B`, violeta `#6652D9`, lima `#B8D46A`, blanco cálido `#F7F6F2` y gris `#6B7280`), logotipo y tipografía Inter sans serif local en todos los niveles.
- Incorporar una imagen hiperrealista original, sin texto ni métricas, que represente una profesional independiente revisando su trabajo. Animar con sutileza el recorrido y la entrada de algunos bloques; respetar `prefers-reduced-motion` y mantener el contenido disponible sin animación si no hay soporte.
- Llevar la CTA principal a un correo dirigido a `contact@goonceconsulting.com`, con asunto y texto inicial editables por la persona usuaria.
- Elevar la propuesta para explicar con claridad Go Once Consulting, la diagnosis transversal y la futura familia vertical Go Once Business. La forma visual del sitio público es referencia; los lemas siguen sujetos a la aprobación indicada en el manual de identidad.
- Presentar el contenido en voz de cliente, sin etiquetas de desarrollo, demo o previsualización.

## Oferta inicial propuesta (pendiente de validación comercial)

- El diagnóstico empieza por una conversación guiada sobre un proceso concreto del negocio.
- Entregables propuestos: mapa sencillo del proceso revisado; oportunidades ordenadas por prioridad con contexto de impacto y esfuerzo; recomendación escrita del siguiente paso, incluida la opción de no automatizar.
- El cliente conoce el alcance, dedicación requerida y precio antes de aceptar o reservar. No se publican cifras de precio o duración hasta confirmarlas.
- No se solicita compartir credenciales ni información sensible; se indica de antemano qué ejemplos y datos mínimos hacen falta.
- El equipo identifica quién realizará el análisis y comparte su experiencia pertinente antes de formalizar el trabajo. No se atribuyen credenciales sin verificar.

### Paquete piloto sugerido para validar (no publicar aún)

- Alcance: un proceso operativo y una unidad de negocio.
- Dedicación del cliente: entrevista guiada de 75 minutos y devolución de 30 minutos.
- Entrega: mapa visual de una página, hasta tres oportunidades priorizadas, recomendación de siguiente paso; entrega objetivo en cinco días laborables desde la entrevista.
- Precio fijo piloto recomendado: 350 € + IVA. No cargarlo al copy público hasta aprobación del propietario y cálculo de coste interno.
- La recomendación de precio es una hipótesis. Como referencias amplias, una guía nacional de consultoría estratégica recoge 100–200 €/hora, y el barómetro de Malt sitúa la tarifa diaria media de consultores de estrategia en 416 €; las muestras no son equivalentes a este producto y solo sirven como orientación, no como tarifa validada.

## Flujo de página

1. Hero con propuesta clara y CTA principal «Empezar mi consulta».
2. Dolores reconocibles para un negocio pequeño, sin atribuirlos a todos los visitantes.
3. Explicación del diagnóstico general y sus entregables.
4. Recorrido de trabajo: entender, priorizar, diseñar e implantar con revisión humana.
5. Distinción entre Diagnose transversal y productos Go Once Business por vertical.
6. Salvaguardas: evidencias y supuestos separados, datos tratados con alcance claro, aprobación humana para decisiones sensibles.
7. Selector de sector y consulta breve; el formulario prepara un borrador de correo que la persona revisa y envía manualmente.

## Requisitos funcionales (EARS)

- RF-001: Cuando una persona visite la página, deberá entender en pocos segundos a quién ayuda Go Once y qué resultado ofrece.
- RF-002: Cuando una persona explore la oferta, deberá distinguir Diagnose (transversal) de Go Once Business (soluciones verticales).
- RF-003: Cuando la página mencione ejemplos sectoriales, deberá etiquetarlos como líneas o ejemplos y no sugerir disponibilidad si no está confirmada.
- RF-004: Cuando una persona active la CTA principal, deberá llegar al flujo de consulta para elegir sector y describir su necesidad.
- RF-005: Cuando la persona complete la consulta, la página deberá preparar un borrador de correo dirigido a `contact@goonceconsulting.com`; nunca afirmará que el correo se envió.
- RF-006: La página deberá adaptarse a móvil, permitir navegación por teclado, respetar `prefers-reduced-motion` y mantener contraste legible.
- RF-007: La página no deberá afirmar cifras, clientes, testimonios, certificaciones, integraciones ni resultados sin evidencia aprobada.
- RF-008: Mientras no haya backend, el formulario podrá preparar el borrador local en el navegador, pero no deberá guardar ni remitir los campos a un servidor.
- RF-009: Las llamadas a la acción principales deberán usar el mismo texto «Empezar mi consulta» y llevar al selector de sector.
- RF-010: Una sección de preguntas frecuentes deberá resolver dudas básicas sin prometer prestaciones ni disponibilidad no aprobadas.
- RF-011: La página deberá explicar qué recibe el cliente y cómo se acuerdan tiempo, precio y alcance antes de iniciar.
- RF-012: La página pública no deberá incluir referencias a demo, prueba local o previsualización.
- RF-013: La tipografía será sans serif en todos los niveles; textos funcionales y auxiliares cumplirán tamaños legibles definidos en el sistema visual.
- RF-014: El formulario de consulta requerirá un correo de contacto y una descripción breve del proceso; abrirá el borrador editable en el cliente de correo para revisión y envío manual.

## Fuera de alcance

- Captura/persistencia de leads o integración con CRM, agenda y mensajería. El contacto inicial se realiza desde el cliente de correo de la persona usuaria.
- Precio y duración concretos (pendientes de validación comercial), campañas, páginas de producto sectoriales completas y promesas de ROI.
- Análisis automático de URL, ejecución de agentes o consulta empresarial desde la landing.
- Publicación, dominio, analítica de terceros o gestión de consentimiento para seguimiento publicitario.

## Riesgos y decisiones pendientes

- El precio y la dedicación concretos siguen pendientes de validación comercial. El canal inicial es `contact@goonceconsulting.com`.
- Nombre, perfil y experiencia de la persona responsable deben completarse con datos verificables antes de presentar una ficha personal.
- Dominio de publicación y datos legales/de privacidad.
- Confirmar identidad visual y disponibilidad real de cada vertical/producto.
- Validar mensajes y oferta con entrevistas/pilotos; los precios del documento estratégico siguen siendo hipótesis.

## Criterios de aceptación

- Se identifica con claridad Go Once Consulting, Go Once Diagnose y Go Once Business.
- La página expresa dolores concretos y una solución entendible para más de un sector.
- Una persona no confunde las verticales de ejemplo con funcionalidades disponibles.
- La CTA conduce al correo de contacto y no afirma que el mensaje se haya enviado.
- Diseño usable en móvil, foco visible, semántica accesible y movimiento reducido respetado.
- No aparecen métricas o pruebas sociales inventadas.
