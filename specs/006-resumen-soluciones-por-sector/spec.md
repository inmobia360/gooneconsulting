# 006 — Resumen de soluciones por sector

## Contexto y usuario

La landing permite elegir una actividad económica y recibir una orientación breve sobre procesos frecuentes y soluciones que podrían explorarse. Debe servir a distintos sectores; el sector inmobiliario no es el supuesto por defecto.

La entrada inicial solo identifica el sector y, opcionalmente, una descripción breve del interés del visitante. No hay diagnóstico individual ni datos de empresa.

## Alcance y límites

Incluye diseño documental de un equipo de agentes, su flujo de trabajo, un contrato de salida versionado y criterios de revisión. Los perfiles no se ejecutan todavía: falta seleccionar runtime, modelo, fuente autorizada y política de publicación.

No incluye rastreo web autónomo, conectores, almacenamiento de leads, inferir problemas de una empresa concreta, recomendaciones de proveedores, presupuestos, ROI, propuestas comerciales, contacto con visitantes ni despliegue.

## Requisitos (EARS)

- RF-001: Cuando se reciba un sector, el sistema deberá validar y normalizar el texto sin pedir datos personales.
- RF-002: Cuando el sector esté definido, el Director deberá coordinar investigación, mapa de procesos, detección de fricciones y oportunidades en ese orden.
- RF-003: Cuando se presenten afirmaciones sectoriales, el equipo deberá vincular hechos a fuentes autorizadas y separar hechos, inferencias y recomendaciones.
- RF-004: Cuando una afirmación no tenga evidencia suficiente, el Revisor deberá pedir corrección o bloquear su publicación.
- RF-005: Cuando se formule una oportunidad, deberá expresar el problema como patrón general, tipo de solución posible, esfuerzo relativo, dependencias y riesgos; no deberá prometer resultados ni ROI.
- RF-006: Cuando se genere la respuesta final, deberá ser breve, comprensible y expresar que orienta sobre el sector, no diagnostica al visitante.
- RF-007: Mientras no haya fuente/runtime aprobados, el flujo deberá detener la investigación externa y solicitar decisión; no inventará citas ni presentará perfiles como operativos.
- RF-008: Cuando el flujo falle o se pause, deberá conservar un estado de ejecución auditable y un motivo, sin guardar datos personales innecesarios.
- RF-009: Cuando una entrada no permita identificar el sector, el Director deberá pedir aclaración o devolver un resultado limitado, nunca adivinar.
- RF-010: Cuando se solicite un sector poco documentado, el equipo deberá informar el límite de evidencia y abstenerse de inventar patrones.

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
