"use strict";
//Creo la función pasandole los valores por defecto que dice el ejercicio
let showNotification = (top = 10, right = 10, html = "HELLO") => {
  //Creo el div correspondiente
  let notificacion = document.createElement("div");
  //Añado las dos clases css dadas en el ejercicio
  notificacion.classList.add("notification");
  notificacion.classList.add("welcome");
  //Le doy los valores top y right(me chirría bastante, pero es lo que creo que el ejercicio me pide)   
  notificacion.style.top = top + "px";
  notificacion.style.right = right + "px";
  //Añado el texto al div  
  notificacion.textContent = html;
  //Introduzco el div en el body  
  document.body.append(notificacion);
  //Establezco una cuenta atrás. El div se borrará pasado 1.5 segundos  
  setTimeout(() => notificacion.remove(), 1500);
};

showNotification(200, 200, "HELLO MUDERFOKAS");
