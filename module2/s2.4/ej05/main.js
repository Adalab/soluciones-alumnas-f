'use strict';

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl('.btn');
console.log(btnEl);