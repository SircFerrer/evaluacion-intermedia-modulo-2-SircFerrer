"use strict";
const button = document.querySelector(".js-button");
const textResult = document.querySelector(".js-result");
// let input = document.querySelector(".input");

const generateRandomNumber = function(max) {
  console.log("Generando número aleatorio");
  return Math.ceil(Math.random() * max);
};
const randomNumber = generateRandomNumber(100);
console.log(randomNumber);

const userChoice = function() {
  //   event.preventDefault();
  //   isTheNumber();
  let input = document.querySelector(".input");
  const inputValue = input.value;
  console.log(inputValue);

  if (randomNumber === inputValue) {
    textResult.innerHTML = "Has ganado campeona";
    console.log(textResult);
  } else {
    textResult.innerHTML = "Pista: Escribe el número y dale a Prueba";
  }
};
// const isTheNumber = function(inputValue) {
//   if (randomNumber === inputValue) {
//     textResult.innerHTML = "Has ganado campeona";
//   } else {
//     textResult.innerHTML = "Pista: Escribe el número y dale a Prueba";
//   }
// };

const handleButton = function(event) {
  event.preventDefault();
  userChoice();
};

button.addEventListener("click", handleButton);
