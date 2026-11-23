# French Lab 0.6 — A2 · Unités 1 y 2

Versión de prueba preparada **sobre los archivos reales de French Lab 0.5**. No se ha actualizado GitHub ni el OPPO. Mantiene los 100 ejercicios originales de la Unité 1 y los 64 de la Unité 2; **añade 48 preguntas originales nuevas** a la Unité 2 (212 ejercicios en total).

## Novedades

- **Unité 2 «Je me souviens»: 112 ejercicios** repartidos en cinco materias: 25 de *imparfait*, 25 de pronombres *y/en*, 25 de posición de adjetivos, 25 de recuerdos y meteorología, y 12 de comunicación sobre recuerdos y gustos. Los 48 nuevos incluyen conjugaciones frecuentes y ortografía con acentos/cedilla, colocación de *y/en* ante infinitivo y pasado compuesto, *bel/vieil* ante vocal, vocabulario de infancia y tiempo atmosférico.
- **Materias activables individualmente:** al activar por primera vez la Unité 2, entra únicamente *l'imparfait*. Cuando se estudien las otras materias, basta con marcar «Incluir este tema en los ejercicios» en sus tarjetas. Los mixes y el repaso pendiente excluyen las materias sin activar. La Unité 1 permanece disponible para repasar.
- **Compatibilidad con versiones anteriores:** si ya tenías la Unité 2 activada en French Lab 0.5, las materias previamente existentes permanecen activas al actualizar; tú puedes desactivar las que todavía no hayas trabajado. De este modo no se alteran tus decisiones anteriores.
- **Misma clave de almacenamiento** (`frenchLab_v04_unite1_progress`), IDs originales conservados y formato de progreso extendido sin eliminar campos. Exportar/importar sigue disponible. Los resultados se guardan solo en el navegador del dispositivo, sin sincronización.
- **Seguimiento:** conserva los mixes, la corrección de acentos, las explicaciones opcionales, los errores pendientes y el historial de sesiones.

## Cómo probar con seguridad

1. **En el OPPO**, con la versión actual 0.5, exporta el progreso y guarda el archivo de copia de seguridad. No borres la aplicación ni sus datos.
2. **En Windows**, extrae este ZIP en una carpeta nueva. No lo mezcles con los archivos de la versión 0.5.
3. Abre `index.html` en Chrome. Deberías ver **French Lab 0.6**, Unité 1 activa y Unité 2 pendiente salvo que el navegador ya conserve progreso de una versión anterior en ese mismo origen.
4. En el ordenador puedes activar la Unité 2 para probar: aparece *imparfait* marcada y las otras cuatro materias desmarcadas. Comienza un **Mix de la unidad actual** y comprueba que solo aparecen ejercicios de *imparfait*. Después marca *y/en* y comprueba un nuevo mix.
5. En **Mix de todo lo estudiado** deben mezclarse las materias activadas de U1 y U2, sin introducir contenidos pendientes. Prueba un acento omitido y revisa «Mi evolución»; cierra y abre para comprobar que se conservan los datos.
6. **No publiques todavía**: primero hay que validar en Windows y asegurarse de conservar tu progreso en el OPPO. Una vez probado, los archivos de la aplicación deben subirse descomprimidos a GitHub Pages y revisarse la actualización de la PWA.

## Notas importantes

- Si la Unité 2 ya estaba activada en el progreso de 0.5, *imparfait*, *y/en*, adjetivos y recuerdos aparecerán habilitados; la nueva materia de comunicación queda pendiente. Esto es intencionado para no cambiar una selección previa; desmarca los temas que aún no conoces.
- Las respuestas escritas se comparan con las respuestas admitidas en cada pregunta; los acentos se exigen. French Lab no es todavía un profesor conversacional de IA capaz de valorar cualquier formulación libre equivalente.
- **No desinstales** la PWA ni borres sus datos de Chrome. Una exportación JSON permite restaurar el progreso si se pierde, pero importar reemplaza los datos actuales del navegador.
- No hay sincronización entre PC y móvil. El teléfono puede ser tu dispositivo principal.
- `PRUEBAS.md` registra las comprobaciones técnicas ejecutadas. Las pruebas automáticas no sustituyen las pruebas manuales con el navegador y el OPPO.

## Archivos

Para publicar: `index.html`, `app.js`, `unite2.js`, `french-lab-core.js`, `styles.css`, `updates.css`, `sw.js`, `manifest.webmanifest`, `icon.svg`.

Documentación opcional: `README.md`, `PRUEBAS.md`.
