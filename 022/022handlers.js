let button = document.getElementById("boton");

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//El botón mostrará tanto el 1 como el 2
/*Aunque intentemos eliminemos el handler, no le estamos pasando la función exacta 
que le pasamos cuando añadimos el handler, aunque en apariencia sean iguales.
Lo solucionaríamos creando una función y pasandosela por parametro al add y al remove*/