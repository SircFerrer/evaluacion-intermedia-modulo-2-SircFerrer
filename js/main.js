"use strict";
const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const textResult = document.querySelector(".js-result");
const number = document.querySelector(".js.number");
let counter = 0;

function handleButton(event) {
  event.preventDefault();
  compareNumbers();
  countChoices();
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);

const compareNumbers = function() {
  const inputChoice = parseInt(input.value);
  console.log(inputChoice);

  if (inputChoice < 1 || inputChoice > 100) {
    textResult.innerHTML = "El número debe estar entre 1 y 100.";
    console.log("el número debe estar entre 1 y 100");
  } else if (inputChoice === randomNumber) {
    textResult.innerHTML = "Has ganado";
    console.log("Has ganado");
  } else if (inputChoice > randomNumber) {
    textResult.innerHTML = "Demasiado alto";
    console.log("Demasiado alto");
  } else if (inputChoice < randomNumber) {
    textResult.innerHTML = "Demasiado bajo";
    console.log("Demasiado bajo");
  }
};
const countChoices = function() {
  counter += 1;
  number.innerHTML = counter;
}; // esta función no me funciona preguntar porque.

button.addEventListener("click", handleButton);
