"use strict";
//Sinceramente no tengo ni la más remota idea de como hacer esto
//No creo que pueda hacerlo sin mirar de otros lados
//En su lugar he hecho un codiguito que te pinta HOLA cuando presionas 'Q'
let runOnKeys = (event) => {
    let codigo = event.code;
    if(codigo == "KeyQ"){
     alert("HOLA");
    } 
}
 

