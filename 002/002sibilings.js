"use strict";
//null porque el busca el siguiente nodo, y este no existe
let next = document.querySelector(".elem");
alert(next.lastChild.nextSibling);

//no es null porque accede al padre, pero no mostrará nada porque no tiene nada para mostrar
let last = document.querySelector(".elem");
alert(last.children[0].previousSibling.textContent);