"use strict";
//Creo el elemento 'ul' y lo inserto con .append en el body
let ul = document.createElement("ul");
document.body.append(ul);

//Mediante un while creo un bucle que seguirá pidiendo entradas al usuario hasta que la entrada esté facía o devuelva false
while (true) {
  let texto = prompt("Ingresa una entrada a la lista: ");
  if (texto == "") {
    break;
  }
  //inserto el texto dentro de ul de la misma manera que inserté el ul dentro de body
  let li = document.createElement("li");
  li.textContent = texto;
  ul.append(li);
}
