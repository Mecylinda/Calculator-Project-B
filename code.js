const btnEl = document.querySelectorAll("button.function");

const inputEl = document.getElementById("display");
const turnOnBtn = document.getElementById("turnOn");
const turnOffBtn = document.getElementById("turnOff");

turnOnBtn.addEventListener("click", function(){
 turnOnCalculator(); 
});
turnOffBtn.addEventListener("click", function(){
 turnOffCalculator(); 
});


for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const buttonValue = btnEl[i].textContent;
      
    if (buttonValue === "C") {
      clearResult();

} else if (buttonValue === "%") {
  calculatePercentage();

}else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function toggleDisabled(value) {
  btnEl.forEach((el) => {
    el.disabled = value;
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
   toggleDisabled(true);
}

function calculatePercentage() {
  const currentValue = parseFloat(inputEl.value);
  const percentageValue = currentValue * 0.01;
  inputEl.value = percentageValue.toString();
}

function turnOnCalculator() {
  
    toggleDisabled(false);
}
