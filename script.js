// forces the script to be in strict mode which makes it easier to write "secure" JavaScript
"use strict";

// waiting for DOM to load
document.addEventListener("DOMContentLoaded", start);

const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const readOperator = document.querySelector("#operator");
const doRound = document.querySelector("#doround");

const resultList = document.querySelector("#results");
const resultAsTxt = document.createElement("li");

let result;

function start() {
  firstNumber.value;
  secondNumber.value;
  readOperator.value;
  doRound.checked;

  document.querySelector("#calculate").addEventListener("click", clickCalculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clickCalculate() {
  const resultAsTxt = document.createElement("li");
  let firstNumberAsNumber = parseFloat(firstNumber.value);
  let secondNumberAsNumber = parseFloat(secondNumber.value);
  if (readOperator.value == "add") {
    result = firstNumberAsNumber + secondNumberAsNumber;
  } else if (readOperator.value == "sub") {
    result = firstNumberAsNumber - secondNumberAsNumber;
  } else if (readOperator.value == "mul") {
    result = firstNumberAsNumber * secondNumberAsNumber;
  } else if (readOperator.value == "div") {
    result = firstNumberAsNumber / secondNumberAsNumber;
  }

  if (doRound.checked == true) {
    roundNumber(result);
  } else {
    firstNumber.value = result;
    resultAsTxt.textContent = result;
    resultList.appendChild(resultAsTxt);
    document.querySelector("#results").scrollTo(0, 1000000);

    secondNumber.value = "";
    start();
  }
}

function roundNumber(_result) {
  let roundValue = document.querySelector("#decimals").value;
  console.log(roundValue);

  if (roundValue === "0") {
    result = result.toFixed();
  } else if (roundValue == "1") {
    result = result.toFixed(1);
  } else if (roundValue == "2") {
    result = result.toFixed(2);
  } else if (roundValue == "3") {
    result = result.toFixed(3);
  } else if (roundValue == "4") {
    result = result.toFixed(4);
  } else if (roundValue == "5") {
    result = result.toFixed(5);
  } else if (roundValue == "6") {
    result = result.toFixed(6);
  } else if (roundValue == "7") {
    result = result.toFixed(7);
  } else if (roundValue == "8") {
    result = result.toFixed(8);
  }

  const resultAsTxt = document.createElement("li");
  firstNumber.value = result;
  resultAsTxt.textContent = result;
  resultList.appendChild(resultAsTxt);
  document.querySelector("#results").scrollTo(0, 1000000);

  secondNumber.value = "";
  start();
}

function clearResults() {
  // while the resultList still has a firstchild remove the child from resultList as long as it is the firstchild
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
}
