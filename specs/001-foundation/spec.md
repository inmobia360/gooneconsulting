# 001 — Fundación de Go Once Business OS

## Contexto

Este incremento establece el contrato de producto, operación y arquitectura antes de implementar software. Destinatarios: dirección de Go Once, equipo de entrega y futuros clientes piloto.

## Fuera de alcance

No incluye cobros reales, acceso a datos de clientes, envío de mensajes, despliegue de integraciones, ni construcción de SaaS o marca blanca.

## Requisitos funcionales (EARS)

- RF-001: Cuando se defina una nueva capacidad, el sistema de trabajo deberá crear una especificación, criterios de aceptación, plan y tareas antes de implementar.
- RF-002: Cuando un agente procese información, deberá registrar objetivo, fuentes autorizadas, resultado, confianza, coste y trazabilidad.
- RF-003: Cuando una acción afecte a pagos, contratos, precios, permisos, eliminación o comunicación sensible, deberá requerir aprobación humana explícita.
- RF-004: Mientras una organización no haya autorizado un dato o conector, los agentes no deberán acceder a él.
- RF-005: Cuando se diseñe una consulta de negocio, deberá limitarse a la organización correspondiente y estar cubierta por una prueba de aislamiento.
- RF-006: Cuando una automatización falle, deberá registrar el evento, notificar según criticidad y permitir pausarla sin pérdida silenciosa de trazabilidad.
- RF-007: Cuando se entregue un informe de IA, deberá separar hechos confirmados, hipótesis y recomendaciones.
- RF-008: El portal deberá mostrar al cliente objetivos, siguiente acción, estado de proyecto, automatizaciones, tareas, documentos, soporte, consumo e impacto con lenguaje no técnico.

## Criterios de finalización

La fundación está terminada cuando estos requisitos tienen una decisión documentada, un responsable, un método de verificación y una evidencia enlazable en `acceptance.md`.

## Dudas abiertas

1. Vertical inicial y lista concreta de pilotos.
2. Jurisdicción, DPA, retención y asesoramiento legal aplicable.
3. Proveedor de facturación/pagos y herramientas existentes a conservar.
4. Identidad visual final, dominio y CTA/agenda de la landing.
