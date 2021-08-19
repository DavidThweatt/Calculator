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
    const val = e.target.value;
    valueSelection(val);
});

multiply.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

subtract.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

add.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

clear.addEventListener('click', (e) => {
    clearALL();
});

negative.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

percent.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

decimal.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});

equal.addEventListener('click', (e) => {
    const val = e.target.value;
    valueSelection(val);
});




//FUNCTIONS

function clearALL() {
    screen.innerText = "";
};

function valueSelection(selected) {
    screen.innerText = selected;
};

function operate((operator)a, b) {

};

function addition(a, b) {
    const sum = a + b; 
};

function subtraction(a, b) {
    const difference = a - b;
};

function multiplication(a, b) {
 const product = a * a;
};

function division(a, b) {
    quotient = a / b; 
};

function percentage() {

};

function makeNegative() {

};