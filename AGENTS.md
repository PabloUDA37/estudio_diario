# AGENTS.md

## Proyecto

- El único proyecto activo es **Diario de Estudio** en `trabajoAutoctono/MyStudyDiary/`: una web para registrar sesiones de estudio y llevar la racha.
- Tecnologías: HTML, CSS y JavaScript puro. Sin frameworks, sin build, sin dependencias, sin `package.json`.

## Comandos

- No existen comandos de install/build/test/lint. No inventar ninguno.
- Para ejecutar la app: abrir `trabajoAutoctono/MyStudyDiary/index.html` directamente en el navegador (doble clic. No hace falta servidor ni build).

## Notas

- La app es una carpeta con tres archivos: `index.html`, `styles.css`, `app.js`.
- Las sesiones se guardan en `localStorage` con la clave `diario-estudio.sesiones`.
- Las fechas se manejan como strings locales con formato `YYYY-MM-DD`. Usar siempre la fecha local del usuario, nunca UTC.
- El texto de la interfaz está en español.

# Memoria - Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones 
tomadas. - Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su 
porqué) y errores a evitar. - Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte. - Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de 
dejarlo en la memoria. - No guardes nunca datos sensibles (claves, tokens, datos personales). 

## Verificación

- No hay tests automatizados. Para comprobar cambios, abrir la página en el navegador y probar los flujos manualmente (añadir sesión, recargar, racha).

## Límites
 Siempre: respetar las reglas de fechas y racha, mantener los textos en español. - 
 Pregunta antes: crear archivos nuevos, cambiar el formato de los datos guardados. - 
 Nunca: añadir dependencias, frameworks o un paso de build. 
 Siempre: actualizar `MEMORY.md` al terminar cada tarea. 

## Comandos 
- Tests: `node --test` 
 
## Reglas 
- Lee `docs/constitution.md` y la spec activa (`specs/NNN-*/`) antes de tocar código.