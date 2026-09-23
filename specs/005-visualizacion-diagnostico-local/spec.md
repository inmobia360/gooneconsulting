# 005 — Visualización local del diagnóstico

## Estado

Prototipo visual local, sintético y sin conexión. No es una aplicación de clientes ni autoriza persistencia, llamadas a modelos, conectores o acciones externas.

## Objetivo

Mostrar cómo una persona consultora podría revisar el flujo de Go Once Diagnose definido en la especificación 004: contexto del caso, cinco roles lógicos, afirmaciones con evidencia, oportunidades y una puerta de revisión humana.

## Decisiones de alcance

- El artefacto vive en prototypes/diagnostico/ y se abre como página local estática.
- Usa HTML, CSS y JavaScript del navegador, sin dependencias de ejecución ni servicios de red.
- Los datos del caso son ficticios y están identificados como demostración.
- La interacción se limita a editar el objetivo del ejemplo, reproducir una secuencia determinista y registrar una decisión de revisión en memoria.
- La decisión de revisión no aprueba una propuesta comercial, un piloto ni una implementación.
- No se guardan los datos al recargar y no se envían a ningún servidor.

## Requisitos funcionales (EARS)

- RF-001: Cuando se abra la visualización, deberá identificar claramente que el caso y sus datos son ficticios.
- RF-002: Cuando se muestre el análisis, deberá distinguir los cinco roles lógicos de la especificación 004 y sus resultados.
- RF-003: Cuando se muestre una afirmación, deberá indicar su estado epistémico; los hechos tendrán fuente y las inferencias explicarán su razonamiento y confianza.
- RF-004: Cuando se presente una oportunidad, deberá incluir evidencia, alternativa sin IA, esfuerzo/riesgo y una forma de validación.
- RF-005: Cuando se prepare el informe, deberá permanecer pendiente hasta que una persona registre la revisión de demostración.
- RF-006: Cuando se cambie el objetivo y se ejecute el ejemplo, el navegador deberá mostrar una secuencia determinista sin salir de la página.
- RF-007: En todo momento, la página no deberá realizar peticiones de red ni persistir entradas o decisiones.
- RF-008: La página deberá funcionar con teclado, tamaños móvil/escritorio y preferencia de movimiento reducido.

## Fuera de alcance

Autenticación, organizaciones/casos reales, backend, almacenamiento, IA generativa, scraping, integraciones, precios, propuestas comerciales, selección de vertical y despliegue.

## Criterios de aceptación

- El archivo principal abre sin instalación desde prototypes/diagnostico/index.html.
- La interfaz muestra la secuencia de cinco roles, afirmaciones con clasificación y fuentes, oportunidades y revisión humana.
- Ejecutar y revisar solo actualiza la demostración en memoria.
- El contenido deja claro que revisar el diagnóstico no autoriza una implementación.
- Controles etiquetados, foco visible, navegación por teclado y layout responsive.
