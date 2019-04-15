'use strict';
const select = document.querySelector('.choose');
const images = document.querySelector('.images');

const madrid = [
    'https://uatae.org/wp-content/uploads/2018/02/madrid.jpg',
    'http://www.tmagazine.es/app/uploads/2017/11/Skyline_madrid_01.png',
    'https://www.donquijote.org/donquijote-production-files/styles/instagram_270x270_/cloudstorage/uploads/plaza-mayor_2.jpg'
];

const paris = [
    'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',    
    'https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];


const newYork = [
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
    'https://ihg.scene7.com/is/image/ihg/crowne-plaza-new-york-5693607104-4x3',
    'https://media.routard.com/image/28/4/new-york-aerial.1515284.w740.jpg'
 ];

const createImage = city => {
    images.innerHTML = '';
    for (const image of city) {
        const newImage = document.createElement('img');
        newImage.src = image;
        newImage.style = 'width: 500px';
        images.appendChild(newImage);
    }
};


const cityPic = () => {
    if (select.value === 'madrid') {
       createImage(madrid);
    }
    else if (select.value === 'paris') {
        createImage(paris);
    }
    else if (select.value === 'newYork'){
        createImage(newYork);
    }
  
}
cityPic(madrid);
select.addEventListener('change',cityPic);