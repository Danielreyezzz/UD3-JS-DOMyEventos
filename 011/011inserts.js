"use strict"

let elem = document.getElementById("elem");
let text = "Textito sensual";

elem.append(document.createTextNode(text));
elem.innerHTML = text
elem.textContent = text

//En mi experiencia en este caso el resultado es el mismo, pero no sirven para lo mismo
//append inserta un nodo despues del ultimo hijo del elemento que lo invoca
//innerHTML sirve para reemplazar sintaxis HTML por otra nueva
//textContent devuelve el contenido textual del nodo que lo llama