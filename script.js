const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal")
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const negative = document.getElementById("negative");
const percent = document.getElementById("percent");
const screen = document.getElementById("inner-screen");
const operator = document.getElementsByClassName("operator");

let currentNumber = '';
let currentNumber2 = '';
let currentOperator = '';




//EVENT LISTENERS

num1.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num2.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num3.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num4.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num5.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num6.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num7.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num8.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

num9.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

zero.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

divide.addEventListener('click', (e) => {
    const operator = e.target.value;
    screen.innerText = "";
    operatorSelected(operator);
});

multiply.addEventListener('click', (e) => {
    const operator = e.target.value;
    screen.innerText = "";
    operatorSelected(operator);
});

subtract.addEventListener('click', (e) => {
    const operator = e.target.value;
    screen.innerText = "";
    operatorSelected(operator);
});

add.addEventListener('click', (e) => {
    const operator = e.target.value;
    screen.innerText = "";
    operatorSelected(operator);
});

clear.addEventListener('click', (e) => {
    clearALL();
});

negative.addEventListener('click', () => {
    if (currentNumber2 === '') {
        makeNegative(currentNumber);
    } 
    if (currentNumber2 !== ''){
        makeNegative2(currentNumber2);
    };
});

percent.addEventListener('click', (e) => {
    if (currentNumber2 === '') {
        makePercentage(currentNumber);
    } 
    if (currentNumber2 !== ''){
        makePercentage(currentNumber2);
    };
});

decimal.addEventListener('click', (e) => {
    const val = e.target.value;
    if (currentNumber2 === '') {
        putDecimal(currentNumber);
    } 
    if (currentNumber2 !== ''){
        putDecimal(currentNumber2);
    };
});

equal.addEventListener('click', () => {
    operate(currentOperator, currentNumber, currentNumber2);
});

    



//FUNCTIONS

function clearALL() {
    screen.innerText = "";
    currentNumber = "";
};

function valueSelection(selected) {
    if (currentOperator !== "") {
        screen.innerText = currentNumber2 += selected;
    } else {
        screen.innerText = currentNumber += selected;
    };
};

function operatorSelected(choice) {
    currentOperator = choice;
};

function operate(currentOperator, currentNumber, currentNumber2) {
     if(currentOperator === 'add') {
        addition(currentNumber, currentNumber2);
     } else if (currentOperator === 'subtract') {
         subtraction(currentNumber, currentNumber2);
    } else if (currentOperator === 'multiply') {
         multiplication(currentNumber, currentNumber2);
    }else if (currentOperator === 'divide') {
         division(currentNumber, currentNumber2);
    };
};

function addition(a, b) {
    const answer = +a + +b; 
    screen.innerText = answer;
    currentNumber = answer;
    currentNumber2 = "";
    currentOperator = "";
};

function subtraction(a, b) {
    const answer = +a - +b;
    screen.innerText = answer;
    currentNumber = answer;
    currentNumber2 = "";
    currentOperator = "";
};

function multiplication(a, b) {
    const answer = +a * +b;
    screen.innerText = answer;
    currentNumber = answer;
    currentNumber2 = "";
    currentOperator = "";
};

function division(a, b) {
    const answer = +a / +b; 
    screen.innerText = answer;
    currentNumber = answer;
    currentNumber2 = "";
    currentOperator = "";
};

function makePercentage(num) {
    const percent = num / 100;
    screen.innerText = percent;
};


function makeNegative(num) {
  if (num > 0) {
        currentNumber = -Math.abs(num);
        screen.innerText = currentNumber;
  } else if (num < 0){
        currentNumber = Math.abs(num);
        screen.innerText = currentNumber;
  };
};

function makeNegative2(num) {
    if (num > 0) {
          currentNumber2 = -Math.abs(num);
          screen.innerText = currentNumber2;
    } else if (num < 0){
          currentNumber2 = Math.abs(num);
          screen.innerText = currentNumber2;
    };
  };

function putDecimal(num) {
    if (!num.includes('.')) {
        valueSelection('.');
    };
};


// getDisplayNumber(number) {
//     const floatNumber = parseFloat(number)
//     if (isNaN(floatNumber)) return ''
//     return floatNumber.toLocaleString('en')
// }