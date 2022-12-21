"use strict";
let divs = document.getElementsByTagName("div");

let divsArray = Array.from(divs);
let cruz = document.createElement("h1");


cruz.textContent = "X";


for (let i = 0; i < divs.length; i++) {
    divs[i] = cruz;

}