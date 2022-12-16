"use strict";
//Metemos en una variable todos los 'a' dentro de 'li', para ahorrarnos el primer enlace que no nos sirve
let a = document.querySelectorAll("li > a");
//Recorremos los enlaces
for (let i of a) {
  //Metemos en la variable 'atributo' el atributo href  
  let atributo = i.getAttribute("href");
  //Si su valor tiene los caracteres indicados y no empieza con el link indicado, le seteamos el atributo style con el color deseado
  if (atributo.includes("://")) {
    if (!atributo.startsWith("http://internal.com")) {
      i.setAttribute("style", "color: purple");
    }
  }
}
