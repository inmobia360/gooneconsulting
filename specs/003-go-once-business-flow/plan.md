# Plan — 003 Flujo Go Once Business

## Decisiones

- Implementar el flujo en la landing existente para conservar el contexto de Go Once Diagnose.
- Separar el proceso operativo (Diagnose) del descubrimiento y validación comercial (Business).
- Añadir desplegable nativo con ocho sectores y una ruta independiente para «Mi sector no aparece».
- Tras elegir sector, revelar un formulario breve con correo y reto; al prepararlo, crear un borrador `mailto:contact@goonceconsulting.com` que el visitante revisa y envía manualmente.
- No almacenar datos en la web ni enviar desde el servidor; informar de esta limitación antes del envío.
- Mantener ejemplos de problemas como posibilidades de diagnóstico, no como características de productos verticales disponibles.
- Ordenar servicios técnicos a domicilio, inmobiliario y despachos profesionales como los tres primeros candidatos aportados; mostrar el resto como sectores adicionales con potencial.
- No añadir analítica de terceros ni métricas de conversión hasta que haya una fuente de tráfico y una línea base aprobadas.

## Secuencia

1. Actualizar esta especificación con los ocho sectores y el paso de consulta.
2. Crear el selector, la ruta para otros sectores y los ejemplos de proceso.
3. Revelar el formulario tras seleccionar un sector y preparar el borrador de correo al validarlo.
4. Revisar semántica, teclado, foco y presentación en navegador local.
5. Registrar evidencia y pendientes.

## Dependencias y pendientes

- La prioridad del primer vertical entre servicios técnicos, inmobiliario y despachos profesionales requiere conversaciones con profesionales y una decisión comercial.
- No hay precio, características ni plazo aprobados para Go Once Business.
- La recolección estructurada de feedback requiere un canal y un aviso de privacidad aprobados; no forma parte de esta iteración.
