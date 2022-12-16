alert(table); // la tabla, tal como debería ser
table.remove();
// ¿Por qué aún está "aaa" en el documento?


//Resulta que esas 'aaa' se situan antes de la tabla si lo exploramos con inspeccionar en el navegador
//Esto es debido a que el navegador fuerza esto porque las convenciones dicen que la tabla solo debe contener elementos propios de ella
