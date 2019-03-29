'use strict';

const edad = prompt('¿Cuántos años tienes?');
const horasVividas = (365 * 24) * parseInt(edad);
document.querySelector('.result').innerHTML = horasVividas;