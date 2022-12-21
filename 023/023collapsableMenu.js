"use strict";

let lista = document.getElementById("lista");
//La lista tiene el atributo hidden en true por defecto
//Al click comprobaremos si hidden está true
//Si lo está, eliminamos el atributo
//Si no lo está, se lo seteamos
let desplegable = () => {
    if (lista.getAttribute("hidden") == "true") {
        lista.removeAttribute("hidden")
    }else{
        lista.setAttribute("hidden", "true");
    }
}