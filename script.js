"use strict";

document.addEventListener("DOMContentLoaded", start);

let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let readOperator = document.querySelector("#operator");

const resultList = document.querySelector("#results");
const result = document.createElement("li");

function start() {
  firstNumber.value;
  secondNumber.value;
  readOperator.value;
  document.querySelector("#calculate").addEventListener("click", clickCalculate);
}

function clickCalculate() {
  const result = document.createElement("li");
  let firstNumberAsNumber = parseInt(firstNumber.value);
  let secondNumberAsNumber = parseInt(secondNumber.value);
  console.log(readOperator.value);
  if (readOperator.value == "add") {
    firstNumber.value = firstNumberAsNumber + secondNumberAsNumber;
    result.textContent = firstNumber.value;
    resultList.appendChild(result);
    document.querySelector("#results").scrollTo(0, 1000000);
  } else if (readOperator.value == "sub") {
    firstNumber.value = firstNumberAsNumber - secondNumberAsNumber;
    result.textContent = firstNumber.value;
    resultList.appendChild(result);
    document.querySelector("#results").scrollTo(0, 1000000);
  } else if (readOperator.value == "mul") {
    firstNumber.value = firstNumberAsNumber * secondNumberAsNumber;
    result.textContent = firstNumber.value;
    resultList.appendChild(result);
    document.querySelector("#results").scrollTo(0, 1000000);
  } else if (readOperator.value == "div") {
    firstNumber.value = firstNumberAsNumber / secondNumberAsNumber;
    result.textContent = firstNumber.value;
    resultList.appendChild(result);
    document.querySelector("#results").scrollTo(0, 1000000);
  }
  secondNumber.value = "";
  start();
}
