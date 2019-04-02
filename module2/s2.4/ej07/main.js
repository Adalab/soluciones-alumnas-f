'use strict';

// Función para comprobar si un número es par o impar
function even(a) {
    return a % 2 === 0 ? true : false;
}

//Función para acceder a un elemento del HTML
function getEl(selector) {

    const element1 = document.querySelector(selector);

    if (element1) {
        console.log(element1);
        return element1;
    }
    
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}.`);
    return null;
}

//Llamar a la función getEl
const paragraph = getEl('.text');

//Convertir el valor a un número
const number = parseInt(paragraph.innerHTML);

//Llamar a la función even
const result = even(number);

//Escribir en la consola si es un número par o impar
if (result === true) {
    console.log(`Este número es PAR: ${number}.`);
} else {
    console.log(`Este número es IMPAR: ${number}.`);
}