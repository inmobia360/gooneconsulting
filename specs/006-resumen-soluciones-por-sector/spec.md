# 006 — Resumen de soluciones por sector

## Contexto y usuario

La landing permite elegir una actividad económica y recibir una orientación breve sobre procesos frecuentes y soluciones que podrían explorarse. Debe servir a distintos sectores; el sector inmobiliario no es el supuesto por defecto.

La entrada inicial solo identifica el sector y, opcionalmente, una descripción breve del interés del visitante. No hay diagnóstico individual ni datos de empresa.

## Experiencia de la persona visitante

La persona elige su sector y la web le muestra una orientación breve directamente, sin exigir correo ni iniciar una comunicación. La opción de enviar una consulta de contacto es separada y opcional. Si la evidencia no alcanza, la web explica el límite en vez de presentar una respuesta inventada.

## Alcance y límites

Incluye diseño documental de un equipo de agentes, su flujo de trabajo, un contrato de salida versionado y criterios de revisión. Los perfiles no se ejecutan todavía: falta seleccionar runtime, modelo, fuente autorizada y política de publicación.

Fuera de alcance: rastreo web autónomo, conectores, almacenamiento de leads, inferir problemas de una empresa concreta, recomendaciones de proveedores, presupuestos, ROI, propuestas comerciales, contacto automático con visitantes ni despliegue.

## Requisitos (EARS)

- RF-001: Cuando se reciba un sector, el sistema deberá validar y normalizar el texto sin pedir datos personales.
- RF-002: Cuando el sector esté definido, el Director deberá coordinar investigación, mapa de procesos, detección de fricciones y oportunidades en ese orden.
- RF-003: Cuando se presenten afirmaciones sectoriales, el equipo deberá vincular hechos a fuentes autorizadas y separar hechos, inferencias y recomendaciones.
- RF-004: Cuando una afirmación no tenga evidencia suficiente, el Revisor deberá pedir corrección o bloquear su publicación.
- RF-005: Cuando se formule una oportunidad, deberá expresar el problema como patrón general, tipo de solución posible, esfuerzo relativo, dependencias y riesgos; no deberá prometer resultados ni ROI.
- RF-006: Cuando el equipo genere la respuesta, la web deberá mostrar al visitante un resumen breve y comprensible de posibles soluciones para el sector, sin exigir correo ni datos de contacto. El resumen deberá indicar que orienta sobre patrones del sector, no diagnostica su negocio.
- RF-007: Mientras no haya fuente/runtime aprobados, el flujo deberá detener la investigación externa y solicitar decisión; no inventará citas ni presentará perfiles como operativos.
- RF-008: Cuando el flujo falle o se pause, deberá conservar un estado de ejecución auditable y un motivo, sin guardar datos personales innecesarios.
- RF-009: Cuando una entrada no permita identificar el sector, el Director deberá pedir aclaración o devolver un resultado limitado, nunca adivinar.
- RF-010: Cuando se solicite un sector poco documentado, el equipo deberá informar el límite de evidencia y abstenerse de inventar patrones.
- RF-011: Cuando se muestre el resumen sectorial, deberá ofrecer una alternativa sin IA cuando sea razonable, explicar límites y diferenciar hechos, hipótesis e ideas posibles en lenguaje claro.

## Trazabilidad con el Prompt Maestro

- Secciones 62–63: se toma el núcleo reducido de GO Director, research, modelo/procesos, fricciones y oportunidades; solo el nivel público del Scanner.
- Sección 67: GO Director planifica, ejecuta etapas ordenadas, controla fallos, solicita revisión y sintetiza.
- Sección 68: cada etapa intercambia JSON versionado con evidencia, confidence numérica y estado KNOWN/INFERRED/ASSUMED/UNKNOWN.
- Secciones 66 y 78: se exige trazabilidad y revisión proporcionada al riesgo. Una consulta pública por sector no habilita acciones externas.
- Se excluyen URL de empresa, datos de empleados, herramientas internas, problemas de empresa, facturación, ROI, prospección, vertical inmobiliario predeterminado, propuestas e implementación porque el alcance confirmado solo pide sector y opciones posibles.

## Secuencia y equipo

1. **Director de Resumen Sectorial**: controla alcance, orden, entradas, bloqueos y salida final.
2. **Investigador Sectorial**: recopila evidencia pública mediante fuentes expresamente aprobadas.
3. **Analista de Modelo y Procesos**: sintetiza modelos operativos y procesos comunes, declarando variaciones.
4. **Detector de Fricciones**: deriva fricciones como hipótesis ligadas a procesos y evidencia.
5. **Diseñador de Oportunidades**: propone opciones proporcionales: mejora de proceso, reglas/automatización o IA cuando sea adecuada.
6. **Revisor de Evidencia y Calidad**: revisa independientemente afirmaciones, trazabilidad, límites y contrato; puede bloquear.

El Director solo prepara salida tras un dictamen aprobado. Cada perfil está en `agents/sector-summary/roles/`.

## Contrato y límites de datos

El borrador del contrato JSON v0.1 está en `agents/sector-summary/contracts/sector-summary.v0.1.schema.json`. Describe la salida; no es un endpoint ni una garantía de validación automática.

Minimización: no solicitar nombre, correo, empresa, clientes, documentos internos ni datos sensibles para el resumen sectorial. No conservar entrada fuera de lo necesario para completar el turno hasta definir retención y base legal. Las fuentes externas deben configurarse y aprobarse antes de activar el flujo.

## Aprobaciones y auditoría

Esta capacidad documental es de autonomía A0. Publicar fuentes, activar proveedores/modelos, guardar entradas o conectar CRM exige especificación y revisión adicionales. Mantener registro mínimo de identificador de ejecución, sector normalizado, versión de instrucciones/contrato, fuentes consultadas, estado de revisión, resultado y errores; no registrar datos personales innecesarios. Debe poder pausarse y reanudarse de forma segura.

## Riesgos y mitigaciones

- Generalización errónea: marcar inferencias y nombrar variación por subsector.
- Fuentes desactualizadas: registrar fecha de consulta y preferir fuentes primarias.
- Sesgo hacia IA: comparar solución no-IA, reglas/automatización e IA.
- Confusión con diagnóstico: incluir aviso de orientación sectorial en la salida.
- Falsa operatividad: rotular perfiles como documentos no ejecutables hasta elegir runtime.
- Inyección en fuentes: tratar contenido externo como datos no confiables, nunca como instrucciones.

## Preguntas para la activación futura

1. ¿Qué fuentes públicas y jurisdicciones se aprueban?
2. ¿Qué proveedor/runtime y modelo se usarán y con qué controles de privacidad/coste?
3. ¿La salida será solo borrador local o se publicará directamente en la web?
4. ¿Qué catálogo de sectores y mecanismo de actualización se mantendrá?
