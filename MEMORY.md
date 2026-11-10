# MEMORY.md — Diario de Estudio
Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado actual
- Diseño v2: "lámpara de estudio". Noche cálida (#171310), ámbar (#e8a33d) para la racha, serif editorial (Palatino/Georgia) + system-ui. Sin emojis, sin gradientes, sin cards redondeadas genéricas.
- Funcionalidad: registrar sesiones (fecha, tema, minutos), racha, lista, total semanal y días estudiados.

## Aprendizajes y errores a evitar
- (vacío por ahora)

## Decisiones (y por qué)
- Sin backend ni dependencias: cualquiera debe abrirlo con doble clic. - Fecha editable en el formulario: permite registrar días pasados y ver la racha crecer.
- La semana se calcula en local (lunes a domingo) y no se cuentan fechas futuras.
- v2: concepto "lámpara de estudio" (noche cálida + ámbar); serif para números/títulos; accent único en la racha.
- CONSTITUCIÓN APROBADA: docs/constitution.md (6 principios: stack mínimo, spec↔código, lógica/UI, tests, datos, idioma).

## Próximos pasos 
- (vacío por ahora) 
- Spec 001 (mapa de calor) creada en `specs/001-heat-map/spec.md`; plan en `specs/001-heat-map/plan.md`; tasks en `specs/001-heat-map/tasks.md`. Estado: spec + plan + tasks creados. Pendiente: implementación. 
