"use strict";

let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].insertAdjacentHTML("afterbegin", "<button>X</button>")
    //Introduzco los botones en una variable
    //Por cada vuelta cada boton recibirá un onclick que borrará su div correspondiente 
    let boton = document.querySelectorAll("button");
    boton[i].onclick = () => divs[i].remove();
}



