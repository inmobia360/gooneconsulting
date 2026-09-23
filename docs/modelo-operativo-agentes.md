# Modelo operativo de agentes

## Estado y autoridad

Este documento describe el diseño propuesto del equipo. El MVP aún no ejecuta agentes sobre casos reales: el artefacto de prototypes/diagnostico/ es una visualización determinista y ficticia. No hay backend, persistencia, modelo conectado, investigación web ni operaciones con clientes.

La especificación normativa es specs/004-diagnostico-equipo-agentes/spec.md. Sus requisitos y decisiones pendientes prevalecen sobre ejemplos de esta página. Las decisiones de vertical, proveedor, precio, tratamiento de datos reales, despliegue y arquitectura productiva requieren validación y aprobación explícitas.

## Dos niveles de organización

### Gobierno y calidad

| Función | Responsabilidad | Autoridad y límite |
|---|---|---|
| CONSULTING / responsable de producto | Decide prioridades y objetivos aprobados del producto | No delega a agentes la aprobación de precios, contratos, permisos, pagos o comunicaciones sensibles |
| COORDINADOR | Mantiene objetivos, responsables, dependencias, bloqueos y estado de tareas | No elimina bloqueos ni declara completado sin evidencia |
| CALIDAD | Revisa evidencia, controles, consistencia, accesibilidad y criterios de aceptación | En el MVP es una función de revisión humana independiente, no un sexto agente automático |
| Revisor humano del diagnóstico | Contrasta el borrador y registra compartir, pedir cambios o cerrar | Su aprobación habilita únicamente la entrega del diagnóstico; no aprueba una propuesta ni una implementación |

### Equipo lógico del diagnóstico

Los cinco roles son etapas secuenciales que pueden ejecutarse en un único servicio. La tabla define el contrato mínimo; no significa que haya cinco procesos, modelos o servicios desplegados.

| Orden | Rol | Entrada autorizada | Entregable interno | No puede hacer | Se detiene cuando |
|---|---|---|---|---|---|
| 1 / 5 | GO Director | objetivo, caso/organización, alcance, permisos y límites | plan, asignación secuencial, estado y consolidación trazable | ampliar permisos, aprobar su propio informe o iniciar acciones externas | falta propósito, permiso, límite, revisor o aparece un bloqueo |
| 2 | Company Research | empresa o URL aportada y fuentes públicas explícitamente permitidas | afirmaciones públicas con URL, fecha, contexto y confianza | inferir procesos internos, rastrear sin autorización o recopilar datos personales innecesarios | no existe fuente permitida o la fuente no respalda una afirmación |
| 3 | Business Model Analyst | afirmaciones trazables y respuestas confirmadas de entrevista | resumen de clientes, propuesta de valor, canales, operación conocida y vacíos | convertir declaraciones en hechos observados o completar datos ausentes | hay contradicciones que cambian el alcance o falta información esencial |
| 4 | Pain Point Detector | proceso confirmado, fricciones declaradas y evidencia referenciada | problemas, persona afectada, evidencia, impacto cualitativo e hipótesis separadas | calcular ahorro/ROI sin datos ni presentar hipótesis como certeza | impacto o causa dependen de datos no confirmados |
| 5 | AI Opportunity Agent | problemas revisados, contexto, restricciones y dependencias | opciones priorizadas, alternativa sin IA, valor cualitativo, esfuerzo, riesgo y validación | prometer resultados, comprar/conectar herramientas o comprometer recursos | hay datos sensibles, riesgo alto o decisión comercial sin responsable humano |

GO Director inicia el run, asigna el alcance autorizado y consolida las salidas; los roles 2–5 responden solo a ese alcance; el Director pausa o prepara el borrador y no puede aprobarlo. Research puede omitirse si no se ha autorizado una fuente pública. La entrevista y la revisión humana no son tareas autónomas de estos cinco roles.

## Recorrido de punta a punta

