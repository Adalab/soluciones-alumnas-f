'use strict';

console.log(">>>");

//Get elements
const selectEl = document.querySelector('.selectCity');
const imgEl = document.querySelector('.image');
//query selector all nos devuel un array
const allImgEl = document.querySelectorAll('.image');
// console.log(selectEl, imgEl);
console.log(allImgEl);

//Declaramos las constantes de urls
const urlMadrid = 'https://www.abc.es/media/summum/2018/11/15/madrid-kcOF--620x349@abc.jpg';
const urlParis = 'https://wonderfulengineering.com/wp-content/uploads/2015/05/paris-wallpaper-2.jpeg';
const urlNewYork = 'https://media.timeout.com/images/103444978/image.jpg';


//Handler
function handlerSelect(){
    let citySelected = selectEl.value;
    console.log(citySelected);

    //Si escogemos una ciudad, todas las imágenes muestran la foto de esa ciudad (propiedad src)
    if (citySelected === "Madrid") {
        //Coge todas las imágenes, y cambia todos los src con la misma URL
        for (const image of allImgEl){
            image.setAttribute('src', urlMadrid);
        };
    } else if (citySelected === "Paris") {
        for (const image of allImgEl){
            image.setAttribute('src', urlParis);
        }
    } else {
        for (const image of allImgEl){
            image.setAttribute('src', urlNewYork);
        }
    }
}

//Listener select
selectEl.addEventListener('change', handlerSelect);
// console.dir(selectEl);
