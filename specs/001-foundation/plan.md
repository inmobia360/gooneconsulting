# Plan — 001 Fundación

## Decisiones adoptadas

- Monolito modular multi-tenant para MVP; PostgreSQL como fuente de verdad.
- CONSULTING dirige; Coordinador controla cierre; Calidad aporta evidencia independiente.
- La primera unidad vendible es Diagnose y el MVP recorre el ciclo completo.
- Inmobiliario es hipótesis de primera vertical, pendiente de validar por disponibilidad de pilotos.

## Orden de implementación posterior

1. Resolver dudas abiertas y aprobar requisitos.
2. Diseñar la experiencia y landing con contenido verificable y CTA real.
3. Implementar identidad, organizaciones, roles y auditoría.
4. Implementar captación, Diagnose y propuesta con revisión humana.
5. Implementar portal, trabajo, documentos y tickets.
6. Añadir automatizaciones y asistente acotados, cada uno con pruebas, métricas y runbook.

## Pruebas de aceptación previstas

- Matriz de roles y pruebas RLS por tenant.
- Recorrido de lead a Diagnose sin comunicación ni cobro automático.
- Simulación de fallo/reintento/pausa de automatización.
- Evaluación de output IA frente a fuentes y bloqueo de acción A3.
- Recorrido responsive, teclado, contraste y estados vacíos/error.
