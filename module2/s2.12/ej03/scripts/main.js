// Autocompletado
// Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
// Nombre
// Apellidos
// Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.


"use strict";

const arr =[
    {name:"Annia", surname:"Da Costa", phone:"9876709767"},
    {name:"Eva", surname:"Rodríguez", phone:"7546775446"},
    {name:"Ioanna", surname:"Daniela", phone:"9938373737"}
];
const inpNameEl = document.querySelector('#inpName');
const inpSurnameEl = document.querySelector('#inpSurname');
const inpTelEl = document.querySelector('#inpTel');

const selectEl = document.getElementById('sel');
console.log(arr[1].name);
const chargeData = () =>{

    for(let i=0; i<arr.length; i++){
        if (selectEl.value === arr[i].name){
            inpNameEl.value= arr[i].name;
            inpSurnameEl.value = arr[i].surname;
            inpTelEl.value=arr[i].phone;
        }

    }

}


selectEl.addEventListener('click',chargeData);