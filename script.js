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
const backspace = document.getElementById("backspace");
const screen = document.getElementById("inner-screen");
const operator = document.getElementsByClassName("operator");

let currentNumber = '';
let currentNumber2 = '';
let currentOperator = '';




//EVENT LISTENERS

document.addEventListener('keydown', (e) => {
    
    if (e.key === '1') {
        valueSelection(e.key);
    };

    if (e.key === '2') {
        valueSelection(e.key);
    };

    if (e.key === '3') {
        valueSelection(e.key);
    };

    if (e.key === '4') {
        valueSelection(e.key);
    };

    if (e.key === '5') {
        valueSelection(e.key);
    };

    if (e.key === '6') {
        valueSelection(e.key);
    };

    if (e.key === '7') {
        valueSelection(e.key);
    };

    if (e.key === '8') {
        valueSelection(e.key);
    };

    if (e.key === '9') {
        valueSelection(e.key);
    };

    if (e.key === '0') {
        valueSelection(e.key);
    };

    
    
    if (e.key === '-') {
        operatorSelected('subtract');
        screen.innerText = "";
    };

    if (e.shiftKey && e.key === '+') {
        operatorSelected('add');
        screen.innerText = "";
    };

    if (e.key === '/') {
        operatorSelected('divide');
        screen.innerText = "";
    };

    if (e.shiftKey && e.key === '*') {
        operatorSelected('multiply');
        screen.innerText = "";
    };

    if (e.key === '=') {
        operate(currentOperator, currentNumber, currentNumber2);
    };



    if (e.key === '.') {
        if (currentNumber2 === '') {
            putDecimal(currentNumber);
        }; 
        if (currentNumber2 !== ''){
            putDecimal(currentNumber2);
        };
    };

    if (e.key === 'Backspace') {
        if (currentNumber2 === '') {
            removeLast(currentNumber);
        }; 
        if (currentNumber2 !== ''){
            removeLast1(currentNumber2);
        };
    };
    
    if (e.shiftKey && e.key === '_') {
        if (currentNumber2 === '') {
            makeNegative(currentNumber);
        } 
        if (currentNumber2 !== ''){
            makeNegative2(currentNumber2);
        };
    };


    
    if (e.shiftKey && e.key === '|') {
        clearALL();
    };
    
});

num1.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});11

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

backspace.addEventListener('click', (e) => {
    if (currentNumber2 === '') {
        removeLast(currentNumber);
    } 
    if (currentNumber2 !== ''){
        removeLast(currentNumber2);
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
    currentNumber2 = "";
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

function removeLast(numb) {
    num = numb.slice(0, -1);
    screen.innerText = num;
    currentNumber = num
};

function removeLast1(numb) {
    num = numb.slice(0, -1);
    screen.innerText = num;
    currentNumber2 = num;
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

