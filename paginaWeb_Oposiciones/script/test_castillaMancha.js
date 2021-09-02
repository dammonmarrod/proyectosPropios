let questions = [
  {
    title:
      "¿Cuál es la diferencia entre los conceptos de reanimación cardio-pulmonar y soporte vital básico.",
    answer_1:
      "A) La RCP se compone de una serie de maniobras, mientras que el SV es un conjunto de conocimientos teóricos.",
    answer_2:
      "B) El SV es la continuación de la RCP básica, pero con personal experto y equipo especializado.",
    answer_3:
      "C) El SV es un concepto más amplio que integra, junto con las maniobras de RCP contenidos referidos a la prevención y difusión de los conocimientos a la población.",
    answer_4: "D) En nada, es lo mismo.",
    correct_answer: "answer_3"
  },
  {
    title:
      "La negociación colectiva de las condiciones de trabajo del personal estatutario del Servicio Andaluz de Salud se efectúa:",
    answer_1: "A) En las Juntas de Personal de cada centro.",
    answer_2:
      "B) En la Mesa Sectorial de Sanidad del Servicio Andaluz de Salud, compuesta por representantes de la Administración y de las organizaciones sindicales más representativas (haber obtenido al menos el 10% elecciones sindicales).",
    answer_3: "C) En el Comité de Empresa del Servicio Andaluz de Salud",
    answer_4:
      "D) Entre el Ministerio de Sanidad y Consumo y la Consejería de Salud de la Junta de Andalucía.",
    correct_answer: "answer_2"
  },
  {
    title:
      "¿Cuál es la posición correcta en que debemos colocar a un paciente inconsciente que necesite cuidados de reanimación cardio-pulmonar?",
    answer_1: "A) Posición lateral de seguridad.",
    answer_2: "B) Trendelemburg.",
    answer_3: "C) Decubito supino con la cabeza en hiperextensión.",
    answer_4: "D) Decubito supino con la cabeza ladeada",
    correct_answer: "answer_3"
  },
  {
    title: "Una de las siguientes afirmaciones es correcta:",
    answer_1:
      "A) En caso de fiebre el ba\u00f1o debe ser tibio o fr\u00edo con el fin de bajar la temperatura corporal",
    answer_2: "B) La ducha tiene un efecto relajante",
    answer_3: "C) El ba\u00f1o tiene un efecto estimulante",
    answer_4: "D) No se recomienda el baño más de 2 veces a la semana",
    correct_answer: 1
  },
  {
    title: "En el aseo del paciente encamado lo último que debe lavarse es: ",
    answer_1: "A) Las piernas y pies",
    answer_2: "B) La regi\u00f3n genital",
    answer_3: "C) No importa el orden en que se haga el lavado",
    answer_4: "D) Las axilas",
    correct_answer: 1
  }
];

for (var i = 0; i < questions.length; i++) {
  let div_Titulo = document.createElement("div");
  console.log("Pregunta  " + i + ": " + questions[i].title);
  div_Titulo.append(document.createTextNode(questions[i].title));
  div_Titulo.className = "pregunta";
  div_Titulo.id = "title";

  let todas_las_preguntas = document.getElementById("todas_las_preguntas");
  todas_las_preguntas.appendChild(div_Titulo);

  let div_Answer_1 = document.createElement("div");
  console.log("Respuesta:  " + questions[i].answer_1);
  div_Answer_1.append(document.createTextNode(questions[i].answer_1));
  div_Answer_1.className = "grid-item";
  div_Answer_1.onclick = function () {
    div_Answer_1.style.backgroundColor = "green";
    div_Answer_3.style.backgroundColor = "";
    div_Answer_2.style.backgroundColor = "";
    div_Answer_4.style.backgroundColor = "";
  };
  todas_las_preguntas.appendChild(div_Answer_1);

  let div_Answer_2 = document.createElement("div");
  console.log("Respuesta:  " + questions[i].answer_2);
  div_Answer_2.append(document.createTextNode(questions[i].answer_2));
  div_Answer_2.className = "grid-item";
  div_Answer_2.onclick = function () {
    div_Answer_2.style.backgroundColor = "green";
    div_Answer_3.style.backgroundColor = "";
    div_Answer_4.style.backgroundColor = "";
    div_Answer_1.style.backgroundColor = "";
  };
  todas_las_preguntas.appendChild(div_Answer_2);

  let div_Answer_3 = document.createElement("div");
  console.log("Respuesta:  " + questions[i].answer_3);
  div_Answer_3.append(document.createTextNode(questions[i].answer_3));
  div_Answer_3.className = "grid-item";
  div_Answer_3.id = "answer_1";
  div_Answer_3.onclick = function () {
    div_Answer_3.style.backgroundColor = "green";
    div_Answer_4.style.backgroundColor = "";
    div_Answer_2.style.backgroundColor = "";
    div_Answer_1.style.backgroundColor = "";
  };
  todas_las_preguntas.appendChild(div_Answer_3);

  let div_Answer_4 = document.createElement("div");
  console.log("Respuesta:  " + questions[i].answer_4);
  div_Answer_4.append(document.createTextNode(questions[i].answer_4));
  div_Answer_4.className = "grid-item";
  div_Answer_4.onclick = function () {
    div_Answer_4.style.backgroundColor = "green";
    div_Answer_3.style.backgroundColor = "";
    div_Answer_2.style.backgroundColor = "";
    div_Answer_1.style.backgroundColor = "";
  };
  todas_las_preguntas.appendChild(div_Answer_4);

  /*
            <div class="pregunta" id="title">
            	<p ></p>
            </div>
            <div class="respuestas" >				
								<div class="grid-item" id="answer_1"><div></div></div>
  							<div class="gird-item" id="answer_2"><div></div></div>
  							<div class="grid-item" id="answer_3"><div></div></div>
  							<div class="grid-item" id="answer_4"><div></div></div>
    */

  /*
	document.getElementById("title").innerHTML=questions[i].title;
	console.log("Pregunta  " + i + ": "+ questions[i].answer_1);
	document.getElementById("answer_1").innerHTML=questions[i].answer_1;
	console.log("Respuesta:  "  + questions[i].answer_1);
	document.getElementById("answer_2").innerHTML=questions[i].answer_2;
	console.log("Respuesta:  "  + questions[i].answer_2);
	document.getElementById("answer_3").innerHTML=questions[i].answer_3;
	console.log("Respuesta:  "  + questions[i].answer_3);
	document.getElementById("answer_4").innerHTML=questions[i].answer_4;
	console.log("Respuesta:  "  + questions[i].answer_4);
*/
}
