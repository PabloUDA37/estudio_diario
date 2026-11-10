# Plan 001 — Mapa de calor (Heat Map)

## Archivos

| Fichero | Acción | Responsabilidad |
|---|---|---|
| `index.html` | Modifica | Añade el contenedor semántico del mapa de calor. |
| `styles.css` | Modifica | Estilos del mapa: rejilla, niveles, día sin sesión. |
| `app.js` | Modifica | Lógica de dominio pura (fechas, minutos, niveles) y render del mapa. |
| — | — | No se crean ficheros de código nuevos: respeta el stack mínimo de la constitución. |

## Funciones puras de lógica necesarias (con `hoy` como parámetro)

- `agruparMinutosPorDia(sesiones, hoy)`: agrega los minutos por fecha a partir de las sesiones, ignorando las fechas posteriores a `hoy`. Devuelve el total por día.
- `semanasDelPeriodo(hoy, semanas)`: devuelve las N semanas (inicio y fin de semana en ISO) a renderizar, empezando por la semana en curso.
- `nivelPara(minutos, picoSemana)`: devuelve el nivel de intensidad de un día a partir de sus minutos y del pico de la ventana; devuelve cero cuando no hay actividad.

## Algoritmo del mapa (pseudocódigo)

```
funcion construirMapa(sesiones, semanas, hoy):
    acumulado = agruparMinutosPorDia(sesiones, hoy)
    pico = maximo de acumulado dentro de la ventana
    columnas = lista vacia
    semanaActual = inicioSemana(hoy)
    para i = semanas - 1 hasta 0:
        inicio = semanaActual - (i * 7 dias)
        fin = inicio + 6 dias
        columna = lista vacia
        para d = 0 hasta 6:
            fecha = inicio + d
            minutos = acumulado[fecha] o 0
            columna.add(nivelPara(minutos, pico))
        columnas.add(columna)
    retornar columnas

funcion nivelPara(minutos, pico):
    si minutos <= 0 o pico <= 0:
        retornar 0
    normalizar = minutos / pico
    ...escalar al nivel maximo de la ventana
```

## Como se pinta en la interfaz

- El mapa se renderiza en el contenedor del `index.html`.
- En `styles.css` se aplica una rejilla donde las columnas corresponden a semanas y las celdas a días (lunes a domingo).
- El fondo de cada celda se decide por su nivel: cero para días sin sesion, tono creciente para dias con actividad.

## Decisiones técnicas justificadas (y alternativa descartada)

- **Logica en funciones puras sin DOM** → exige la separacion logica/UI de la constitucion. Alternativa descartada: calcular todo dentro del render.
- **Ventana fija de 8 semanas** → reduce parametros y simplifica el algoritmo. Alternativa descartada: ventana configurable (fuera de alcance de la spec).
- **Acumulacion por dia (suma de minutos)** → alinea con el RF-2 de la spec. Alternativa descartada: una celda por sesion.
- **Rejilla CSS para el mapa** → soporta columnas de semanas de forma nativa. Alternativa descartada: flexbox manual.

## Tests (node --test)

- Se usan los tests del runner nativo `node --test`, sin dependencias nuevas.
- Se testea la logica pura: acumulacion por dia con `hoy` fijo (incluyendo exclusion de fechas futuras) y calculo de niveles.
- La fecha de prueba se pasa como parametro (`hoy`) para hacerlo determinista.
- Cobertura prevista: RF-1, RF-2 y RF-3.

## Cobertura de los RF en el plan

- RF-1 -> construccion de semanas y render del mapa.
- RF-2 -> acumulacion y nivel con pico.
- RF-3 -> nivel cero para dias sin actividad.

## Nota sobre la constitucion y AGENTS.md

- El plan respeta el stack minimo, la separacion logica/UI, el test con `node --test`, el almacenamiento en localStorage y el idioma (identificadores claros, textos en espanol).
