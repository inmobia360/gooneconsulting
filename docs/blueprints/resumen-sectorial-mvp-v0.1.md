# GO ONCE AI Opportunity Scanner — Sector Summary MVP 0.1 Technical Blueprint

## Alcance derivado del Prompt Maestro

Este blueprint aplica al nivel público del Opportunity Scanner y al flujo acordado después: la persona elige un sector y recibe una orientación breve de posibles soluciones. No se solicita una web, plantilla de empleados, herramientas, problemas, facturación ni correo para mostrar el resumen. El correo es una consulta opcional separada.

La estructura jerárquica GO Director → subagentes, la ejecución ordenada, los contratos JSON, la evidencia/confianza, la revisión, el control de coste y las puertas humanas siguen el Prompt Maestro. No se activa su supuesto de priorizar inmobiliario: el flujo cubre un catálogo transversal, con estado limitado para sectores aún no investigados.

Fuera de alcance: análisis de empresas concretas, captación/prospección automática, ROI, precios, propuestas, demo personalizada, implementación, memoria de clientes, base de datos, autenticación y multi-tenancy de aplicación. El resultado no afirma ahorro, prevalencia de problemas ni existencia de un producto vertical.

## A. System Architecture

Landing estática → API sin estado → GO Director → pasos de agente con contexto mínimo → revisor independiente → GO Director valida contrato → respuesta para la landing.

El modelo y la clave viven únicamente en el servidor. Las fuentes son un paquete curado con versión y aprobación; no se rastrean webs ni se aceptan URLs aportadas por visitantes en el MVP. El módulo de recomendaciones compara proceso, automatización y uso opcional de IA.

Entorno actual: prototipo HTML/CSS/JavaScript sin servidor de aplicación. La integración de generación no se considera activa.

## B. Agent Architecture

1. GO Director: valida sector, ejecuta plan y política, controla estados y sintetiza solo tras PASS.
2. Sector Research: recupera evidencias únicamente del paquete aprobado.
3. Business Model and Process: modela áreas/procesos del sector y variaciones; no caracteriza a una empresa.
4. Pain Point Detector: registra fricciones como KNOWN si están documentadas o INFERRED/ASSUMED si son hipótesis.
5. Opportunity Agent: propone alternativas de proceso, reglas/automatización e IA opcional, sin ROI.
6. Evidence and Quality Reviewer: revisión independiente; PASS, REVISE o BLOCK.

El equipo no es una conversación libre. Cada paso entrega el contrato de handoff versionado. El Director conserva solo campos necesarios para el siguiente paso.

## C. Execution Graph

Entrada validada
→ carga del paquete sectorial aprobado
→ Sector Research
→ Business/Process
→ Pain Point
→ Opportunity
→ Quality Review
→ Director valida esquema y redacta
→ respuesta completed/limited/blocked.

Transiciones:
- Si falta paquete o cobertura, finalizar limited con incógnitas y opción de consulta humana.
- Si aparece fuente no autorizada, PII o contradicción sustancial, pausar/blocked.
- REVISE vuelve al responsable con correcciones acotadas. Un límite de iteraciones detiene el run.
- Solo PASS permite una salida completed.
- Errores preservan etapa, código y estado; no se reintenta una acción externa porque no existen acciones externas.

## D. Data Schema

Entrada: identificador de catálogo o texto libre de sector (máximo 80 caracteres), locale fijo del sitio. Sin campos de organización, persona, correo, URL de empresa, nota privada ni documento.

Intermedios: run_id aleatorio, versión de prompt/contrato, etapa, estado, hallazgos KNOWN/INFERRED/ASSUMED/UNKNOWN, evidencia, confianza 0–1, procesos, fricciones, oportunidades, incógnitas y resultado del revisor.

Salida: esquema sector-summary.v0.1; facts/assumptions, fuentes, alternativas de solución, limitaciones y estado.

Persistencia: ninguna en MVP. El cuerpo de solicitud/respuesta no se registra. Retención de logs técnicos mínimos debe decidirse antes del despliegue.

## E. JSON Contracts

- Handoff entre roles: agents/sector-summary/contracts/agent-handoff.v0.1.schema.json.
- Salida visible al visitante: agents/sector-summary/contracts/sector-summary.v0.1.schema.json.
- Todo hecho requiere referencias de evidencia; una inferencia incluye razonamiento y fuentes; una suposición queda etiquetada. Las recomendaciones no incluyen estimaciones económicas.
- El revisor valida las mismas referencias usadas por la salida final; los identificadores deben resolver dentro de la evidencia del run.

Los esquemas son contratos de diseño hasta conectarlos a un validador JSON Schema.

## F. Memory Design

Sin memoria de sesión, empresa o usuario. Cada run parte del paquete curado publicado y versionado por sector. El catálogo conserva solo contenido aprobado, fuentes públicas, responsable de revisión y fecha de revisión; no conserva formularios de contacto ni historial de visitantes.

## G. Model Router

Interfaz del servidor separa Director, workers y reviewer del SDK concreto. El proveedor/modelo, región de procesamiento, filtros de retención, topes de coste y latencia requieren decisión antes de conectar un modelo.

Recomendación: comenzar con un proveedor y un modelo aprobado, esquema estricto en cada paso y límite máximo de seis llamadas por run; comparar calidad/coste antes de añadir routing. No se incorpora proveedor ni clave en este cambio.

## H. Tool Permissions

