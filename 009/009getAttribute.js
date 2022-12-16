"use strict";
//con querySelector escribimos entre corchetes el nombre del atributo y así lo obtenemos
//con getAttribute leemos el valor concreto
let atributo = document.querySelector("[data-widget-name]").getAttribute("data-widget-name");

alert(atributo);