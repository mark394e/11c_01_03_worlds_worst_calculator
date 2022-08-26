"use strict";

document.addEventListener("DOMContentLoaded", start);

let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let readOperator = document.querySelector("#operator");

function start() {
  firstNumber.value;
  secondNumber.value;
  readOperator.value;

  let firstNumberAsNumber = parseInt(firstNumber.value);
  let secondNumberAsNumber = parseInt(secondNumber.value);
  //   console.log(readOperator.value);
  document.querySelector("#calculate").addEventListener("click", clickCalculate);
}

function clickCalculate() {}
