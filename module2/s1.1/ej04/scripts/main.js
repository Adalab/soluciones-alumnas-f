'use strict';

const theWinnerIsElement = document.querySelector(".the-winner-is");
const winnerElement1 = document.querySelector(".item1");
const winnerElement2 = document.querySelector(".item2");

// Esto es para que salga winner1:
theWinnerIsElement.innerHTML = winnerElement1.innerHTML;

// Esto es para que salga winner2:
theWinnerIsElement.innerHTML = winnerElement2.innerHTML;