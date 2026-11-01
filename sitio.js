// Datos editables de todo el sitio.
// Código de país + número, sin "+" ni espacios.
const WHATSAPP = "573124931789";
// Enlace al APK del juego. Vacío = se muestra "Próximamente" y no hay enlace.
const APK_URL = "https://github.com/ccramirez20/acab-releases/releases/latest/download/acab.apk";

function waUrl(mensaje) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = waUrl(a.dataset.msg);
});

const apk = document.querySelector("[data-apk]");
if (apk && APK_URL) {
  const a = document.createElement("a");
  a.className = "btn btn-claro";
  a.href = APK_URL;
  a.textContent = "Descargar el APK";
  apk.replaceWith(a);
}

// Tarjeta común de Artistas y Merch: arte + filas de información.
function tarjeta(item, filas) {
  const art = document.createElement("article");
  art.className = "tarjeta";
  const marco = document.createElement("div");
  marco.className = "tarjeta-arte";
  const img = document.createElement("img");
  img.src = item.imagen;
  img.alt = item.nombre;
  img.loading = "lazy";
  marco.append(img);
  const info = document.createElement("div");
  info.className = "tarjeta-info";
  const h3 = document.createElement("h3");
  h3.textContent = item.nombre;
  info.append(h3, ...filas);
  art.append(marco, info);
  return art;
}
