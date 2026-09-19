# Instrucciones del repositorio

## Regla de entrega

No implementes una funcionalidad sin una especificación en `specs/NNN-nombre/`. Para cambios importantes, actualiza primero la especificación, el plan y las tareas. Cada tarea debe tener una condición explícita de “Hecho cuando”.

## Principios no negociables

1. Resultado de negocio antes que complejidad técnica.
2. Aislamiento estricto por organización y mínimo privilegio.
3. Humanos aprueban precios, contratos, permisos, pagos y comunicaciones sensibles.
4. Todo output de IA distingue hechos, hipótesis y recomendaciones, con fuentes y confianza.
5. Todo proceso automatizado debe poder auditarse, pausarse y recuperarse.
6. No introducir secretos en el repositorio; usar variables de entorno y gestores de secretos.

## Flujo SDD

1. Especificar requisitos en notación EARS y criterios de aceptación.
2. Resolver dudas antes de planificar.
3. Definir arquitectura, contratos, datos, riesgos y pruebas.
4. Dividir el plan en tareas pequeñas y verificables.
5. Implementar una tarea cada vez, con pruebas antes o junto al código.
6. Validar RF por RF y enlazar evidencia de prueba.

## Calidad mínima

- TypeScript estricto y validación de entradas en límites de API.
- Pruebas de autorización y aislamiento multiempresa para toda ruta con datos.
- WCAG 2.2 AA, navegación por teclado y estados de carga/error/vacío.
- Registros estructurados sin datos personales innecesarios.
- Revisión de coste, latencia y trazabilidad para cada flujo de IA.

## Convención de artefactos

`specs/NNN-nombre/{spec.md,plan.md,tasks.md,acceptance.md}`. Los ADR van en `docs/adr/` y las plantillas de sector en `templates/`.
