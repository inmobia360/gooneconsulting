# Arquitectura y modelo de datos

## Decisión de producto

Construir un monolito modular multi-tenant durante el MVP. Separar dominios y contratos desde el inicio, pero no microservicios. Las integraciones asíncronas pasan por una cola y una capa de conectores; ninguna credencial de cliente queda en el navegador.

## Alternativas técnicas

| Criterio | MVP rápido y económico | SaaS escalable |
|---|---|---|
| Web y API | Next.js + TypeScript, API routes | Next.js/TypeScript + API modular (NestJS o Fastify) |
| Datos | PostgreSQL gestionado + Prisma | PostgreSQL con RLS, migraciones, réplicas y pooler |
| Auth | Auth.js o Supabase Auth | proveedor OIDC con SSO, SCIM futuro y MFA |
| Archivos | S3 compatible gestionado | S3 compatible con cifrado KMS, lifecycle y AV scan |
| Flujos | n8n/Make con webhooks firmados | workers (Temporal/BullMQ), conectores versionados |
| IA | proveedor LLM detrás de gateway propio | gateway multmodelo, evaluaciones y observabilidad |
| Observabilidad | Sentry + logs estructurados | OpenTelemetry, SIEM, métricas y auditoría inmutable |

Recomendación: alternativa MVP con PostgreSQL, almacenamiento S3, Next.js y n8n en entorno separado. Condiciones para extraer servicios: >30 clientes activos, SLA contractual, límites de ejecución, o un dominio que necesite escalado/seguridad independiente.

## Dominios funcionales

`identity` · `organizations` · `crm` · `diagnostics` · `projects` · `work` · `documents` · `proposals` · `billing` · `support` · `automations` · `ai` · `reporting` · `templates` · `audit`.

## Entidades mínimas

| Entidad | Campos clave | Regla |
|---|---|---|
| Organization | id, nombre, sector, plan, estado | raíz del tenant |
| User / Membership | user_id, organization_id, role, estado | pertenencia y permisos explícitos |
| Lead | origen, consentimiento, estado, propietario | ningún contacto sin base/consentimiento registrado |
| Diagnostic | respuestas, procesos, hallazgos, aprobador | versión inmutable al entregar |
| Project / Milestone | alcance, estado, fechas, aceptación | evidencia de aceptación por hito |
| Automation | versión, propietario, estado, límites | pausada por defecto hasta prueba aprobada |
| AgentRun | objetivo, entradas, fuentes, modelo, coste, confianza | trazabilidad obligatoria |
| Document | clasificación, owner, retención, acceso | ACL de tenant y propósito |
| Ticket | prioridad, SLA, estado, tiempo consumido | enlaza horas incluidas |
| Subscription / Invoice | plan, límites, periodo, estado | pagos solo por proveedor autorizado |
| AuditEvent | actor, acción, recurso, resultado, correlación | append-only y sin secreto |

## Aislamiento, permisos y auditoría

Cada consulta de negocio filtra `organization_id`; las políticas RLS refuerzan esa restricción en base de datos. Roles iniciales: `platform_admin`, `consulting_director`, `coordinator`, `delivery_specialist`, `client_admin`, `client_member`, `client_viewer`. Permisos sensibles (facturar, modificar roles, conectar fuentes, activar automatizaciones y enviar comunicaciones) se conceden por capacidad, con doble confirmación cuando aplique.

El log guarda quién, qué, cuándo, origen, correlación, resultado y versión de flujo/modelo. Nunca guarda tokens, contraseñas, documentos completos ni prompts con datos personales si puede referenciarlos por ID.
