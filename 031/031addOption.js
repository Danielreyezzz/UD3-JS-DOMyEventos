"use strict";
//Se trata de manejar la etiqueta select
let genres = document.getElementById("genres");
//Una vez que tenemos el select guardado, utilizaremos el método options
//Este método requiere la posicion en la que se encuentra la opción
//En nuestro caso, la posición la sacaremos mediante el método selectedIndex, que devuelve el index de la opción seleccionada
let mostrarOpcion = genres.options[genres.selectedIndex];
//Para mostrar el valor y el texto acudiremos a .value y .text
alert("Valor: " + mostrarOpcion.value);
alert("Texto: " + mostrarOpcion.text);

//Cada opción es un objeto Option, por lo tanto debemos acudir a su constructor para crear una nueva opción
//Para añadirla solo tenemos que hacer un append
let classic = new Option("Classic", "classic");
genres.append(classic);
//Por útimo acudimos a método selected para cambiar su valor a true;
classic.selected = true;
