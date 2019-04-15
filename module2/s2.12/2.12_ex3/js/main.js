'use strict';
const select = document.querySelector('.selectInfo');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputPhone = document.querySelector('#phone');

const inputInfo = [
    {
        name: 'Alejandra',
        surname: 'Pérez',
        phone: 65895632
    },
    {
        name: 'Mertina',
        surname: 'Fernández',
        phone: 69336952
    },
    {
        name: 'Teresa',
        surname: 'Dominguez',
        phone: 695632598
    }
];

function createUser(arr) {
    for(let i= 0; i<arr.length; i++){
        const newItem = document.createElement('option');
        newItem.value = i;
        const newContent = document.createTextNode(arr[i].name);
        newItem.appendChild(newContent);
        select.appendChild(newItem);
    }
}

function chooseUser() {
    const item = inputInfo[parseInt(select.value)]
    inputName.value = item.name;
    inputSurname.value = item.surname;
    inputPhone.value = item.phone;

}

createUser(inputInfo);
select.addEventListener('change',chooseUser);
