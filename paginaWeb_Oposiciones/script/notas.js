/* FUNCIONES PARA EL POP-UP*/
function mostrar() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}
function esconder() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

/* FUNCIONES PARA GUARDAR LAS NOTAS*/

// Elementos del DOM
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");

// Obtener y guardar las tareas
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todoData = [];

existingTodos.forEach((todo) => {
  addTodo(todo);
});

function addTodo(todoText) {
  //Añadimos la tarea
  todoData.push(todoText);
  const li = document.createElement("li");
  li.style.textAlign = "left";
  li.style.marginLeft = "10px";
  li.style.marginRight = "10px";
  li.innerHTML = todoText;
  const span = document.createElement("span");
  span.onclick = borrar; //Metodo borrar()
  span.className = "close";

  span.appendChild(document.createTextNode("    \u00D7"));
  li.append(span);
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
  input.value = "";
}

function borrar() {
  //Borramos del dom y del localStore la tarea al pulsar sobre la x
  this.parentElement.remove(); //Eliminamos en el DOM el elemento
  console.log(this.parentElement.firstChild.data);
  let datoBorrar = this.parentElement.firstChild.data;
  console.log(todoData);
  //Eliminamos en el localStore el elemento
  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i] == datoBorrar) {
      todoData.splice(i, 1); //En la posición donde este del array toodData lo eliminamos
      console.log(localStorage);
      localStorage.setItem("todos", JSON.stringify(todoData)); //Modificamos el localStore
    }
  }
}

// Llamaos al evento onsubmit
form.onsubmit = (event) => {
  event.preventDefault(); //eliminamos la funcion del evento predefinida
  addTodo(input.value);
};
