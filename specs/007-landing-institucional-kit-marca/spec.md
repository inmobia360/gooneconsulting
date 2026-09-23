# 007 — Landing institucional y kit de marca

## Contexto

Se incorporan al repositorio una página institucional estática y los activos compartidos de marca. Deben convivir con el prototipo de landing sectorial y el equipo documental sin sustituirlos ni sugerir que existe un runtime.

## Requisitos (EARS)

- RF-001: Cuando una persona abra el prototipo institucional, el navegador deberá mostrar una página informativa estática sin formularios, backend, analítica ni persistencia.
- RF-002: Cuando un equipo consulte la marca, deberá encontrar tokens, CSS y activos visuales en rutas documentadas dentro del repositorio.
- RF-003: Cuando se publique la página institucional, deberá permanecer separada del selector sectorial y no deberá presuponer un sector económico.
- RF-004: El paquete publicado no deberá incluir prompts maestros, archivos ZIP fuente ni documentos de un vertical sectorial no solicitado.

## Alcance

Incluye el HTML institucional autocontenido como prototipo, el kit visual compartido (tokens, CSS, tablero y recurso SVG), documentación y enlaces desde README. No incluye despliegue, formularios, integraciones, runtime de agentes, fuente vectorial del logo ni publicación de archivos de trabajo fuente.

## Datos y comportamiento

La página no solicita datos personales ni realiza llamadas de red propias. El JavaScript actualiza el año del pie. El CSS del kit incluye una importación de Google Fonts; ese CSS no se importa en la página institucional entregada. Un producto que lo utilice solicitará esas fuentes a Google Fonts.

## Riesgos

- Confusión entre el prototipo institucional y el resumen sectorial: mitigada con rutas, títulos y documentación separados.
- Interpretar el tablero raster como logo de producción: la documentación prohíbe reconstruir o usar el tablero como logotipo final.
- Dependencia de fuentes externas al importar el CSS: documentar y resolver alojamiento/licencia/privacidad antes de su uso productivo.
