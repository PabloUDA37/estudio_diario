# Spec 001 — Mapa de calor de estudio (Heat Map)

## Contexto y objetivo
El Diario de Estudio ya registra sesiones (fecha, tema, minutos) y expone la racha actual y los totales semanales. El estudiante no puede ver con un vistazo la consistencia de su actividad en el tiempo reciente.

El objetivo del cambio es añadir un mapa de calor tipo GitHub: un día con sesión se representa con una intensidad proporcional a los minutos estudiados; los días sin sesión se representan en nivel neutro.

## Usuarios
- Estudiante autogestionado que registra sesiones y consulta su actividad reciente.

## Historias de usuario
- HU-1: Como estudiante, quiero consultar un mapa de calor de las últimas semanas para percibir mi constancia.
- HU-2: Como estudiante, quiero ver la intensidad de cada día a partir de los minutos acumulados.

## Requisitos funcionales
- RF-1: El sistema SHALL mostrar un mapa de calor con los días estudiados de las últimas 8 semanas.
  - CA-1: Dado que el día X tiene 45 minutos registrados, cuando el mapa se muestre, entonces el día X SHALL presentar una intensidad media.
- RF-2: El sistema SHALL calcular la intensidad de cada día a partir de los minutos totales de sus sesiones.
  - CA-2: Dado que el día Y tiene 120 minutos y el día Z tiene 20, cuando se comparen, entonces el sistema SHALL presentar mayor intensidad en el día Y.
- RF-3: El sistema SHALL presentar nivel cero para los días sin sesión registrada.

## Requisitos no funcionales
- El mapa SHALL renderizarse con datos de actividad reciente sin instrucciones de carga perceptibles.
- El contraste entre los niveles activos y el fondo SHALL cumplir los criterios de legibilidad del proyecto.

## Casos límite
- CL-1: Sin sesiones registradas → el mapa SHALL mostrarse vacío.
- CL-2: Sesiones con fecha futura → SHALL excluirse del cálculo.

## Fuera de alcance
- Navegación entre semanas, edición de días desde el mapa, comparativas entre periodos.

## Criterios de finalización
- El mapa muestra los días con sesión y su intensidad según minutos.
- Los días sin sesión aparecen en nivel neutro.
- El flujo manual (registrar → recargar → racha) no se ve afectado.

## Dudas abiertas
- [NECESITA ACLARACIÓN]: número exacto de semanas del mapa.
- [NECESITA ACLARACIÓN]: umbral máximo de intensidad (techo de color).
- [NECESITA ACLARACIÓN]: comportamiento cuando existen más de un tema el mismo día (suma de minutos).
