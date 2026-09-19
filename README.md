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
- [Modelo operativo de agentes](docs/modelo-operativo-agentes.md)
- [Hoja de ruta y validación](docs/roadmap-y-validacion.md)
- [Especificación de la fundación](specs/001-foundation/spec.md)
- [Plan de la fundación](specs/001-foundation/plan.md)

## Estado

Fase actual: definición fundacional. No hay automatizaciones, cobros ni comunicaciones externas activas. Cualquier conector, uso de datos personales o acción comercial requiere una especificación aprobada y los permisos correspondientes.
