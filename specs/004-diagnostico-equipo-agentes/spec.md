# 004 — Diagnóstico Go Once y equipo inicial de agentes

## Estado

Especificación propuesta para validar. No autoriza conectores reales, captura de datos de clientes, acciones comerciales ni despliegue.

## Objetivo

Definir la primera capacidad de Go Once AI OS: convertir una consulta empresarial en un diagnóstico útil, trazable y revisado por una persona, y establecer el equipo mínimo que lo prepara. El diagnóstico ayuda a decidir qué explorar; no promete que la empresa necesite IA ni que las hipótesis basadas en información pública describan sus procesos internos.

## Producto y secuencia

La landing y Go Once Business son vías de entrada y descubrimiento. La prestación inicial es Go Once Diagnose. El ciclo completo mantiene estados separados:

`Consulta → Entrevista → Diagnóstico → Propuesta → Aprobación explícita → MVP acotado → Feedback → Iteración o cierre`

No se genera ni presenta un MVP sectorial, no se inicia implementación y no se contrae gasto antes de aprobar el alcance correspondiente. La entrada web actual prepara un borrador de correo manual; este documento no la convierte en un formulario conectado.

## Alcance MVP 0.1

Cinco roles lógicos; no implican cinco servicios autónomos ni ejecución paralela:

1. **GO Director**: recibe objetivo y límites autorizados, decide qué análisis procede, asigna subtareas, vigila presupuesto/errores y consolida el informe. No aprueba su propio resultado ni realiza acciones externas.
2. **Company Research**: reúne evidencia pública permitida sobre empresa, oferta, ubicación declarada y fuentes. No infiere procesos internos como hechos ni recopila datos personales innecesarios.
3. **Business Model Analyst**: resume clientes, propuesta de valor, canales y operación conocida; marca vacíos y prepara preguntas de entrevista. Procesos se mantienen como subfunción inicial.
4. **Pain Point Detector**: organiza fricciones declaradas por el empresario y posibles hipótesis, con impacto y evidencia por separado. No diagnostica con certeza a partir de la web.
5. **AI Opportunity Agent**: propone mejoras posibles, incluyendo alternativas sin IA, y prioriza por valor, esfuerzo, riesgo, dependencia de datos y validación requerida. No promete ahorro, ROI ni resultados.

Fuera del primer incremento automatizado: cálculo de ROI financiero, arquitectura detallada de solución, generación de demos, propuestas comerciales finales, prospección a escala, integraciones, implementación y monitorización. Se pueden hacer manualmente tras la revisión y aprobación aplicables.

## Recorrido y puertas de control

1. **Consulta/intake**: sector, reto y datos de contacto aportados voluntariamente; minimización, propósito y consentimiento deben definirse antes de conectar backend.
2. **Entrevista**: preguntar por proceso, roles, frecuencia, excepciones, herramientas, tiempos, impacto y restricciones. El cliente corrige o confirma; no se inventan respuestas.
3. **Diagnóstico**: director orquesta investigación y análisis; cada afirmación indica estado epistémico, fuente, fecha y confianza.
4. **Revisión humana**: una persona contrasta hechos e hipótesis, completa vacíos y decide qué puede compartirse con el cliente.
5. **Entrega**: mapa sencillo del proceso actual conocido, fricciones, oportunidades priorizadas, preguntas abiertas y siguiente paso recomendado. Cada oportunidad puede concluir “no usar IA”.
6. **Propuesta**: alcance, entregables, exclusiones, precio/estimación, calendario, datos, riesgos y éxito esperado como propuesta pendiente.
7. **Aprobación explícita**: aprobación identificable del alcance y condiciones; cambios generan nueva revisión. Sin aprobación no hay MVP.
8. **MVP/piloto**: entorno y datos sintéticos o expresamente autorizados, alcance mínimo y revisión humana según riesgo.
9. **Feedback**: registrar evidencia, incidencias y decisión de iterar, ampliar o cerrar.

## Requisitos (EARS)

