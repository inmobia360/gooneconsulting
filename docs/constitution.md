# Constitución de Go Once Business OS

## I. Validación antes de plataforma

El producto debe resolver un dolor observado y cobrable. Cada módulo se vincula a una métrica: tiempo ahorrado, error evitado, conversión, velocidad de respuesta, ingresos recurrentes o retención. Si no existe hipótesis y señal de validación, permanece fuera del MVP.

## II. SDD como contrato de cambio

La especificación es la fuente de verdad antes del código. Los requisitos se identifican, se prueban y se trazan. Un cambio de alcance empieza por la spec, no por el prompt ni por el código.

## III. Seguridad y privacidad por diseño

El tenant es el límite de seguridad. Autenticación, autorización, auditoría, retención y consentimiento se diseñan antes de integrar datos personales. El sistema no pretende sustituir asesoramiento jurídico; los casos RGPD sensibles se escalan.

## IV. IA gobernada, no autónoma

Los agentes pueden analizar, proponer y ejecutar acciones previamente autorizadas. Sus salidas incluyen fuente, modelo, coste, confianza y clasificación de contenido. Acciones comerciales, financieras, contractuales o de permisos requieren aprobación humana explícita.

## V. Operación observable y reversible

Automatizaciones y agentes usan idempotencia, colas cuando proceda, límites de reintento, alertas y un interruptor de pausa. Toda decisión importante deja una huella de auditoría; toda acción debe poder explicarse y recuperarse.

## VI. Experiencia de pequeño negocio

El cliente ve lenguaje claro y próximos pasos, no complejidad interna. Cada pantalla explica qué ocurre, qué falta y qué acción puede tomar. La interfaz será mobile-first, accesible y consistente.
