"use strict";
//Primero voy a necesitar  el tbody
let tabla = document.getElementsByTagName("tbody")[0];
//Despues almaceno las filas del tbody
let rows = document.getElementsByTagName("tbody")[0].rows;
//Necesito construir un array para poder ordenarlo (es un objeto de elementos tableRows)
let rowsArray = Array.from(rows);
//Pasamos a ordenarlo con sort. Compararemos el contenido textual del primer elemento hijo de 'a' con 'b', es decir el primer 'td'
//Importante utilizar localCompare para poder comparar textos
let ordenado = rowsArray.sort((a, b) => a.firstElementChild.textContent.localeCompare(b.firstElementChild.textContent))
//Por último insertamos el tbody ordenado. Importante los '...' en el append
tabla.append(...ordenado);


