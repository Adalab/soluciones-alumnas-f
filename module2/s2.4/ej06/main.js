'use strict';

const nameSelector = '.bt';

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl(nameSelector);


 if (btnEl===null) {
     console.log(`No existe ningún elemento con clase, id o tag llamado ${nameSelector}`);
 } else { 
     console.log(btnEl);
 }