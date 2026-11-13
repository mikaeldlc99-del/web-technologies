//SHOW DATE AND TIME
function actualizarReloj() {
    document.getElementById('demo').innerHTML = new Date().toLocaleString();
  }

  // Muestra la hora de inmediato al cargar la página
  actualizarReloj();

  // Actualiza el texto cada 1000 milisegundos (1 segundo)
  setInterval(actualizarReloj, 1000);

