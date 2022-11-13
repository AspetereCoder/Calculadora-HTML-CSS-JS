const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equal = document.querySelector(".operator-eq");
const clean = document.querySelector("#clean");
const del = document.querySelector("#del");

//  adding functionality to numbers

numbers.forEach(function (value) {
    value.addEventListener("click", () => display.value += value.innerHTML)
});

// adding functionality to operators 

operators.forEach(function (value) {
    value.addEventListener("click", function () {
        let lastChar = display.value[display.value.length - 1];
        
        switch (lastChar) {
            case '÷':
                return;
            case '×':
                return;
            case '+':
                return;
            case '-':
                return;
            default:
                display.value += value.innerHTML;
        }
    })
});

// adding functionality to equal operator

equal.addEventListener("click", function () {
    let formatedString = display.value.replace('×', '*');
    formatedString = formatedString.replace('÷', '/');
    display.value = eval(formatedString);
});

clean.addEventListener("click", function () {
    display.value = "";
});

del.addEventListener("click", function () {
    display.value = display.value.replace(display.value[display.value.length - 1], '');
});