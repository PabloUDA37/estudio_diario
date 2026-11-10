# Spec 002 — Objetivo semanal de estudio

## Estado: borrador

## Contexto y objetivo
El Diario de Estudio ya registra sesiones (fecha, tema, minutos), calcula la racha y muestra el total semanal. Sin embargo, el estudiante no puede fijar cuántos minutos quiere estudiar cada semana ni ver cuánto ha llegado respecto a un objetivo.

El objetivo del cambio es permitir fijar un objetivo de minutos por semana y visualizar el progreso de la semana actual frente a dicho objetivo.

## Usuarios
- Estudiante autogestionado que registra sesiones y busca un objetivo semanal de estudio.

## Historias de usuario
- HU-1: Como estudiante, quiero fijar los minutos que quiero estudiar cada semana para tener un objetivo concreto.
- HU-2: Como estudiante, quiero ver el progreso de mi semana actual respecto al objetivo fijado.

## Requisitos funcionales
- RF-1: El sistema SHALL permitir al usuario fijar un objetivo de minutos por semana.
  - CA-1: Dado que el usuario define un objetivo de N minutos por semana, cuando lo confirma, entonces el sistema SHALL considerar dicho objetivo para la semana en curso.
- RF-2: El sistema SHALL reiniciar el objetivo al inicio de cada semana natural (lunes a domingo) y comparar los minutos acumulados en la semana actual con el objetivo.
  - CA-2: Dado que el objetivo es de 120 minutos y la semana actual acumuló 90, cuando se muestre el progreso, entonces el sistema SHALL presentar el avance correspondiente (porcentaje o minutos restantes).
- RF-3: El sistema SHALL mostrar el progreso de la semana actual con una barra de progreso.
  - CA-3: Dado que el progreso es el 50%, cuando se muestre, entonces la barra SHALL reflejar el 50%.

## Requisitos no funcionales
- El cálculo y la persistencia del objetivo SHALL realizarse sin instrucciones de carga perceptible.
- El contraste de la barra SHALL cumplir los criterios de legibilidad del proyecto.
- Los datos del usuario SHALL mantenerse en almacenamiento local sin envío a servidores.

## Casos límite
- CL-1: Sin objetivo fijado → el sistema SHALL omitir el cálculo y la visualización del progreso.
- CL-2: Semana actual sin minutos acumulados → el progreso SHALL presentarse como 0 / objetivo no alcanzado.
- CL-3: Objetivo superior a los minutos acumulados → SHALL mostrarse progreso parcial con los minutos restantes.
- CL-4: Objetivo alcanzado → SHALL mostrarse progreso completo (100%).
- CL-5: Sesiones con fecha futura → SHALL excluirse del cálculo.

## Fuera de alcance
- Navegación entre semanas, objetivos con periodos distintos, comparativas entre periodos, edición del objetivo durante la semana.

## Criterios de finalización
- El usuario puede fijar un objetivo de minutos por semana.
- El objetivo se reinicia cada semana natural (lunes a domingo).
- El progreso de la semana actual se muestra con barra frente al objetivo.
- El flujo manual (registrar → recargar → racha) no se ve afectado.

## Dudas abiertas
- [NECESITA ACLARACIÓN]: nombre exacto de la clave de almacenamiento para el objetivo semanal.
- [NECESITA ACLARACIÓN]: si el objetivo puede editarse durante la misma semana.
- [NECESITA ACLARACIÓN]: si al alcanzar el objetivo se muestra algún estado especial más allá de la barra completa.
