'use strict';

// exe 3
function calculateIva(price) {
  const iva = price * 0.21;
  const total = iva + price;
  // return `Precio sin IVA: ${price}, IVA: ${iva} y Total: ${total}`;
  const obj = {
    iva: iva,
    price: price,
    total: total
  };
  return obj;
}

const objResult = calculateIva(20);
console.log('obj', objResult);
console.log(`Precio sin IVA: ${objResult.price}, IVA: ${objResult.iva} y Total: ${objResult.total}`);
