# 003 — Flujo hacia Go Once Business

## Objetivo

Convertir el diagnóstico transversal de Go Once Diagnose en una ruta clara para descubrir, validar y proponer futuras soluciones Go Once Business por actividad profesional, sin presentar como disponible un vertical aún no validado.

## Estado del producto

- Go Once Diagnose es el punto de partida: revisar un proceso real, mapearlo y priorizar mejoras.
- Go Once Business es una familia de futuras soluciones verticales. Los tres candidatos iniciales son servicios técnicos a domicilio, profesionales inmobiliarios y despachos profesionales; clínicas y bienestar, reformas y construcción, agencias digitales, comercio multicanal y formación quedan como otros sectores con potencial. Son ámbitos para validar, no productos contratables.
- El primer paso de conversión es una consulta de diagnóstico breve. La página permite elegir el sector, describir el reto y preparar un borrador de correo; el visitante lo revisa y lo envía manualmente. La web no almacena ni remite los datos, y no promete respuesta automática.
- No se fija precio, fecha de lanzamiento, disponibilidad ni funcionalidades específicas para un vertical hasta que se valide y apruebe su alcance.

## Recorrido de negocio

1. **Consulta y entrevista:** Go Once Diagnose recoge el reto y completa los datos necesarios mediante entrevista; un sitio público por sí solo no confirma operaciones internas.
2. **Diagnose:** entender un proceso de una empresa concreta y entregar mapa, prioridades y recomendación; consultar `../004-diagnostico-equipo-agentes/spec.md` para el equipo y límites del diagnóstico.
3. **Detectar patrón:** revisar si la necesidad aparece en más profesionales del mismo segmento; tratar cada caso por separado y no compartir datos de negocio entre participantes.
4. **Validar necesidad:** conversar con profesionales del sector sobre frecuencia, impacto, soluciones actuales y voluntad de participar.
5. **Proponer:** redactar una oportunidad vertical, alcance, hipótesis, coste, riesgos y criterios de éxito, separados de los hechos observados.
6. **Aprobar:** obtener aprobación humana del alcance, precio, tratamiento de datos y participantes del piloto.
7. **MVP y feedback:** construir un piloto limitado tras la aprobación, recoger feedback y decidir continuar, ajustar o descartar.
8. **Go Once Business:** ofrecer un producto vertical solo después de evidencia y aprobación comercial.

## Dependencia de gobernanza

La especificación del equipo inicial de diagnóstico es `../004-diagnostico-equipo-agentes/spec.md`. La automatización de consulta→diagnóstico no se considera aprobada hasta completar el Blueprint, privacidad y contratos de datos; el estado actual de la landing sigue siendo borrador mailto local.

## Requisitos funcionales (EARS)

- RF-001: Cuando una persona termine de entender Go Once Diagnose, deberá encontrar un enlace claro hacia la exploración de Go Once Business.
- RF-002: Cuando explore el flujo Business, deberá ver las etapas entre diagnóstico, validación, propuesta, aprobación, piloto y decisión.
- RF-003: Cuando seleccione uno de los ocho sectores, la página deberá mostrar ejemplos de procesos que podrían analizarse, sin presentarlos como funcionalidades o productos disponibles.
- RF-004: Cuando seleccione un sector, podrá continuar a una consulta breve con correo de contacto y descripción del reto; ambos campos serán necesarios para preparar el mensaje.
- RF-005: Cuando pulse «Mi sector no aparece», podrá escribir un sector propio; al continuar, ese texto orientará el borrador sin almacenarse en la web.
- RF-009: Cuando la persona prepare la consulta, la web deberá abrir un borrador dirigido a `contact@goonceconsulting.com`; el usuario revisará y enviará el mensaje desde su aplicación de correo.
- RF-010: Cuando la persona active cualquier CTA principal, deberá llegar al mismo selector de sector, con un texto de acción coherente con iniciar una consulta.
- RF-006: La página deberá decir que los verticales están en exploración y que indicar interés no garantiza disponibilidad, lanzamiento ni contratación.
- RF-007: El recorrido deberá conservar revisión humana en diagnóstico, precio, alcance, tratamiento de datos y aprobación del MVP.
- RF-008: Los selectores y enlaces deberán funcionar con teclado y lector de pantalla, mantener foco visible y respetar movimiento reducido.

## Fuera de alcance

- Checkout, precio comercial de vertical, reservas, creación de cuentas, suscripciones de marketing o formularios conectados a un backend.
- Compartir, comparar o agregar información identificable de diagnósticos entre empresas.
- Confirmar fecha, compromiso de lanzamiento, características o integraciones de un Go Once Business.
- Automatizar propuestas, contratos, pagos o comunicaciones salientes.

## Criterios de aceptación

- La landing enlaza explícitamente desde Diagnose hacia Go Once Business.
- Se entienden las etapas y las aprobaciones requeridas antes de construir un vertical.
- El desplegable incluye servicios técnicos, inmobiliario, despachos, clínicas y bienestar, reformas y construcción, agencias digitales, comercio multicanal y formación; también permite indicar Otro.
- El formulario recoge solo correo y descripción breve del reto, no transmite datos al sitio y prepara un borrador mailto dirigido al correo de Go Once.
- Las llamadas a la acción principales llevan al mismo flujo de consulta.
- No existen promesas de lanzamiento, precio, funcionalidades o éxito sin validar.