- RF-001: Cuando se acepte una consulta, el sistema deberá conservar el identificador de organización/caso y su etapa; los datos de una organización no serán accesibles desde otra.
- RF-002: Cuando el Director asigne trabajo, deberá registrar objetivo, alcance permitido, entradas, fuentes requeridas, responsable lógico, estado y límite de coste/tiempo.
- RF-003: Cuando se use evidencia, cada afirmación deberá clasificarse como `KNOWN`, `INFERRED`, `ASSUMED` o `UNKNOWN`; `KNOWN` incluirá fuente y fecha, e `INFERRED` incluirá razonamiento y confianza.
- RF-004: Cuando falte información esencial, el agente deberá preguntar o devolver el vacío; no podrá completar como hecho datos de proceso, volumen, coste, ahorro o ROI.
- RF-005: Cuando se generen oportunidades, deberán incluir problema, evidencia, usuario afectado, alternativa no IA cuando proceda, valor esperado cualitativo, esfuerzo, riesgo, dependencias y forma de validación.
- RF-006: Cuando se prepare un diagnóstico para el cliente, deberá existir revisión humana registrada antes de su entrega.
- RF-007: Cuando se prepare una propuesta, su estado inicial deberá ser `pending_approval`; solo una aprobación humana explícita y auditable permitirá crear un alcance aprobado.
- RF-008: Cuando el alcance no esté aprobado, el sistema deberá bloquear tareas de implementación, gasto, integración real y comunicación de compromisos.
- RF-009: Cuando ocurra un error, límite de coste, duda de permiso o salida inconsistente, el flujo deberá pausarse, registrar el bloqueo y permitir reanudación controlada.
- RF-010: Cuando un caso se cierre, deberá conservar entradas autorizadas, fuentes, versiones, resultados, revisiones, decisiones, errores y métricas técnicas necesarias, minimizando datos personales.
- RF-011: Cuando se elija un vertical, la prioridad deberá justificarse con entrevistas/evidencia de acceso, frecuencia del problema, impacto y disponibilidad de piloto; la recomendación del prompt no se considerará aprobación comercial.
- RF-012: Cuando un agente proponga tecnología, proveedor o repositorio externo, la propuesta deberá incluir adecuación, licencia/seguridad, coste, datos y alternativa; no instalará ni conectará por sí mismo.

## Contratos de datos iniciales

Formato conceptual, no esquema de base de datos aprobado:

```json
{
  "case_id": "opaque-id",
  "organization_id": "opaque-id",
  "stage": "interview|diagnosis|proposal|approved_scope|mvp|feedback|closed",
  "authorized_scope": [],
  "claims": [{
    "text": "",
    "status": "KNOWN|INFERRED|ASSUMED|UNKNOWN",
    "source": "",
    "observed_at": "",
    "confidence": null
  }],
  "opportunities": [{
    "problem": "",
    "evidence_refs": [],
    "option_without_ai": "",
    "expected_value": "",
    "effort": "",
    "risks": [],
    "dependencies": [],
    "validation": ""
  }],
  "human_review": {"status": "not_requested|pending|approved|rejected", "reviewer": null, "decision_at": null},
  "proposal_status": "not_created|pending_approval|approved|rejected",
  "events": []
}
```

Campos de contacto e información personal quedan fuera de este contrato hasta aprobar minimización, base/aviso, retención, control de acceso y borrado. Los estados y contratos definitivos deberán documentarse antes de persistirlos.

## Agentes posteriores, no MVP

Process Discovery (separado si entrevistas muestran valor), ROI/Business Case (solo con datos validados), Solution Architect, Open Source Research, Demo Generator, Commercial Strategy, Proposal Generator, Implementation Planner, Software Engineer, QA, Security & Compliance y Knowledge Manager. GO Director conserva coordinación; Calidad debe tener independencia suficiente para bloquear aceptación.

## Verticales

Candidatos a validar: servicios técnicos a domicilio, profesionales inmobiliarios y despachos profesionales; después clínicas/bienestar, reformas/construcción, agencias digitales, comercio multicanal y formación. El prompt maestro llama al inmobiliario primer vertical y automoción segundo; la landing prioriza otros tres candidatos. Ninguno queda seleccionado por esta especificación. La decisión requiere entrevistas y evidencia comparables; datos entre empresas no se mezclarán de forma identificable.

## Riesgos y límites

- La investigación pública no equivale a descubrimiento de operaciones internas.
- ROI, precios, plazos y capacidades son desconocidos hasta validación y aprobación.
- Cualquier sector con datos sensibles requiere revisión de privacidad/seguridad antes de aceptar esos datos.
- No añadir crawling no autorizado, outreach, cuentas, persistencia, conectores o datos de clientes en este MVP.
- El repositorio es una demo/prototipo local, no un sistema de producción.

## Criterios de aceptación

- Cinco roles MVP tienen propósito, entradas, salidas, límites y criterio de parada documentados.
- Flujo y puertas de aprobación distinguen entrevista, diagnóstico, propuesta, alcance aprobado, MVP y feedback.
- Un informe distingue hechos, inferencias, supuestos y desconocidos, con fuentes/confianza cuando correspondan.
- Una propuesta queda pendiente y la implementación permanece bloqueada hasta aprobación explícita.
- Oportunidades admiten recomendar una alternativa sin IA y no presentan ROI no respaldado.
- Se conserva aislamiento organizativo, auditoría, pausa y recuperación como requisitos previos a backend.
- La selección del primer vertical permanece pendiente de evidencia comparativa.
- La arquitectura técnica y los proveedores quedan como decisión del Blueprint, no se fijan por inferencia del prompt.
