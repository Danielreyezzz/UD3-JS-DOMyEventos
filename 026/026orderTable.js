"use strict";
//Las diferencias con la 018 son las siguientes:
//Guardamos todos los th
let th = document.querySelectorAll("th")

let tabla = document.getElementsByTagName("tbody")[0]; 
let rows = document.getElementsByTagName("tbody")[0].rows;

let rowsArray = Array.from(rows);

//El primer th representa los números, así que le metemos un onclick que ordenará la tabla comparando el primer elemento hijo
th[0].onclick = () => tabla.append(...rowsArray.sort((a, b) => a.firstElementChild.textContent - b.firstElementChild.textContent));
//Para el th de los nombre haremos lo mismo pero esta vez comparando el ultimo elemento hijo (al ser texto usaremos localeCompare)
th[1].onclick = () => tabla.append(...rowsArray.sort((a, b) => a.lastElementChild.textContent.localeCompare(b.lastElementChild.textContent)));




