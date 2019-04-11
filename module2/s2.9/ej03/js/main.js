"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Solo devuelve los números pares
const bestLostNomber = arr => {
  const result = [];
  for (const item of arr) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }
  return result;
};
const evenNumbers = bestLostNomber(lostNumbers);
console.log(evenNumbers);

// Sólo devuelve los multiplos de 3
const bestLostNomber2 = arr => {
  const result = [];
  for (const item of arr) {
    if (item % 3 === 0) {
      result.push(item);
    }
  }
  return result;
};
const multThreeNumbers = bestLostNomber2(lostNumbers);
console.log(multThreeNumbers);

// Concatenación numeros pares y luego múltiplos
const result = evenNumbers.concat(multThreeNumbers);
console.log(result);
