/* Referencias */

const tareaEntrada = document.getElementById(`tarea-entrada`);
const botonAgregar = document.getElementById(`boton-agregar`);
const mensaje = document.getElementById(`mensaje`)



/* Escuchador */

botonAgregar.addEventListener(`click`, agregarTarea);

/* Funcion Agregar Tarea */

function agregarTarea() {
  // Generar una variable para evaluar si hay texto o nel

  const texto = tareaEntrada.value.trim();

  // Evaluar constante texto

  if(texto) {
    tareaEntrada.value = ``;
    mensaje.textContent = `Tarea creada correctamente 😉`;
  } else {
    mensaje.textContent = `No escribiste nada chamaco 🤔`;
  }
}

/* Mastrar un mensaje al escribir en el input */

tareaEntrada.addEventListener(`inpunt`, () => {

  // Evaluar si el valor del input esta vacio

  if(tareaEntrada.value.trim() === `` ) {
    mensaje.textContent = `Escribe tu primera tarea! 🤗`;
  } else {
    mensaje.textContent = `Al finalizar preciona enter! ↩`;
  } 

} )

/* Funcio para crear el elemento tarea */

function crearElementoTarea() {
 const tareacontenedor = document.createElement(`div`);
 const tareaTexto = document.createElement(`p`)
 const iconosContenedor = document.createElement(`div`);
 const iconoCompletada = document.createElement(`i`);
 const iconoEliminar = document.createElement(`i`);

 console.log(tareaContenedor);
 console.log(tareTexto);
 console.log(iconoContenedor);
 console.log(iconosCompletada);
 console.log(iconoEliminar);

}

/* Al precionar la tecla enter se ejecutaAgregar Tarea */

tareaEntrada.addEventListener(`keydown`, (e) => {
  // Evaluar la tecla presionada
  if(e.key === `Enter`) {
    agregarTarea();
  }
} )