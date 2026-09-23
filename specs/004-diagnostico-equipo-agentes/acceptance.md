# Evidencia de aceptación — 004 Diagnóstico y equipo inicial

Estado: especificación documental propuesta; implementación de agentes no iniciada.

| Criterio | Estado | Evidencia |
|---|---|---|
| Alcance inicial limitado a cinco roles | documentado | `spec.md`, sección Alcance MVP 0.1 |
| Objetivo, entradas, salidas, límites y parada de los roles | documentado | Descripción de cada rol y contrato de ejecución pendiente del Blueprint |
| Separación de etapas y aprobación de propuesta/MVP | documentado | Recorrido y RF-006 a RF-010 |
| Evidencia, incertidumbre y oportunidades sin promesas | documentado | RF-003 a RF-005 y contrato conceptual |
| Datos, privacidad, aislamiento y auditoría | requisitos documentados; diseño por resolver | RF-001, RF-009, RF-010 y Riesgos |
| Primer vertical elegido con evidencia | pendiente | RF-011; requiere entrevistas y decisión comercial |
| Arquitectura y proveedores elegidos | pendiente | Plan, decisiones técnicas del Blueprint |
| Validación automatizada/E2E del workflow | pendiente | Este cambio solo añade documentación; ejecutar antes de publicar |
| Cambios publicados en GitHub | completado | commit dbacd5f en origin/main; remoto verificado tras push autorizado |

| Contratos por rol con entrada, salida, límites y parada | documentado | spec.md, sección Contrato operativo por rol; docs/modelo-operativo-agentes.md |
| Secuencia lógica y revisión independiente sin sexto agente automático | documentado | spec.md, secciones Contrato operativo y puertas; docs/modelo-operativo-agentes.md |
| Puertas humanas para alcance, evidencia, diagnóstico, propuesta y piloto | documentado; implementación pendiente | spec.md, sección Secuencia y puertas G0–G4; docs/modelo-operativo-agentes.md |
| Visualización local enlazada al alcance y excluida como runtime | documentado | specs/005-visualizacion-diagnostico-local/; README.md |
| Technical Blueprint y ejecución real | pendiente | T3–T8; no se han seleccionado proveedor, persistencia ni despliegue |