| Rol | Lectura | Escritura |
|---|---|---|
| Director | entrada sectorial, contratos y paquete aprobado | estado efímero y respuesta |
| Research | referencias públicas allowlisted del paquete | findings y citas |
| Business/Process | findings aprobados | mapa de procesos |
| Pain | procesos y evidence refs | hipótesis de fricción |
| Opportunity | fricciones revisadas | alternativas cualitativas |
| Reviewer | todos los artefactos, solo lectura | veredicto y hallazgos de revisión |

Ningún rol navega fuera del paquete, llama al correo, CRM, calendario, archivos de visitantes o sistemas del cliente. No hay herramientas de escritura externa.

## I. Security Model

- Validar sector contra catálogo o aplicar tope de longitud y caracteres al texto libre.
- Rechazar propiedades desconocidas y cuerpos sobredimensionados.
- Rate limit y protección antiabuso antes de público; origen configurado por entorno.
- Secretos del modelo solo en el servidor mediante gestor de secretos; nunca en HTML, JavaScript, logs ni Git.
- Tratar textos de fuente como datos no confiables; las instrucciones embebidas no alteran el prompt ni permisos.
- Evitar PII por diseño. El formulario de consulta sigue en mailto del cliente y no forma parte del API.
- Timeout, límite de tokens, límite de iteraciones, circuit breaker y apagado global.
- Evaluación legal, privacidad y condiciones del proveedor antes de procesar datos fuera del sitio.

## J. Observability and Cost

Registrar solo run_id, versión, sector_id (no texto libre), stage, status, duración, código de error, número de fuentes y tokens/coste agregado si el proveedor lo expone. No registrar prompts/respuestas completas, correo ni datos libres.

Métricas: tasa completed/limited/blocked, latencia por etapa, rechazo de schema, hallazgos de reviewer, coste por run y tasa de abstención. Alertas ante aumento de errores, coste o resultados sin evidencia. Los logs deben tener retención mínima aprobada.

## K. UX Wireframe

Selector de sector
→ resumen visible directamente:
- síntesis general y aviso “no es diagnóstico de tu negocio”;
- oportunidades etiquetadas como posibilidades;
- opción de proceso sin IA, automatización e IA opcional;
- fuente/fecha y nivel de confianza cuando hay evidencia;
- límite visible y sin recomendaciones fabricadas si el sector no tiene cobertura;
- botón opcional “Preparar una consulta”.

No mostrar agente como “en ejecución” si la generación no está conectada. Si se activa más adelante, comunicar espera/error con texto claro y opción de reintento seguro. Teclado, lector de pantalla, foco, contraste y movimiento reducido deben validarse en la UI real.

## L. API Specification

Propuesta pendiente de implementación:

POST /api/public/sector-summary

Request:
- sector_id para opción del catálogo, o sector_text limitado a 80 caracteres;
- nunca ambos;
- no correo ni detalles de negocio.

Response:
- objeto conforme a sector-summary.v0.1;
- 200 para completed o limited;
- 422 para entrada no válida;
- 429 para limitación;
- 503 para runtime/circuit breaker;
- respuesta bloqueada con código público y sin detalles internos sensibles.

No exponer nombres de proveedores, prompts internos, stack traces ni secretos. CORS debe permitir solo el origen público configurado. Este contrato HTTP no está activo.

## M. Test and Evaluation Strategy

Antes de activar:
- validación JSON Schema en cada handoff y salida;
- casos de sector conocido, ambiguo y fuera de catálogo;
- fuente contradictoria, antigua, inyectada y no aprobada;
- afirmación sin cita, supuesto mal etiquetado y recomendación que prometa ROI;
- reviewer BLOCK/REVISE/PASS y límites de reintentos;
- regresión de coste, latencia y abstención;
- UI escritorio/móvil, teclado, lector de pantalla, contraste y reduced motion;
- pruebas de no persistencia/PII y seguridad del endpoint.

La simulación DOM del prototipo valida solo su secuencia local; no demuestra generación, esquema, accesibilidad visual ni calidad de agentes.

## N. Infrastructure

Fase actual: archivos estáticos servidos localmente. Producción requiere elegir host para API, runtime de secretos, límites de red, rate limit, monitorización y despliegue. No se añade base de datos; el catálogo puede versionarse como contenido revisado en Git.

La salida se debe poder pausar globalmente sin quitar el resto de la landing. El fallback sin runtime no debe afirmar que una respuesta fija fue generada o revisada por agentes.

## O. Cost Model

Coste por run = suma de tokens entrada/salida de los pasos ejecutados × tarifa del modelo aprobado + coste de infraestructura/abuso. La tarifa actual queda sin calcular hasta elegir proveedor y modelo.

Límites iniciales configurables: seis etapas como máximo, longitud de salida acotada, timeout total, límite diario por IP con privacidad apropiada y kill switch. Antes de habilitar público medir calidad y coste con sectores/casos sintéticos revisados; no perseguir ROI de empresas visitantes.

## Decisions required before live agents

1. Proveedor/modelo, región, privacidad, coste máximo por ejecución y gestor de secretos.
2. Fuentes/dominios y sectores a publicar, responsable y cadencia de revisión.
3. Retención permitida para telemetría técnica.
4. Aprobación de copy estático y de la transición del prototipo a resultado basado en evidencia.
5. Host/origen público y política de rate limit.

## Build sequence

1. Ratificar arquitectura, permisos y fuentes aprobadas.
2. Implementar validador de contratos y runtime adapter sin claves en frontend.
3. Implementar GO Director y ejecución ordenada con parada/review.
4. Conectar fuente curada para un sector transversal piloto, elegido sin prioridad inmobiliaria.
5. Integrar respuesta y errores/limitaciones en landing.
6. Evaluar un sector cubierto y uno sin cobertura; ampliar catálogo solo con evidencia.
