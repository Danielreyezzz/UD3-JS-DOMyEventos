"use strict";
//Seleccionamos el elemento por nombre de etiqueta.
//Nos devuelve un array, así que debemos seleccionar la posición a la hora de mostrar
let div = document.getElementsByTagName("div");
alert(div[0].innerHTML);

// Con querySelector obtenemos la primera coincidencia del selector dado
let ul = document.querySelector("ul");
alert(ul.innerHTML);

//querySelectorAll nos devuelve todas las coincidencias del selector dado.
//En nuestro caso nuestro selector la el ultimo hijo li de ul
let li = document.querySelectorAll("ul > li:last-child");
alert(li[0].innerHTML)

;