"use strict";

let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert( body.firstChild.data ); // ¿qué hay aquí?

//La respuesta es BODY
//Lo que estamos haciendo es reemplazar el contenido del body con un comentario
//El interior del comentario es el nombre de la etiqueta de body, es decir, BODY
//.tagName siempre devuelve el nombre de la etiqueta en MAYUSCULAS
//Por útimo mostramos con .data el primer hijo (y en este caso el único), que sería BODY
