"use strict";
//Primero recojo la imagen principal
let principal = document.getElementById("principal").querySelector("img");
//Le seteo atributos para hacerla más grande
principal.setAttribute("width", "100");
principal.setAttribute("height", "100");

//Despues recojo cada imagen pequeña
let miniaturas = document.getElementById("miniaturas").querySelectorAll("img");
//Mediante un for le asigno un onclick a cada miniatura que cambiará el src de la imagen principal por el de la propia miniatura clicada
for (let i = 0; i < miniaturas.length; i++) {
    miniaturas[i].onclick = () => {
        principal.src = miniaturas[i].src;
    };

}
