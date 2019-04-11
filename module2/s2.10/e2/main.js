'use strict';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

function random() {
  fetch('https://dog.ceo/api/breed/Chihuahua/images/random')
    .then(response => response.json())
    .then(result => {
      const img = `<img src="${result.message}" alt ="un perro">`;
    container.innerHTML += img;
      });
}
random();

btn.addEventListener('click', random);