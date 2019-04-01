
'use strict';

const Element = document.querySelector('body');
const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

Element.innerHTML = `<div> <img src="${firstDogImage}">
    <p> ${firstDogName}</p>
    </div>
    <div> <img src="${secondDogImage}">
    <p> ${secondDogName} </p>
    </div>
    <div> <img src="${thirdDogImage}">
    <p> ${thirdDogName}</p>
    </div>
    `;