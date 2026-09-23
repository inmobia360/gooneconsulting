# Go Once Business OS

Sistema operativo digital para organizar, automatizar y hacer crecer pequeños negocios. Este repositorio contiene la base de producto y de entrega guiada por especificaciones para la consultora **Go Once Consulting**.

## Tesis de producto

No vendemos "IA instalada". Vendemos resultados operativos medibles: menos trabajo manual, menos errores, mejor seguimiento comercial y una operación más visible. La IA es una capacidad dentro de un sistema gobernado por procesos, permisos, datos y revisión humana.

## Punto de partida

El primer producto vendible es **Go Once Diagnose**. El MVP posterior demuestra el recorrido completo: captación → diagnóstico → propuesta → implantación → soporte → medición. No se construirá un SaaS completo antes de validar ese recorrido con pilotos pagados.

## Método de trabajo

Este proyecto adopta Spec-Driven Development (SDD):

`Constitución → especificación → clarificación → plan → tareas → implementación → pruebas → validación → cambio de especificación`

Cada capacidad se define en `specs/` antes de escribirse; se implementa con criterios de aceptación y se valida requisito por requisito. Consulta [AGENTS.md](AGENTS.md) y [la constitución](docs/constitution.md) antes de contribuir.

## Documentación de arranque

- [Concepto y estrategia](docs/concepto-estrategico.md)
- [Arquitectura y datos](docs/arquitectura-y-datos.md)
- [Modelo operativo y puertas de control de los agentes](docs/modelo-operativo-agentes.md)
- [Visualización local sintética de Diagnose](prototypes/diagnostico/index.html)
- [Especificación de la visualización local](specs/005-visualizacion-diagnostico-local/spec.md)
- [Hoja de ruta y validación](docs/roadmap-y-validacion.md)
- [Especificación de la fundación](specs/001-foundation/spec.md)
- [Plan de la fundación](specs/001-foundation/plan.md)
- [Diagnóstico y equipo inicial de agentes](specs/004-diagnostico-equipo-agentes/spec.md)
- [Plan para validar y desarrollar el diagnóstico](specs/004-diagnostico-equipo-agentes/plan.md)

## Estado

Fase actual: definición fundacional. No hay automatizaciones, cobros ni comunicaciones externas activas. Cualquier conector, uso de datos personales o acción comercial requiere una especificación aprobada y los permisos correspondientes.

El modelo operativo de Diagnose estructura cinco roles lógicos secuenciales, sus contratos, límites y puertas humanas G0–G4. Todavía no ejecuta análisis con agentes sobre casos reales. La visualización local de prototypes/diagnostico/ es sintética, no persistente y sin conexión a modelos o backend. La arquitectura productiva, el vertical piloto, el precio y la oferta comercial siguen pendientes de validación/aprobación.

La landing puede ofrecer una orientación inicial transversal: el visitante elige un sector y recibe un resumen general de procesos y soluciones posibles. No es diagnóstico individual ni presupone el sector inmobiliario. El equipo especializado está documentado en [agents/sector-summary](agents/sector-summary/README.md) y [specs/006-resumen-soluciones-por-sector](specs/006-resumen-soluciones-por-sector/spec.md); los perfiles son documentos, todavía no agentes ejecutables.
