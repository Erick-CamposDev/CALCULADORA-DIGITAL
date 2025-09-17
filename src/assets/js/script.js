const display = document.getElementById("display");

let currentValue = "";

function appendNumber(value) {
  display.innerHTML += `<p>${value}</p>`;
  currentValue += value;
}

function appendOperator(operator) {
  if (currentValue === "" && operator !== "-") {
    return;
  }
  const lastValue = currentValue.slice(-1);

  if ("+-÷x,".includes(lastValue)) {
    return;
  }
  display.innerHTML += `<p>${operator}</p>`;
  currentValue += operator;
}

function removeLastValue() {
  const values = display.querySelectorAll("p");
  if (values.length > 0) {
    let lastNumber = values.length - 1;
    values[lastNumber].remove();
    currentValue = currentValue.slice(0, -1);
  }
}

function calculateResult() {}

function cleanDisplay() {
  display.innerHTML = "";
  currentValue = "";
}
