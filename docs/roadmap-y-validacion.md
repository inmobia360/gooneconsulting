# Hoja de ruta y validación

Este roadmap es una secuencia de trabajo, no una promesa de fechas, ventas ni disponibilidad. Se avanza de etapa solo con evidencia y aprobación humana. El alcance detallado del diagnóstico y sus agentes está en [spec 004](../specs/004-diagnostico-equipo-agentes/spec.md).

## Estado actual

- Existe un prototipo estático local de landing y consulta por sector (`prototypes/landing/`).
- La consulta abre un borrador de correo manual; no hay backend ni persistencia.
- Las especificaciones 001–004 describen fundación, landing, recorrido Go Once Business y equipo inicial de diagnóstico.
- La selección del vertical, el precio, la oferta final y la arquitectura técnica están pendientes.
- No hay autenticación, almacenamiento servidor, secretos gestionados, conectores reales, cobros ni operaciones con clientes activas.

## Fases de trabajo

### 0. Consolidar alcance y decisiones

Revisar la landing y las especificaciones; aprobar entregables de Diagnose, preparación del cliente y responsabilidad de revisión. Comparar los sectores candidatos con entrevistas, acceso, recurrencia e impacto. Resolver privacidad y consentimiento antes de recoger datos reales.

**Salida:** oferta y problema de validación claros, vertical piloto elegido o decisión documentada de seguir transversal.

### 1. Technical Blueprint

Definir la arquitectura mínima, flujo de ejecución de cinco roles lógicos, contratos de datos versionados, permisos, aislamiento, privacidad, coste, observabilidad, evaluación y recuperación. Registrar alternativas y razones; no introducir infraestructura por anticipado.

**Salida:** Blueprint revisado y aprobable, con riesgos y criterios de salida.

### 2. Prototipo sintético

Demostrar entrevista y diagnóstico con datos ficticios, resultados trazables y revisión humana. Probar información incompleta o contradictoria, recomendación sin IA, errores, límites de coste, pausa y aislamiento.

**Salida:** evidencia de que el flujo es útil, legible, seguro y recuperable en el alcance definido.

### 3. Validación de problema y oferta

Realizar entrevistas con profesionales si hay acceso y consentimiento. Comparar frecuencia, impacto, soluciones actuales y voluntad de participar; separar declaraciones, observaciones e hipótesis y anonimizar los patrones compartidos.

**Salida:** diagnóstico revisado de la oportunidad, o decisión de cambiar segmento/problema.

### 4. Propuesta y aprobación de piloto

Preparar alcance, entregables, exclusiones, precio, plazo, datos, riesgos y métricas. La propuesta queda `pending_approval`; solo una decisión humana explícita habilita el piloto.

**Salida:** aprobación auditable o cierre sin construir.

### 5. MVP/piloto, feedback y decisión

Construir únicamente el alcance aprobado, con datos y permisos autorizados; registrar incidencias, valor, coste y feedback. Decidir iterar, ampliar, convertir en Go Once Business o cerrar.

**Salida:** decisión respaldada por evidencia; no escalar por inercia.

## Métricas que se definirán por piloto

Antes de iniciar un piloto, fijar línea base, método y responsable para utilidad del diagnóstico, reconocimiento de problemas, calidad de evidencia, resultado operativo, aceptación del cliente, coste/latencia y defectos. No publicar objetivos numéricos ni ROI si no están acordados y respaldados.

## Riesgos transversales

| Riesgo | Control |
|---|---|
| construir antes de validar | puertas entre fases y alcance aprobado antes del MVP |
| inferir operaciones desde una web pública | entrevista y etiqueta de evidencia/confianza |
| mezclar información de empresas | casos y permisos aislados; patrones anonimizados |
| exposición o uso excesivo de datos | minimización, propósito, acceso, retención y borrado definidos antes de backend |
| salida IA poco fiable | fuentes, evaluación, revisión humana y opción de parar |
| complejidad o coste prematuro | prototipo sintético primero; arquitectura decidida en Blueprint |
