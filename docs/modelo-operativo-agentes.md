# Modelo operativo de agentes

## Jerarquía

```text
CONSULTING — Director de agentes y responsable de la dirección
├── COORDINADOR — control de objetivos, pendientes, bloqueos e informes
├── CALIDAD — validación funcional, datos, automatizaciones y outputs IA
├── Estrategia y negocio
├── Diagnóstico empresarial
├── Automatización e integraciones
├── IA y conocimiento
├── Comercial
├── Marketing y contenidos
├── Soporte y éxito del cliente
├── Seguridad, legal y protección de datos
├── Finanzas, suscripciones y rentabilidad
└── Plataforma y datos
```

## Director: CONSULTING

CONSULTING recibe el objetivo aprobado, formula un plan, asigna responsables y define criterios de éxito. Puede leer el estado consolidado, pero no puede cambiar precios, contratos, permisos, pagos o enviar comunicación sensible sin una aprobación humana registrada. Cierra un ciclo solo cuando el Coordinador declara ausencia de pendientes críticos y Calidad aporta evidencia de aceptación.

## Coordinador

Mantiene el registro de objetivos, dependencias, responsables, bloqueos y decisiones. Cada ciclo revisa: alcance, progreso frente a criterios, tareas sin dueño, vencimientos, costes, riesgos y acciones no ejecutables. Emite al Director un informe con: estado (verde/ámbar/rojo), evidencia, pendientes, bloqueos, decisión solicitada y recomendación. No resuelve silenciosamente un bloqueo ni marca una tarea como completa sin evidencia.

## Calidad

Es independiente de quien implementa. Verifica criterios de aceptación, aislamiento de tenant, permisos, datos de prueba, recuperación de fallos, resultados de IA y accesibilidad. Puede bloquear la activación de un flujo. Clasifica los defectos por severidad y deja evidencia reproducible.

## Especialistas y misión

| Agente | Subfunciones principales | Entregable |
|---|---|---|
| Estrategia y negocio | sectores, oferta, pricing, márgenes | hipótesis y paquete validable |
| Diagnóstico empresarial | procesos, tiempos, herramientas, tareas manuales | informe priorizado y mapa AS-IS/TO-BE |
| Automatización | APIs, CRM, email, Workspace, formularios, webhooks | diseño, prueba, runbook y límites |
| IA y conocimiento | prompts, RAG, OCR, evaluación y coste | asistente acotado y evaluación |
| Comercial | leads, cualificación, propuesta, seguimiento | siguiente mejor acción aprobable |
| Marketing | SEO, landing, contenido, campañas y conversión | activo con fuente y CTA única |
| Soporte/éxito | tickets, satisfacción, renovación y expansión | resolución, SLA e informe mensual |
| Seguridad/legal | consentimiento, permisos, retención y proveedores | riesgo y necesidad de revisión humana |
| Finanzas | consumo, capacidad, facturación y margen | control de plan y rentabilidad |
| Plataforma/datos | arquitectura, datos, integración y observabilidad | cambio técnico verificable |

## Contrato universal de ejecución

Cada `AgentRun` incluye: objetivo, tenant, alcance autorizado, entradas y fuentes, supuestos, plan, acción solicitada/ejecutada, resultado, hechos/hipótesis/recomendaciones, confianza, coste, artefactos, aprobador cuando existe, errores y eventos de auditoría. Las fuentes no autorizadas se rechazan.

## Niveles de autonomía

- A0: consultar, clasificar o borrador interno.
- A1: ejecutar un flujo reversible previamente aprobado.
- A2: proponer una acción externa; exige revisión humana.
- A3: precios, pagos, contratos, permisos, eliminación, comunicaciones sensibles o datos personales: aprobación humana explícita y evidencia.
