'use strict';

let counter = 0;

const time = document.querySelector('.time');
const grapes = document.querySelector('.grapes');
const celebration = document.querySelector('.celebration');



const newYear = () => {
  if (counter < 12){
    counter++;
    time.innerHTML = counter;
    grapes.innerHTML += '<div class="grape"></div>';
  }
}

const fireworks = () => {
  celebration.innerHTML += '<div class="image"><p class="message">Happy New Year!</p></div>';
}

setInterval(newYear, 1000);
setTimeout(fireworks, 13000);