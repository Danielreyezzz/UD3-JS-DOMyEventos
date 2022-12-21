"use strict";

let ul = document.getElementById("ul");
//Utilizaremos el objeto event
ul.onclick = (evento) => {
  //El método ctrlKey devuelve true si la tecla ctrl ha sido pulsada. y false de lo contrario
  //Por lo tanto si ha sido pulsado, utilizaremos otro método del objeto event: target
  //target nos devuelve el elemento que origina el evento. En nuestro caso el 'li' correspondiente
  //añadimos al la lista de clases del target la clase selected
  if (evento.ctrlKey) {
    evento.target.classList.add("selected");
  } else {
    //Si no ha sido pulsado ctrl, debemos eliminar la clase selected de todo aquel elemento que la tenga
    let seleccion = ul.querySelectorAll(".selected");
    for (let i = 0; i < seleccion.length; i++) {
      seleccion[i].classList.remove("selected");
    }
    //Por ultimo debemos añadir la clase al target
    evento.target.classList.add("selected");
  }
};

