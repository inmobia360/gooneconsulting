# Plan — 004 Diagnóstico y equipo inicial

## Decisiones de producto

- Entregar primero un diagnóstico revisado que pueda justificar o descartar tecnología/IA.
- MVP operacional limitado a cinco roles lógicos y una entrevista guiada; no construir los 16 agentes del prompt.
- Las salidas de los agentes son borradores internos hasta revisión humana.
- Mantener verticales como hipótesis; validar antes de elegir el piloto.
- Diseñar los contratos antes de elegir persistencia o proveedor de modelos.

## Etapas

1. **Cerrar alcance**: revisar esta especificación con propietario; decidir definición de oferta Diagnose, formato del entregable y quién revisa.
2. **Technical Blueprint**: arquitectura mínima, flujo de ejecución, interfaces de agentes, esquema/versionado, permisos, tratamiento de datos, costes, observabilidad y estrategia de pruebas. Comparar alternativas sencillas antes de adoptar infraestructura.
3. **Prototipo sintético**: construir orquestación determinista con entradas ficticias y salidas reproducibles; sin datos de clientes ni llamadas externas.
4. **Evaluación**: rúbrica de evidencia, utilidad, precisión, sesgo, seguridad, coste y legibilidad; probar casos incompletos, contradictorios, otro sector, “no usar IA”, fallos y aislamiento.
5. **Validación comercial**: entrevistas con hasta diez empresas como objetivo de investigación, sujeto a acceso y consentimiento; recoger patrones anonimizados y decisiones de pago sin presentar hipótesis como hechos.
6. **Propuesta de piloto**: redactar propuesta para el problema/vertical con más evidencia; aprobación humana de alcance, precio, privacidad y criterios de éxito.
7. **MVP piloto**: solo tras aprobación; aislar organización, controlar accesos, secretos, persistencia, auditoría, pausa/recuperación y revisar legal/privacidad antes de datos reales.
8. **Feedback y decisión**: medir éxito, defectos, coste/latencia y resultado comercial; iterar o cerrar antes de ampliar agentes.

## Decisiones técnicas pendientes del Blueprint

- Aplicación monolítica modular y runtime de agente, proveedores de modelo y enrutamiento.
- Fuente permitida para investigación pública y términos/licencias aplicables.
- Persistencia/identidad, separación multiempresa, cifrado, retención y borrado.
- Contratos JSON validados, versionado y registro de eventos.
- Límites de coste/tiempo, reintentos, pausas, aprobación y reanudación.
- Pruebas de evaluación de salidas y seguridad; accesibilidad de la interfaz.
- Despliegue y operación: fuera de alcance hasta especificar y aprobar.
