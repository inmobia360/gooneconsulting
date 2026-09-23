# Evidencia de aceptación — 003 Flujo Go Once Business

| Criterio | Estado | Evidencia |
|---|---|---|
| Enlace Diagnose → Business | implementado | La tarjeta Go Once Business enlaza a `#business-flow`. |
| Etapas de validación y aprobación | implementado | Seis etapas visibles en `#business-flow`: entender, buscar patrones, validar, proponer/aprobar, MVP y decisión de escalar. |
| Selector de ocho sectores y opción Otro | implementado | Desplegable nativo con ocho actividades y botón separado para escribir un sector no incluido. |
| Ejemplos de procesos por sector | implementado | Cada opción muestra puntos de trabajo posibles para analizar, redactados como hipótesis de diagnóstico. |
| Consulta breve por pasos | implementado y comprobado en navegador | Al seleccionar Servicios técnicos se habilita Continuar y aparece el segundo paso con correo y reto. |
| Borrador editable dirigido a Go Once | implementado en código | El envío válido construye asunto y cuerpo con sector, correo y reto para `contact@goonceconsulting.com` y abre el cliente de correo del visitante. El envío no se probó para evitar lanzar una acción externa. |
| No se almacenan ni remiten datos desde la web | implementado | No hay endpoint ni persistencia; la única acción final es una URL `mailto:` iniciada por el visitante. |
| CTA principal coherente | comprobado en navegador | Cabecera, hero, entregables y CTA final conducen directamente a `#sector-explorer`; el paso final se titula «Preparar mi consulta». |
| Responsive, teclado, foco y movimiento reducido | pendiente de revisión específica | — |
| Precio y capacidades de producto sin inventar | revisado | Los ejemplos se presentan como procesos que podrían analizarse; los verticales se identifican como exploratorios y no se anuncian precio ni fecha de lanzamiento. |
