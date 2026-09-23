# Aceptación — Resumen de soluciones por sector

| Requisito | Criterio | Evidencia | Estado |
|---|---|---|---|
| RF-001 | Entrada sectorial mínima, sin PII; aclarar ambigüedad | Perfil 00, ejemplo límite | Aceptado documentalmente |
| RF-002 | Seis agentes en orden con handoffs claros | README y perfiles 00–05 | Aceptado documentalmente |
| RF-003 | Afirmaciones tipadas con fuente/confianza | Contrato v0.1 y perfiles 01–05 | Aceptado documentalmente |
| RF-004 | Revisión independiente puede bloquear | Perfil 05 | Aceptado documentalmente |
| RF-005 | Oportunidad incluye alternativa, esfuerzo, riesgos, dependencias y validación; no ROI | Contrato v0.1 y perfil 04 | Aceptado documentalmente |
| RF-006 | Mostrar resumen sectorial en la web sin exigir correo; indicar que no es diagnóstico | prototypes/landing/index.html y script.js | UI local con contenido fijo; integración del equipo pendiente |
| RF-007 | No navegar hasta aprobar fuentes y runtime | Plan, README y perfil 01 | Aceptado documentalmente |
| RF-008 | Registro mínimo, pausa y reanudación segura | Spec, contrato y perfil 00 | Diseñado; runtime pendiente |
| RF-009 | No adivinar sector ambiguo | Perfil 00 y ejemplo límite | Aceptado documentalmente |
| RF-010 | Reconocer cobertura insuficiente y abstenerse | Perfil 05 y ejemplo límite | Aceptado documentalmente |
| RF-011 | Mostrar soluciones posibles con alternativa sin IA y límites claros | Perfiles 04–05 y vista de landing | UI local muestra opciones orientativas; revisión y generación por agentes pendiente |

La aceptación anterior verifica estructura documental. No prueba comportamiento, cumplimiento legal, calidad de proveedor ni compatibilidad de runtime. Por decisión del propietario del 2026-09-23, el equipo permanece documental y no se activa proveedor ni generación web. T6, T7 y T8 siguen pendientes.

## Paquete local de subagentes Codex

T11: seis archivos TOML presentes y con campos mínimos verificados estáticamente; las seis definiciones declaran `sandbox_mode = "read-only"` y `web_search = "disabled"`. Los seis TOML y las seis entradas de `.codex/config.toml` pasan el parseo estático. Pruebas locales delegadas al perfil `sector_evidence_reviewer` cubrieron BLOCK (fixture sin evidencia y con ROI garantizado), REVISE (fixture con validación pendiente) y PASS (fixture sintético autocontenido). Los tres dictámenes dieron hallazgos/estados esperados; sus envelopes pasaron comprobaciones estructurales bajo schemas temporales por estado. No se ejecutó un motor contra el JSON Schema completo del repositorio. Aún falta confirmar en una sesión Codex nueva el descubrimiento conjunto de los seis perfiles; T11 permanece pendiente.
