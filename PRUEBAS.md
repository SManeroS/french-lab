# Pruebas técnicas — French Lab 0.5

## Verificado automáticamente

- Sintaxis válida de los JavaScript y estructura correcta del manifiesto PWA.
- Conservación de los 100 ejercicios de la Unité 1 y 64 nuevos de la Unité 2, con IDs únicos, opciones correctas presentes y categorías consistentes.
- La mitad de las preguntas de la Unité 2 (32) son de elección múltiple y la mitad (32) son de respuesta escrita.
- Detección de acentos (por ejemplo `etes arrivées` → `êtes arrivées`) y aceptación de alternativas expresamente registradas.
- Unité 2 inicialmente pendiente, exclusión de los dos mixes; activación manual, con transición de Unité 1 a estudiada.
- Una vez activada la Unité 2, mix de 10 preguntas con reparto equilibrado entre unidades y mix de la unidad actual solo con Unité 2.
- Distinción de instrucciones para completar hueco, negar frases, traducir y elegir opción.
- Mantenimiento de la clave de progreso de 0.4/0.4.1 y lectura de datos anteriores sin reiniciarlos.

## Pendiente de verificación con el usuario

- Apertura visual y flujo completo en Chrome/Windows.
- Correcciones pedagógicas de las 64 preguntas nuevas con respuestas reales.
- Actualización desde HTTPS y funcionamiento instalado en OPPO, después de las pruebas locales.

El entorno automático no pudo iniciar Chromium por una restricción del sistema. Por tanto, **no se afirma haber realizado una prueba interactiva real en navegador**. Sí se ejecutaron pruebas de lógica y generación de pantallas con Node.
