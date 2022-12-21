"use strict";
//Guardamos todos los selectores 'div'
let divs = document.querySelectorAll("div");

//Les sinsertamos 'afterbegin' un elemento html button
for (let i = 0; i < divs.length; i++) {
    divs[i].insertAdjacentHTML("afterbegin", "<button>X</button>")
}