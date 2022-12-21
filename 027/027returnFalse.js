"use strict";

function handler() {
    alert( "..." );
    return false;
  }

//Resulta que los atributos que empiezan por 'on' como 'onclick' crean un controlador 
//a partir del contenido de la función
//Esto evita que el return de nuestra función tenga efecto alguno
//La solucion sería añadir el return en nuestro atributo 'onclick'
//De esta manera el controlador retornaria el valor que queremos y la función funcionaría:
//Para ver el cambio ir al HTML
