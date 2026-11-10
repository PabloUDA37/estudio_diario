# Constitución del Diario de Estudio

1. **Stack mínimo.** HTML, CSS y JavaScript puros. Sin frameworks, build, dependencias ni bundlers.
2. **Spec y código.** La especificación manda: el código no amplía el alcance sin actualizar la spec.
3. **Lógica e interfaz.** Toda la lógica de dominio (fechas, racha, minutos) vive en funciones puras sin DOM; la UI solo renderiza y delega.
4. **Tests.** Sin instalar dependencias. Verificación manual mínima (registrar → recargar → racha) y funciones puras.
5. **Datos del usuario.** Solo localStorage (`diario-estudio.sesiones`), sin envío a servidores.
6. **Idioma.** Identificadores en inglés claro; textos de interfaz y mensajes en español.

Principios inmutables. Cualquier cambio requiere justificación escrita y aprobación.
