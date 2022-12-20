"use strict";

//esta función recoge todas las variables y escribe en su respectivo sitio la hora, min y sec actual
let reloj = () => {
    let h = document.getElementById("h");
    let m = document.getElementById("m");
    let s = document.getElementById("s");
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    h.innerHTML = horas;
    m.innerHTML = minutos;
    s.innerHTML = segundos;
}

let intervalo;
//Cada segundo se llamará a la función reloj
let start = () => intervalo = setInterval(reloj, 1000);
//Limpiamos el intervalo. El reloj se detendrá
let stop = () => clearInterval(intervalo);