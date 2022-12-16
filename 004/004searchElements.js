"use strict";
//age-table
let ageTable = document.getElementById("age-table");

//todos los label dentro de la tabla
let labels = document.querySelectorAll("table label");

//el primer td de la tabla
let primerTd = document.querySelector("table td");

//form con el name search
let search = document.querySelector("form[name = 'search']");

//el primer input del formulario
let primerInput = search.querySelector("input");

//el ultimo input del formulario
let lastInput = search.querySelector("form > input");



lastInput.style.backgroundColor = "red";


