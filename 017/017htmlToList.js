"use strict"

let one = document.getElementById("one");
let li = "<li>2</li><li>3</li>";

//Con insertAdacentHTML en la posición afterend del primer li, podemos insertar nuestros elementos sin sobreescribir nada.
one.insertAdjacentHTML("afterend", li);