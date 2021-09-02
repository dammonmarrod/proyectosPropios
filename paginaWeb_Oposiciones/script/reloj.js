//Hacemos que muestre el reloj del sistema cada segundo
setInterval(mostrarReloj, 1000);
//1 minuto = 60000 milisegundos

function mostrarReloj() {
  //declaramos un objeto Date
  var fechaHora = new Date();

  //Usamos el objeto date para obtener la hora, minuto y segundo
  var hora = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

  //Para que muestre 2 dígitos siempre.
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  //Lo mostramos en els div
  document.getElementById("reloj").innerHTML =
    hora + ":" + minutos + ":" + segundos;
}
