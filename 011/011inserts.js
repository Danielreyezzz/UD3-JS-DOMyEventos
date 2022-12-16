"use strict"

let elem = document.getElementById("elem");
let text = "Textito sensual";

elem.append(document.createTextNode(text));
elem.innerHTML = text
elem.textContent = text

//En mi experiencia los 3 hacen lo mismo. No veo ninguna diferencia. El resultado es igual