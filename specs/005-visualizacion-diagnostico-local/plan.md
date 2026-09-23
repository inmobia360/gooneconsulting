# Plan — 005 Visualización local del diagnóstico

## Dirección

- Extender el lenguaje visual de Go Once con azul noche, violeta, lima y blanco cálido.
- Hacer de la trazabilidad el elemento distintivo: una bandeja de evidencia donde hechos, inferencias, supuestos y vacíos se lean de un vistazo.
- Mantener el alcance como demo estática, sin framework ni runtime adicional.
- Toda acción de demostración queda en memoria y explica sus límites.

## Arquitectura

- index.html: estructura semántica, controles y contenido de ejemplo.
- styles.css: sistema visual responsive y estados de movimiento reducido.
- script.js: estado local determinista, validación de entradas y renderizado de la simulación.
- Reutilizar el logotipo y la tipografía local del prototipo de landing mediante rutas relativas; no añadir activos binarios.

## Riesgos y controles

- Confusión entre demo y producto real: rótulos persistentes de datos ficticios y sin conexión.
- Exceso de autoridad de las salidas: clasificación epistémica, fuentes visibles y revisión pendiente.
- Confusión entre revisión y aprobación comercial: texto explícito de que no habilita piloto ni implementación.
- Pérdida de acceso por movimiento/animación: mantener el contenido disponible sin animación y controles nativos.

## Verificación prevista

- Inspección de apertura local y del flujo de ejecución/revisión.
- Revisión del comportamiento con teclado y anchura móvil/escritorio.
- Inspección de que JavaScript no contiene llamadas de red ni almacenamiento persistente.
