# Tareas — Resumen de soluciones por sector

- [x] T1. Acordar alcance transversal por sector, excluyendo diagnóstico individual.
  - Hecho cuando: la especificación define entradas, límites y propósito genérico.
- [x] T2. Especificar requisitos, riesgos y contrato de salida.
  - Hecho cuando: RF, riesgos y JSON Schema v0.1 describen la respuesta y trazabilidad.
- [x] T3. Redactar perfiles de los seis agentes.
  - Hecho cuando: cada perfil declara objetivo, entradas, salida, límites, permisos y handoff.
- [x] T4. Documentar orquestación, revisión independiente y pausa.
  - Hecho cuando: README y perfiles impiden continuar sin evidencia o aprobación requerida.
- [x] T5. Revisar estáticamente perfiles y casos nominal/límite.
  - Hecho cuando: queda evidencia de revisión documental y se declara expresamente que no hubo ejecución con runtime.
- [ ] T6. Aprobar runtime/modelo, paquete de fuentes, privacidad/retención, host y límites de coste. **Diferido por decisión del propietario (2026-09-23): mantener el equipo documental.**
  - Hecho cuando: para una futura activación, proveedor/modelo, fuentes por sector, manejo de PII, retención, rate limit, host y coste máximo tienen una decisión aprobada.

- [ ] T7. Conectar la salida revisada del equipo a la landing.
  - Hecho cuando: la página recibe una salida conforme al contrato tras una revisión aprobada; no depende del catálogo fijo del prototipo, no exige correo y comunica con claridad estados limitado/bloqueado.
- [ ] T8. Validar la experiencia de extremo a extremo con sectores cubiertos y un caso sin evidencia.
  - Hecho cuando: se demuestra selección, generación, revisión independiente y renderizado; el caso sin evidencia no inventa una respuesta y todos los RF tienen evidencia enlazada.

- [x] T9. Elaborar Technical Blueprint del MVP público sectorial siguiendo la estructura A–O del Prompt Maestro.
  - Hecho cuando: define arquitectura, agentes, grafo, contratos, memoria, routing, permisos, seguridad, observabilidad, UX, API, validación, infraestructura y coste, ajustados al alcance transversal sin datos de empresa.
- [x] T10. Definir contratos estructurados de handoff entre las etapas del equipo.
  - Hecho cuando: cada fase dispone de payload discriminado, referencias a evidencia, estado, confianza y handoff siguiente en JSON Schema.
- [x] T11. Empaquetar y verificar los seis roles como agentes de proyecto Codex.
  - Hecho cuando: existen seis definiciones TOML reconocibles bajo `.codex/agents/`, cada una enlaza un perfil portable, define una misión estrecha, declara sandbox read-only y desactiva web_search; una sesión nueva de Codex los descubre y el revisor devuelve PASS/REVISE/BLOCK en fixtures sintéticos.
