'use strict';

const claculateBox = (borderBox, width, padding, borderSize) => {
  if (borderBox) {
    return `El ancho del contenido es: ${width - padding * 2 - borderSize * 2}px y el ancho total de la caja es: ${width}px`;
  } else {
    return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width + padding * 2 + borderSize * 2}px`;
  }
};

const sizeBox = claculateBox(true, 200, 10, 5);
console.log(sizeBox);
const sizeContent = claculateBox(false, 300, 10, 5);
console.log(sizeContent);
