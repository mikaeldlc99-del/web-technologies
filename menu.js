// 1. CONTROL DEL MENÚ MÓVIL (HAMBURGUESA) - SEGURO Y PROTEGIDO
// ==========================================================================
const menuBtn = document.querySelector(".navbar > .nav-item");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("active");
  });
}

// ==========================================================================
// 2. RESALTADO SEGURO DE LA PESTAÑA ACTIVA (EVITA FALLOS POR CARPETAS)
// ==========================================================================
// Conseguimos la página actual limpiando rutas (ej: "html.html" o "index.html")
const currentFile = window.location.pathname.split('/').pop().toLowerCase() || "index.html";

const allLinks = document.querySelectorAll(".nav-links li a");

allLinks.forEach(link => {
  const hrefAttr = link.getAttribute("href");
  if (!hrefAttr) return;

  // Limpiamos el enlace del HTML para quedarnos solo con el nombre del archivo final
  let linkFile = hrefAttr.split('/').pop().toLowerCase();

  // Si el enlace es la casa "#" o apunta a un index alternativo, lo igualamos a index.html
  if (hrefAttr === "#" || linkFile === "") {
    linkFile = "index.html";
  }

  // Si los archivos coinciden, activamos el fondo verde; si no, lo quitamos
  if (linkFile === currentFile) {
    link.parentElement.classList.add("active-link");
  } else {
    link.parentElement.classList.remove("active-link");
  }
});





