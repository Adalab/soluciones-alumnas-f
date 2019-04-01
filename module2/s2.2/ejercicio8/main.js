'use strict';

const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';
const firstDog = `${firstDogName}<br><img src="${firstDogImage}">`

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';
const secondDog = `${secondDogName}<br><img src="${secondDogImage}">`

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';
const thirdDog = `${thirdDogName}<br><img src="${thirdDogImage}">`

const dogs = document.querySelector('.dogs');
dogs.innerHTML = `<ul>
                    <li>${firstDog}</li>
                    <li>${secondDog}</li>
                    <li>${thirdDog}</li>
                 </ul>`;