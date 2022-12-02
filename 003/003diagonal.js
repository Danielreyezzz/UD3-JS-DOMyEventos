"use strict";

let td = document.querySelectorAll("td");
//seleccionamos todos los td y pintamos de rojo los multiplos de 6
for (let i = 0; i < td.length; i++) {
    if (i % 6 == 0) {
        td[i].style.backgroundColor = "red";
    }  
}
