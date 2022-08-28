"use strict";

document.addEventListener("DOMContentLoaded", start);

const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const readOperator = document.querySelector("#operator");
const doRound = document.querySelector("#doround");

const resultList = document.querySelector("#results");
const result = document.createElement("li");

function start() {
  firstNumber.value;
  secondNumber.value;
  readOperator.value;
  doRound.checked;

  document.querySelector("#calculate").addEventListener("click", clickCalculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clickCalculate() {
  const result = document.createElement("li");
  let firstNumberAsNumber = parseFloat(firstNumber.value);
  let secondNumberAsNumber = parseFloat(secondNumber.value);
  if (readOperator.value == "add") {
    firstNumber.value = firstNumberAsNumber + secondNumberAsNumber;
  } else if (readOperator.value == "sub") {
    firstNumber.value = firstNumberAsNumber - secondNumberAsNumber;
  } else if (readOperator.value == "mul") {
    firstNumber.value = firstNumberAsNumber * secondNumberAsNumber;
  } else if (readOperator.value == "div") {
    firstNumber.value = firstNumberAsNumber / secondNumberAsNumber;
  }

  if (doRound.checked == true) {
    roundNumber();
  }

  result.textContent = firstNumber.value;
  let resultAsNumber = parseFloat(result.textContent);
  resultList.appendChild(result);
  document.querySelector("#results").scrollTo(0, 1000000);

  secondNumber.value = "";
  start();
}

function roundNumber() {
  let roundValue = document.querySelector("#decimals").value;
  console.log(roundValue);
}

function clearResults() {
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
}
