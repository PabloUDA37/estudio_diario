const STORAGE_KEY = "diario-estudio.sesiones";

const form = document.getElementById("form-sesion");
const inputFecha = document.getElementById("fecha");
const inputTema = document.getElementById("tema");
const inputMinutos = document.getElementById("minutos");
const listaSesiones = document.getElementById("lista-sesiones");
const rachaNumero = document.getElementById("racha-numero");
const rachaTexto = document.getElementById("racha-texto");
const totalSemanaMinutos = document.getElementById("total-semana-minutos");
const totalDiasEstudiados = document.getElementById("total-dias-estudiados");

// Devuelve la fecha como "YYYY-MM-DD" usando la fecha local del usuario.
function aISODate(fecha) {
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${año}-${mes}-${dia}`;
}

// Convierte "YYYY-MM-DD" a un objeto Date en horario local.
function desdeISO(iso) {
  const [año, mes, dia] = iso.split("-").map(Number);
  return new Date(año, mes - 1, dia);
}

function obtenerSesiones() {
  try {
    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(datos)) {
      return [];
    }
    return datos.filter((sesion) => sesion && typeof sesion.fecha === "string");
  } catch (error) {
    return [];
  }
}

function guardarSesiones(sesiones) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sesiones));
  } catch (error) {
    // Si localStorage no está disponible, la app sigue funcionando en memoria.
  }
}

function registrarSesion(fecha, tema, minutos) {
  const sesiones = obtenerSesiones();
  sesiones.push({
    id: Date.now(),
    fecha: fecha,
    tema: tema,
    minutos: minutos,
  });
  guardarSesiones(sesiones);
}

// Calcula la racha: días consecutivos con sesión que terminan hoy.
// Si hoy aún no hay sesión, se parte del último día estudiado,
// así la racha no se rompe hasta que termine el día.
function calcularRacha(sesiones) {
  const dias = [...new Set(sesiones.map((s) => s.fecha))].sort();
  if (dias.length === 0) {
    return 0;
  }

  const ultima = dias[dias.length - 1];
  const cursor = desdeISO(ultima);
  let racha = 0;

  for (;;) {
    const iso = aISODate(cursor);
    if (!dias.includes(iso)) {
      break;
    }
    racha += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return racha;
}

// Suma los minutos de las sesiones de la semana actual (lunes a domingo).
// Ignora sesiones con fecha futura.
function calcularMinutosSemana(sesiones, hoyISO) {
  const hoy = desdeISO(hoyISO);
  const diaSemana = hoy.getDay();
  const inicioSemana = new Date(hoy);
  inicioSemana.setDate(hoy.getDate() - ((diaSemana + 6) % 7));
  const inicioSemanaISO = aISODate(inicioSemana);
  const finSemana = new Date(inicioSemana);
  finSemana.setDate(inicioSemana.getDate() + 6);
  const finSemanaISO = aISODate(finSemana);

  let total = 0;
  for (const sesion of sesiones) {
    if (sesion.fecha < inicioSemanaISO || sesion.fecha > finSemanaISO) continue;
    if (sesion.fecha > hoyISO) continue;
    total += sesion.minutos;
  }
  return total;
}

// Cuenta los días distintos con sesión registrada, hasta hoy.
// Ignora sesiones con fecha futura.
function calcularDiasEstudiados(sesiones, hoyISO) {
  const dias = new Set();
  for (const sesion of sesiones) {
    if (sesion.fecha > hoyISO) continue;
    dias.add(sesion.fecha);
  }
  return dias.size;
}

function formatearFecha(iso) {
  return desdeISO(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderizar() {
  const sesiones = obtenerSesiones();
  const racha = calcularRacha(sesiones);
  rachaNumero.textContent = racha;
  rachaTexto.textContent = racha === 1 ? "día de racha" : "días de racha";

  const totalSemana = calcularMinutosSemana(sesiones, aISODate(new Date()));
  totalSemanaMinutos.textContent =
    totalSemana === 1 ? "1 min esta semana" : `${totalSemana} min esta semana`;

  const diasEstudiados = calcularDiasEstudiados(sesiones, aISODate(new Date()));
  totalDiasEstudiados.textContent =
    diasEstudiados === 1 ? "1 día estudiado" : `${diasEstudiados} días estudiados`;

  const ordenadas = [...sesiones].sort((a, b) =>
    b.fecha.localeCompare(a.fecha)
  );

  if (ordenadas.length === 0) {
    listaSesiones.innerHTML =
      '<li class="vacio">Aún no tienes sesiones registradas. ¡Regístrala la primera!</li>';
    return;
  }

  listaSesiones.innerHTML = ordenadas
    .map(
      (s) => `
      <li class="sesion">
        <div>
          <p class="sesion-tema">${s.tema}</p>
          <p class="sesion-fecha">${formatearFecha(s.fecha)}</p>
        </div>
        <span class="sesion-minutos">${s.minutos} min</span>
      </li>
    `
    )
    .join("");
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const tema = inputTema.value.trim();
  const minutos = Number(inputMinutos.value);
  const fecha = inputFecha.value;

  if (!tema || !fecha) {
    return;
  }
  if (!Number.isFinite(minutos) || minutos <= 0) {
    return;
  }

  registrarSesion(fecha, tema, minutos);
  form.reset();
  inputFecha.value = aISODate(new Date());
  renderizar();
});

inputFecha.value = aISODate(new Date());
renderizar();
