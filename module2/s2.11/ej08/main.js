'use strict';

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');
const savedSearch = JSON.parse(localStorage.getItem('search'));
console.log('guardado en caché:', savedSearch);

function myCall(searchUser) {
    fetch('https://swapi.co/api/people/?search=' + searchUser)
        .then(response => response.json())
        .then(data => {
            const arrResults = data.results;
            // console.log(arrResults);

            listEl.innerHTML = '';
            for(const result of arrResults) {
                const nameCharacter = result.name;
                const genderCharacter = result.gender;

                const liEl = '<li><p>Nombre: ' + nameCharacter + '</p><p>Género: ' + genderCharacter + '</p></li>';

                listEl.innerHTML += liEl;
            }
        })
        .catch(err => console.log(`Has hecho algo mal, revisa: ${err}`));
}

function handleButtonClick() {
    const inputSearch = inputEl.value;
    
    localStorage.setItem('search', JSON.stringify(inputSearch));
    myCall(inputSearch);
}

function reloadPage() {
    if(savedSearch){
        // si la caché tiene algo, usa ese dato para hacer la búsqueda en la api
        myCall(savedSearch);
        console.log('la chaché tiene algo');
    } else {
        console.log('la chaché no tiene nada');
    }
}
reloadPage();

buttonEl.addEventListener('click', handleButtonClick);