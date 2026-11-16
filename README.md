# French Lab 0.5 — A2, Unités 1 y 2

Esta es una **versión de pruebas** de French Lab, preparada sobre el código de la versión 0.4.1 que ya utilizas. Se conservan los 100 ejercicios de la Unité 1 y se añaden 64 ejercicios nuevos de la Unité 2 «Je me souviens».

## Novedades

- **Unité 2 preparada pero desactivada:** 16 ejercicios de *imparfait*, 16 de pronombres *y/en*, 16 de posición del adjetivo y 16 de recuerdos y meteorología. Incluyen explicaciones y correcciones. En cada materia, la mitad son de elección múltiple y la otra mitad se responden escribiendo.
- **A tu ritmo:** la Unité 2 aparece en el programa como «Pendiente». Cuando la empecéis en clase, pulsa **«Activar Unité 2 cuando empiece en clase»** y confirma. La Unité 1 pasará a «Estudiada» y seguirá disponible para repasar.
- **Mix de la unidad actual:** mezcla las materias de la unidad que tengas en curso, sin anunciar la regla de cada pregunta.
- **Mix de todo lo estudiado:** incluye las unidades estudiadas y la actual, y reparte las preguntas entre ellas. Excluye las pendientes.
- **Instrucciones claras:** las preguntas indican si debes escribir *solo el hueco*, la *frase negativa completa* o una *traducción completa*. Las de selección indican que debes elegir una opción.
- **Seguimiento:** se conservan las estadísticas, los errores de acentuación, los repasos y las explicaciones que puedes omitir o recuperar.

## Cómo probarla sin alterar tu teléfono

1. **Haz una copia de tus progresos del OPPO**: abre French Lab 0.4.1, entra al final de Inicio y pulsa «Exportar copia JSON». Guarda ese archivo donde puedas encontrarlo. **No borres datos ni desinstales la aplicación**.
2. En Windows, descomprime el ZIP en una carpeta nueva y abre `index.html` con Chrome. Conserva la carpeta de la versión 0.4.1.
3. Comprueba que aparece **French Lab 0.5** y que la Unité 2 indica «Pendiente». Si practicas sin activarla, las preguntas deben seguir siendo de la Unité 1.
4. Para **probar** la Unité 2 en Windows, pulsa su botón de activación y prueba un ejercicio de *imparfait* y ambos mixes. Esa activación solo afecta a los datos de ese navegador; **no activa automáticamente la unidad en el OPPO**.
5. Comprueba las instrucciones de varias preguntas escritas y una de elección múltiple. Cierra la pestaña y vuelve a abrir para revisar las estadísticas.

> Aviso sobre el almacenamiento: esta versión utiliza la misma clave de datos que 0.4/0.4.1 (`frenchLab_v04_unite1_progress`). Cuando se ejecute sobre la misma dirección HTTPS y el mismo navegador, está diseñada para continuar los datos anteriores. En carpetas locales `file://` distintas no hay garantía de compartirlos: si no aparecen, podrás importar una copia JSON. **Importar sustituye el progreso existente de ese navegador**, por lo que conviene exportarlo primero.

## Publicación (más adelante)

No se ha actualizado GitHub ni la instalación de tu OPPO. Cuando terminemos las pruebas en Windows, podremos subir al repositorio los archivos de esta carpeta —incluidos los nuevos **`unite2.js`** y **`updates.css`**— y comprobar que se actualiza la PWA. **No subas el ZIP como archivo único**: GitHub Pages necesita el contenido descomprimido en la raíz del repositorio.

## Límites

- El profesor conversacional con IA y la sincronización entre teléfono y ordenador **no** están incorporados.
- Las respuestas escritas se comprueban con un conjunto de respuestas admitidas. Se toleran mayúsculas, espacios y cambios de apóstrofo, pero se exigen los acentos. Algunas formulaciones alternativas válidas pueden necesitar añadirse manualmente tras revisarlas.
- Son 64 ejercicios originales nuevos, sometidos a comprobaciones técnicas y revisión de las respuestas previstas, pero **todavía necesitan pruebas manuales en el navegador y el OPPO**.
- El usuario decide cuándo activar la Unité 2; incorporarla al archivo no equivale a activarla para los repasos.

## Archivos de la aplicación

`index.html`, `app.js`, `french-lab-core.js`, `unite2.js`, `styles.css`, `updates.css`, `sw.js`, `manifest.webmanifest`, `icon.svg`.

El documento `PRUEBAS.md` resume las comprobaciones realizadas.
