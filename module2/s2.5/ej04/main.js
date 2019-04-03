'use strict';

const div = document.querySelector('.div');

// window.addEventListener('scroll', function () {console.log(window.scrollY)});

function arcoIris () {
  if ( window.scrollY >= 1000) {
    div.classList.add('amarillo');
    div.classList.remove('verde');
  } else {
    div.classList.remove('amarillo');
    div.classList.add('verde');
  }
}

window.addEventListener('scroll', arcoIris)