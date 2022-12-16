"use strict";
//Mediante un for of recorremos todos los elementos 'li'
for (let i of document.querySelectorAll("li")) {
  //Por cada vuelta, la variable texto tomará el valor del contenido textual correspondiente
  let texto = i.firstChild.textContent;
  //Vemos cuantos elementos por etiqueta 'li' tiene el 'li' en el que estamos mediante length
  let numeroDescendientes = i.getElementsByTagName("li").length;
  //Por último mostramos ambos valores
  alert(texto + " tiene " + numeroDescendientes + " descendientes");
}
