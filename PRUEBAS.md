# French Lab 0.6 — comprobaciones técnicas

**Origen:** ZIP real `French_Lab_0.5_pruebas.zip`, recuperado del archivo de French Lab 0.5 y comparado con la nueva versión.

**Pruebas efectuadas:**

1. Los 100 ejercicios originales de Unité 1 y los 64 anteriores de Unité 2 se mantienen con IDs y contenido originales.
2. Total: 212 ejercicios (100 U1 + 112 U2), IDs únicos, todas las preguntas con respuesta y explicación.
3. Las preguntas de elección múltiple contienen su respuesta correcta y no presentan opciones repetidas.
4. Unité 2 pendiente: el mix general utiliza exclusivamente Unité 1.
5. Al activar por primera vez la Unité 2 se habilita solo *l'imparfait*; las otras cuatro materias siguen deshabilitadas hasta marcarlas.
6. Los mixes solo incluyen materias activadas; el mix general equilibra el reparto entre U1 y U2.
7. Activar un nuevo tema mediante su casilla no reinicia el estado ni las sesiones.
8. La configuración por materias se conserva después de guardar y reabrir.
9. Una importación/migración desde un progreso 0.5 con U2 ya activada mantiene las 4 materias antiguas habilitadas y deja la nueva de comunicación pendiente.
10. Se preservan los contadores, intentos e historial de sesiones de progreso 0.5.
11. La corrección distingue acentos/cedilla omitidos: `etait`/`était`, `commencaient`/`commençaient`.
12. `index.html` referencia todos los archivos JavaScript y CSS locales; sintaxis de los scripts validada.

**Herramientas:** Node.js (`node --check` y pruebas con VM aislada). Las 11 comprobaciones agrupadas del script de pruebas pasaron.

**Limitación de verificación visual:** Se intentó abrir la aplicación mediante Chromium/Playwright desde `file://` y `http://127.0.0.1`, pero ambos accesos fueron bloqueados por la política del entorno (`net::ERR_BLOCKED_BY_ADMINISTRATOR`). Por ello no se afirma haber probado visualmente la interfaz ni la instalación PWA desde este entorno.

**Actualizaciones externas:** Ninguna. No se ha modificado GitHub ni la instalación Android. El progreso del usuario no se ha leído ni modificado: las pruebas de migración utilizan datos sintéticos.
