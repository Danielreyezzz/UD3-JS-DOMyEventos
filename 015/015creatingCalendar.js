"use strict";
function createCalendar(elem, year, month) {
  //Primero creamos la fecha(con month - 1 porque empezamos a contar desde 0)
  let fecha = new Date(year, month - 1);
  //Creamos la estructura del encabezado. Es importante no cerrar la tabla y mantener un tr abierto
  let tabla =
    "<table>" +
    "<tr>" +
    "<th>L</th>" +
    "<th>M</th>" +
    "<th>X</th>" +
    "<th>J</th>" +
    "<th>V</th>" +
    "<th>S</th>" +
    "<th>D</th>" +
    "</tr><tr>";

  //getDay te devuelve un entero correspondiente al día de la semana, siendo domingo 0 y lunes 1
  //Al no especificar semana, cogerá la primera
  //Mediante un for, incluimos 'td' vacíos hasta llegar a ese primer día
  for (let i = 0; i < fecha.getDay(); i++) {
    tabla += "<td></td>";
  }

  //Bucle while que nos pintará el calendario hasta que nos salgamos del mes correspondiente
  while (fecha.getMonth() == month - 1) {
    //getDate() devuelve el día del més en el que nos encontramos.
    //Empezamos desde el día 1 y se irá aumentando por cada vuelta del bucle
    tabla += "<td>" + fecha.getDate() + "</td>";

    //Si el resto del día de la semana entre 7 es igual a 6, la semana estará completa y debemos cerrar tr y abrir uno nuevo
    if (fecha.getDay() % 7 == 6) {
      tabla += "</tr><tr>";
    }

    //Aquí al final del bucle es cuando seteamos que la fecha aumenta 1 día
    fecha.setDate(fecha.getDate() + 1);
  }

  //Mismo procedimiento que cuando hemos dejado los huecos correspondientes al principio del calendario, pero al reves
  //Como hemos atualizado el día, getDay nos devolverá el último día del mes
  //Lo que haremos será establecer ese día como punto de partida, y pintaremos td vacios hasta el final de la semana (una semana tiene 7 días)
  if (fecha.getDay() != 0) {
    for (let i = fecha.getDay(); i < 7; i++) {
      tabla += "<td></td>";
    }
  }

  //Por último debemos cerrar el ultimo row y la tabla
  tabla += "</tr></table>";
  //Insertamos la tabla en nuestro elemento
  elem.innerHTML = tabla;
}

let div = document.getElementById("calendario");
createCalendar(div, 2022, 12);
