"use strict";

let div = document.getElementById("div");
let textarea;

div.onclick = () => {
  textarea = document.createElement("textarea");
  //Une vez tengamos nuestro div y nuestro textarea, reemplazaremos el primero por el segundo
  //Recordamos que estamos en un onclick
  div.replaceWith(textarea);
  //Debemos establecer el foco en el textarea desde el principio o nos dará problemas
  textarea.focus();
  //Ahora guardamos el div dentro del valor de textarea. Esto nos permitirá recoger los datos y escribir sobre ellos
  textarea.value = div.innerHTML;
  //Ahora debemos establecer que debe pasar cuando el textarea pierda el foco
  textarea.onblur = () => {
    //Lo primero es pasarle los datos escritos al div
    div.innerHTML = textarea.value;
    //Por último volvemos a reemplazar el valor
    textarea.replaceWith(div);
  };
  //con un onkeydown y el objeto event, controlamos que si se pulsa enter, textarea pierda el foco. Ya hemos visto arriba lo que pasa cuando textarea pierde el foco
  textarea.onkeydown = (event) => {
    if (event.key == "Enter") {
      textarea.blur();
    }
  };
};