1. **Consulta:** la landing prepara un borrador de correo local. Una persona revisa y envía el mensaje manualmente; el sitio no recibe ni almacena el contenido.
2. **Entrevista:** una persona confirma el proceso, los roles implicados, frecuencia, excepciones, herramientas, tiempos, impacto y restricciones. Si la respuesta falta, se pregunta o se registra como desconocida.
3. **G0 — alcance:** responsable y GO Director identifican propósito, caso/organización, datos autorizados, límites, responsable de revisión y criterio para detenerse. Sin ello no comienza el análisis real.
4. **Ejecución secuencial:** Director → investigación pública opcional → análisis del modelo → detección de fricciones → oportunidades.
5. **G1 — evidencia:** cada afirmación tiene clasificación epistémica. KNOWN lleva fuente y fecha; INFERRED explica razonamiento y confianza; ASSUMED se presenta como escenario; UNKNOWN queda como pregunta o vacío.
6. **G2 — revisión del diagnóstico:** una persona independiente contrasta hechos, hipótesis, vacíos y oportunidades. Registra compartir, pedir cambios o cerrar. Solo esta puerta habilita la entrega del diagnóstico.
7. **G3 — propuesta:** si se decide preparar una propuesta, alcance, exclusiones, precio, calendario, datos, riesgos y éxito esperado empiezan en estado pendiente de aprobación.
8. **G4 — aprobación de alcance:** una persona autorizada aprueba explícitamente condiciones y alcance. Sin aprobación se bloquean implementación, gasto, integraciones y comunicaciones de compromiso.
9. **MVP/piloto y feedback:** quedan fuera del prototipo y requieren especificación, permisos, controles operativos y aprobación propios. Después se registra evidencia para continuar, ajustar o cerrar.

Una revisión del informe no equivale a aprobación comercial. La recomendación del agente nunca constituye aprobación de vertical, precio, compra, contrato, acceso, piloto o despliegue.

## Evidencia y oportunidad

Cada afirmación debe clasificarse como KNOWN, INFERRED, ASSUMED o UNKNOWN. El contrato conceptual añade texto, fuente o referencia de evidencia, fecha observada, razonamiento y confianza cuando corresponda. Una fuente pública no se usa para afirmar cómo funciona la operación interna.

Cada oportunidad incluye problema, evidencia referenciada, persona afectada, opción sin IA, valor esperado cualitativo, esfuerzo, riesgos, dependencias y método de validación. ROI, ahorro, precio y plazo no se inventan. Si la mejor recomendación es no automatizar, el informe debe poder decirlo.

## Contrato conceptual de ejecución

Cada AgentRun debe poder vincularse a case_id, organization_id, etapa y versión de contrato, con objetivo, alcance permitido, entradas/fuentes, rol responsable, estado, salida, revisiones y eventos de pausa/error. Las afirmaciones y oportunidades siguen las estructuras de spec 004.

Es un contrato de diseño, no un esquema de base de datos ni una API aprobados. Los datos de contacto y otros datos personales se excluyen hasta que se aprueben finalidad, minimización, acceso, aviso/base aplicable, retención, exportación y borrado. Identidad, almacenamiento, cifrado, versionado, idempotencia, reintentos y límites de coste/tiempo se decidirán en el Technical Blueprint.

## Pausa, auditoría y recuperación

- Pausar ante duda de permiso, evidencia insuficiente, contradicción material, salida inconsistente, dato sensible, límite o error.
- Registrar motivo, paso, artefacto pendiente y decisión/responsable de reanudación con datos minimizados.
- No reintentar ni reanudar de forma que duplique una acción externa; en el MVP no hay acciones externas.
- Permitir cerrar el caso sin recomendar tecnología.
- Para un futuro backend, definir auditoría, idempotencia, límites, reintentos, pausa, reanudación y recuperación antes de persistir casos reales.

## Autonomía

- **A0 — analizar:** clasificar, preguntar y preparar borradores internos dentro del alcance.
- **A1 — flujo reversible autorizado:** no está habilitado por el prototipo actual; requiere un flujo aprobado y controles.
- **A2 — proponer acción externa:** exige revisión humana explícita antes de actuar.
- **A3 — acción sensible:** precios, pagos, contratos, permisos, eliminación, comunicaciones sensibles y datos personales requieren aprobación humana registrada.

El prototipo local solo demuestra A0 con datos ficticios. No ejecuta acciones A1–A3.

## Elementos futuros

Estrategia sectorial, ROI, arquitectura de solución, investigación de software, generación de demos, propuesta comercial, implementación, QA automatizada, seguridad especializada, soporte y marketing son capacidades futuras. Cada una necesita especificación y decisión de alcance antes de construirse; no forman parte del equipo automatizado MVP de cinco roles.

## Equipo de orientación sectorial de la landing

El [equipo de Resumen Sectorial](../agents/sector-summary/README.md) es distinto del flujo de Diagnose: ofrece patrones generales y opciones posibles según el sector elegido, sin diagnosticar una empresa. Sus seis perfiles no están activos ni conectados a un runtime; las fuentes y la política de publicación siguen pendientes de aprobación.
