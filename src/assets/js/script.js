const display = document.getElementById("display");

let currentValue = "";

function appendNumber(value) {
  display.innerText += `${value}`;
  currentValue += value;
}

function appendOperator(operator) {
  if (currentValue === "" && operator === "-") {
    display.innerText += `${operator}`;
    currentValue += operator;
  }

  if (currentValue === "") {
    return;
  }

  const lastValue = currentValue.slice(-1);

  if ("+-÷x,".includes(lastValue)) {
    return;
  }
  display.innerText += `${operator}`;
  currentValue += operator;
}

function appendComma(comma) {
  if (currentValue === "" && comma === ",") {
    return;
  }

  const lastValue = currentValue.slice(-1);

  if (comma === "," && lastValue === ",") {
    return;
  }

  if (comma === "," && currentValue.includes(",")) {
    return;
  }

  display.innerText += `${comma}`;
  currentValue += comma;
}

function removeLastValue() {
  currentValue = currentValue.slice(0, -1);
  display.innerText = currentValue;
}

function calculateResult() {
  try {
    let expression = currentValue.replace(",", ".");

    const result = eval(expression);
    currentValue = String(result);
    display.innerText = currentValue.replace(/\./g, ",");
  } catch {
    alert("ERRO!!!");
    display.innerText = "ERRO!!!";
  }
}

function cleanDisplay() {
  display.innerHTML = "";
  currentValue = "";
}
