// forces the script to be in strict mode which makes it easier to write "secure" JavaScript
"use strict";

// waiting for DOM to load
document.addEventListener("DOMContentLoaded", start);

// defining constants
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const readOperator = document.querySelector("#operator");
const doRound = document.querySelector("#doround");

const resultList = document.querySelector("#results");
const resultAsTxt = document.createElement("li");

let result;

function start() {
  // reading the value of first and second input-field as well as opreator and "round to"-checkbox
  firstNumber.value;
  secondNumber.value;
  readOperator.value;
  doRound.checked;

  document.querySelector("#calculate").addEventListener("click", clickCalculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clickCalculate() {
  // creates a li element
  const resultAsTxt = document.createElement("li");
  //   converts the value in the first and second input-field to numbers including decimals
  let firstNumberAsNumber = parseFloat(firstNumber.value);
  let secondNumberAsNumber = parseFloat(secondNumber.value);

  //   does a calculation depending on the operator chosen
  if (readOperator.value == "add") {
    result = firstNumberAsNumber + secondNumberAsNumber;
  } else if (readOperator.value == "sub") {
    result = firstNumberAsNumber - secondNumberAsNumber;
  } else if (readOperator.value == "mul") {
    result = firstNumberAsNumber * secondNumberAsNumber;
  } else if (readOperator.value == "div") {
    result = firstNumberAsNumber / secondNumberAsNumber;
  }

  // if the "round to"-checkbox is checked then run the roundNumber function
  // otherwise set the value and textContent of the first input-field and the textContent of the li element created to the value of "result"
  if (doRound.checked == true) {
    roundNumber(result);
  } else {
    // display the result in the first input-field and in the li-element
    firstNumber.value = result;
    resultAsTxt.textContent = result;
    // append the result to the resultList and scroll down
    resultList.appendChild(resultAsTxt);
    document.querySelector("#results").scrollTo(0, 1000000);

    // reset the value of the second input-field
    secondNumber.value = "";

    // restart the script
    start();
  }
}

function roundNumber(_result) {
  // defines the value of the decimals in the "round to"-dropdown
  let roundValue = document.querySelector("#decimals").value;

  //   show the result with x amount of decimals depending on which "round to"-number you chose in the dropdown
  if (roundValue === "0") {
    result = result.toFixed();
  } else if (roundValue == "1") {
    result = result.toFixed(1);
  } else if (roundValue == "2") {
    result = result.toFixed(2);
  } else if (roundValue == "3") {
    result = result.toFixed(3); // if the roundValue is 3 show the result with 3 decimals
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

  //   create a li element
  const resultAsTxt = document.createElement("li");

  // display the result in the first input-field and in the li-element
  firstNumber.value = result;
  resultAsTxt.textContent = result;

  // append the result to the resultList and scroll down
  resultList.appendChild(resultAsTxt);
  document.querySelector("#results").scrollTo(0, 1000000);

  // reset the value of the second input-field
  secondNumber.value = "";

  // restart the script
  start();
}

function clearResults() {
  // while the resultList still has a firstchild remove the child from resultList as long as it is the firstchild
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
}
