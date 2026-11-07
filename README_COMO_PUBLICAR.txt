LEVÁNTATE 4.0 — PUBLICACIÓN EN GITHUB PAGES
============================================

Qué contiene:
- index.html: interfaz (contador, diario, historial, frases).
- sw.js: modo sin conexión y aviso de actualización.
- manifest.webmanifest e iconos: instalación en Android.
- .nojekyll: GitHub Pages sirve los archivos tal cual.

PRIMERA PUBLICACIÓN (solo una vez)
1. En https://github.com/new, crea un repositorio PUBLICO llamado "levantate".
2. En el repositorio elige "Add file" > "Upload files".
3. DESCOMPRIME este ZIP primero y sube a la RAÍZ los archivos
   index.html, sw.js, manifest.webmanifest, .nojekyll y los PNG.
   NO subas el ZIP solo ni la carpeta exterior.
4. Pulsa "Commit changes".
5. En "Settings" > "Pages" > "Build and deployment",
   elige "Deploy from a branch", rama "main", carpeta "/ (root)", "Save".
6. En la pestaña Pages encontrarás "Visit site" cuando esté publicado.
   El enlace normalmente tendrá forma https://TU-USUARIO.github.io/levantate/
   pero comprueba el enlace real mostrado por GitHub.
7. Abre esa URL con Chrome en Android y ve a ⋮ > "Instalar aplicación"
   (o "Añadir a pantalla de inicio"). Usa el icono nuevo.

ACTUALIZACIONES FUTURAS
1. Actualiza los archivos de la web publicada (yo puedo preparar el ZIP nuevo).
2. Asegúrate de reemplazar sw.js cambiando su CACHE_NAME en cada nueva versión.
3. Al abrir Levántate con conexión, la app detectará una versión nueva.
   Desde Ajustes, pulsa "Buscar actualizaciones" y luego "Actualizar ahora".
4. En cuanto se active, la aplicación se recargará usando el código actualizado.
   No hace falta reinstalar ningún APK.

CÓMO CONSERVAR EL DIARIO
- La versión instalada en GitHub Pages tendrá un ORIGEN distinto del HTML local
  o la versión APK; los datos NO se transfieren automáticamente.
- En la versión vieja: Ajustes > Respaldar, guarda el .json.
- En Levántate publicada: Ajustes > Restaurar, elige el mismo archivo.
- El contador activo y las notas viajan dentro de ese respaldo.
- No subas a GitHub archivos JSON de respaldo ni anotaciones personales.
- Aunque el programa sea público, las notas quedan guardadas localmente
  en el almacenamiento del navegador donde se use.
- Antes de borrar datos del navegador, cambiar de teléfono o desinstalar,
  exporta un respaldo: si el almacenamiento local se borra, se perderán los datos.

PRIVACIDAD Y USO
- Este repositorio aloja código PUBLICO, pero no incluye diarios personales.
- Levántate no utiliza publicidad, analíticas, cuentas ni servidores de datos.
- Internet solo se requiere para instalar y recibir actualizaciones.
- El modo sin conexión funciona tras la primera visita cuando se complete
  la instalación del service worker.
- No usa el reloj para medir cetosis ni como indicación médica.
- Si un ayuno provoca malestar, termina y cuida tu salud.

Si en Chrome no aparece "Instalar aplicación", asegúrate de abrir la
URL https:// publicada (no index.html como archivo), y de tener el navegador
actualizado. Verifica que esté disponible la página y el manifest.
