# Tasks — Spec 001: Mapa de calor (Heat Map)

## Tarea 1 — Contenedor del mapa en HTML

- [ ] Añadir el contenedor semántico del mapa de calor en `index.html`.
- RF cubierto: RF-1.
- Tiempo estimado: 15 min.
- **Hecho cuando:** el contenedor del mapa existe en el HTML y el render puede poblarlo.

## Tarea 2 — Logica pura: `agruparMinutosPorDia(sesiones, hoy)`

- [ ] Implementar la funcion pura que agrega minutos por dia, ignorando fechas futuras.
- RF cubierto: RF-1, RF-2, RF-3.
- Tiempo estimado: 20 min.
- **Hecho cuando:** los tests con `node --test` pasan para acumulacion y exclusion de futuras.

## Tarea 3 — Logica pura: `semanasDelPeriodo(hoy, semanas)`

- [ ] Implementar la funcion pura que devuelve las N semanas a mostrar.
- RF cubierto: RF-1.
- Tiempo estimado: 20 min.
- **Hecho cuando:** devuelve las semanas correctas para `hoy` de prueba.

## Tarea 4 — Logica pura: `nivelPara(minutos, picoSemana)`

- [ ] Implementar la funcion pura que devuelve el nivel de intensidad (cero sin actividad).
- RF cubierto: RF-2, RF-3.
- Tiempo estimado: 20 min.
- **Hecho cuando:** niveles correctos para minutos y pico.

## Tarea 5 — Estilos del mapa en CSS

- [ ] Añadir rejilla y estilos de niveles en `styles.css`.
- RF cubierto: RF-1.
- Tiempo estimado: 20 min.
- **Hecho cuando:** el mapa se pinta con los niveles definidos y sin estilos inline.

## Tarea 6 — Render del mapa en la interfaz

- [ ] Conectar logica pura con el contenedor del DOM en `app.js`.
- RF cubierto: RF-1, RF-2, RF-3.
- Tiempo estimado: 20 min.
- **Hecho cuando:** el mapa refleja las sesiones registradas y sus minutos.

## Tarea 7 — Tests con `node --test`

- [ ] Escribir tests de logica pura (acumulacion, niveles, semanas) con `hoy` como parametro.
- RF cubierto: RF-1, RF-2, RF-3.
- Tiempo estimado: 30 min.
- **Hecho cuando:** los tests nuevos pasan sin instalar dependencias.

## Tarea 8 — Verificacion manual

- [ ] Probar flujo manual: registrar sesiones, recargar, racha y mapa.
- RF cubierto: todos (RF-1, RF-2, RF-3).
- Tiempo estimado: 15 min.
- **Hecho cuando:** flujo completo verificado en el navegador sin errores.
