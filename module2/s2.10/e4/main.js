'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const repo = document.querySelector('.repo');

function search() {
    fetch(`https://api.github.com/orgs/${input.value}`)
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        const reposit = data.repos_url;
        return fetch(`${reposit}`);
    })
    .then (function(secondaryResponse) {
        return secondaryResponse.json();
    })
    .then (function(secondaryData) {
        for (const item of secondaryData) {
            repo.innerHTML += `<li>${item.name}</li>`;
        }
    })
}

btn.addEventListener('click', search);
