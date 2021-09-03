function resultado() {
  let cont = 0;
  let contCorrecto = 0;
  let respuestasCorrectas = [
    "pregunta_07_2",
    "pregunta_08_3",
    "pregunta_09_1",
    "pregunta_10_2",
    "pregunta_11_1"
  ];
  for (var i = 0; i < respuestasCorrectas.length; i++) {
    console.log(i);
    if (document.getElementById(respuestasCorrectas[i]).checked == true) {
      cont++;
    }
  }
  /*
  if (document.getElementById().checked == true) {
    cont++;
  }
  if (document.getElementById("pregunta_09_1").checked == true) {
    cont++;
  }
  
  */
  document.getElementById("resultado").innerHTML =
    "Preguntas Correctas: " + cont;
  if (contCorrecto === 0) {
    decorarSolucion();
  }
  contCorrecto++;
}

function decorarSolucion() {
  const acierto = " Correcta";
  //str.fontcolor(color) para cambiar el color de una cadena.

  /*Seleccionamos todos los span de la clase solution que serán las respuestas correctas */
  let tag_span = document.getElementsByClassName("correcta");

  /*Ponemos la respuesta en negrita */
  for (let i = 0; i < tag_span.length; i++) {
    tag_span[i].innerHTML += acierto.fontcolor("red");
    tag_span[i].style.fontWeight = "bold";
  }
}
