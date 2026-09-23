# Arquitectura y datos — criterios para el Blueprint

## Estado

No hay arquitectura ni proveedores aprobados. Este documento fija criterios para el Technical Blueprint descrito en [spec 004](../specs/004-diagnostico-equipo-agentes/spec.md); las opciones siguientes son preguntas de diseño, no instrucciones de compra o despliegue.

## Principios

- Empezar por un prototipo local, sintético y de alcance pequeño; no construir un SaaS completo antes de validar Diagnose.
- Preferir una aplicación modular simple si cubre requisitos de autorización, aislamiento, auditoría y operación.
- Separar organizaciones, casos, permisos, fuentes y memoria; probar explícitamente el aislamiento.
- Validar entradas en límites; no exponer credenciales al navegador ni incluir secretos en Git.
- Cada ejecución debe registrar objetivo, alcance permitido, entradas/fuentes, versión de agente/modelo, resultado, coste, revisión, errores y eventos necesarios para auditar.
- Poder pausar, reanudar con control y recuperar fallos sin duplicar acciones.
- No conectar fuentes, CRM, correo, pagos o mensajería hasta especificar finalidad, permiso, seguridad y revisión humana.

## Preguntas técnicas para el Blueprint

| Área | Decisiones por resolver |
|---|---|
| Aplicación y orquestación | monolito modular u otra alternativa; ejecución secuencial y límites por agente |
| Modelos | proveedor(es), ubicación de datos, retención, coste, latencia, fallback y evaluación |
| Investigación | fuentes públicas permitidas, atribución, términos y límites de recolección |
| Contratos | esquema JSON, validación, versionado y compatibilidad de cambios |
| Identidad y datos | autenticación, organización/caso, almacenamiento, cifrado, retención, exportación y borrado |
| Seguridad | mínimo privilegio, secretos, protección de entradas y revisión de proveedores |
| Operación | logs minimizados, métricas, alertas, cuotas, pausas, reintentos y recuperación |
| Interfaz | lenguaje claro, WCAG 2.2 AA, teclado, estados de error y accesibilidad móvil |
| Despliegue | entorno, responsables, backup, restauración, rollback y criterios de disponibilidad |

## Contrato conceptual `AgentRun`

La especificación define el objeto de trabajo mínimo: `case_id`, `organization_id`, etapa, alcance autorizado, afirmaciones con estado (`KNOWN`, `INFERRED`, `ASSUMED`, `UNKNOWN`), fuentes y fecha, oportunidades con referencias a evidencia, revisión humana, estado de propuesta y eventos. Es un contrato conceptual, no un esquema persistido ni una API aprobada.

Antes de almacenar datos de personas o empresas se debe decidir base jurídica/aviso aplicable, minimización, control de acceso, retención, borrado, exportación, encargados y respuesta a incidentes con revisión competente. La consulta actual no guarda datos en un servidor.

## Criterios previos a producción

No afirmar disponibilidad de producción hasta verificar autenticación, aislamiento, autorización, gestión de secretos, persistencia protegida, backups y restauración, auditoría, observabilidad, recuperación de fallos, evaluación IA, accesibilidad, privacidad y controles de despliegue. El estado actual es un prototipo local/sintético.
