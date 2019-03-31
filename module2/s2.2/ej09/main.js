'use strict';

const name = 'Megan Myfanwy Edwards';

//Quitar espacios entre el nombre
const nameWithoutSpaces = name.replace(/ /g, "");

const lettersName = nameWithoutSpaces.length;

//Contando con los espacios
// const lettersName = name.length;

console.log(lettersName);

//Print
const printScreen = document.querySelector('.print');

printScreen.innerHTML = `El nombre de mi compañera es ${name}, y está compuesto por ${lettersName} caracteres.`;
