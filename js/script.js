'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button

const numbersArray = [];
const operatorsArray = [];
const inputArray = [];

let resultDisplayed = false; // flag to keep an eye on what output is displayed

// place numbers on screen and in array on click
numbers.forEach(function(number) {
  number.addEventListener('click', function(event) {
    event.preventDefault();
    numbersArray.push(number);
    input.innerHTML += number.innerHTML;
  });
});

// place operators in screen and in array on click
operators.forEach(function(operator) {
  operator.addEventListener('click', function(event) {
    event.preventDefault();
    operatorsArray.push(operator);
    input.innerHTML += operator.innerHTML;
  });
});
