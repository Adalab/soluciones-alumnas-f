'use strict';
const ari = document.querySelector('img');
const image = 'http://placehold.it/300x300';
let avatar = 'http://www.fillmurray.com/300/300'; /*Si eliminamos esta url aparecerá la de placehold*/
ari.src = avatar || image;
