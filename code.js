const btnEl = document.querySelectorAll("button");

const inputEl = document.getElementById("display");




for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const buttonValue = btnEl[i].textContent;
      
    if (buttonValue === "C") {
      clearResult();
    }else if(buttonValue === "off") {
  turnOffCalculator();
} else if (buttonValue === "%") {
  calculatePercentage();
} else if (buttonValue === "on") {
 turnOnCalculator();
}else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputEl.value = "";
}
function calculateResult() {
  inputEl.value = eval(inputEl.value);
}
function appendValue(buttonValue) {
  inputEl.value += buttonValue;
}
function turnOffCalculator() {
 
 
  inputEl.value = "";
}

function calculatePercentage() {
  const currentValue = parseFloat(inputEl.value);
  const percentageValue = currentValue * 0.01;
  inputEl.value = percentageValue.toString();
}

function turnOnCalculator() {
  inputEl.disabled = false;
}
