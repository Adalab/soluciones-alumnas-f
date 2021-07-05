'use strict';

const input = document.querySelectorAll ('input');
const body = document.querySelector('body');
const input1 = document.querySelector('#color_light');
const input2 = document.querySelector('#color_dark');

let savedColor = localStorage.getItem('color');

if (savedColor === null) {
    input1.setAttribute('checked', '');
    body.classList.remove('dark');
    body.classList.add('light');
    
} else if (savedColor === 'light') {
    input1.setAttribute('checked', '');
    body.classList.remove('dark');
    body.classList.add('light');
        
} else {
    input2.setAttribute('checked', '');
    body.classList.remove('light');
    body.classList.add('dark');    
} 

function changeColor(event) {
    const guilty = event.currentTarget.value;
    if (guilty === 'light') {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('color', guilty);
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('color', guilty);
    }
}

for (const item of input) {
    item.addEventListener('change', changeColor);
}