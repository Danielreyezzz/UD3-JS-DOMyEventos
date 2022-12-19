"use strict";

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function creadorTexto(data) {
  let ul;
  let li = "";
  for (const i in data) {
    li += "<li>" + i + creadorTexto(data[i]) + "</li>";
  }
  ul = "<ul>" + li + "</ul>";

  return ul;
}

let createTree = (container, data) => {
  container.innerHTML = creadorTexto(data);
};

let container = document.getElementById("container");

createTree(container, data);
