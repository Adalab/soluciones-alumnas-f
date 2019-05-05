'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.numberOfSides * this.base;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
  }

  get getBase() {
    return super.base;
  }

  set setBase(newBase) {
    super.base = newBase;
    super.height = newBase;
  }
}

const square1 = new Square(7);

const originalArea = square1.area();
console.log('original area', originalArea);

square1.setBase = 47;
const newArea = square1.area();
console.log('new area', newArea);
