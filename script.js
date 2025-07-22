const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const resultBtn = document.querySelector(".operator-eq");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");

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

// OPERATORS

// evaluates the display string
resultBtn.addEventListener("click", function () {
    let formatedString = display.value.replace('×', '*');
    formatedString = formatedString.replace('÷', '/');
    display.value = eval(formatedString);
});

// clears display
clearBtn.addEventListener("click", function () {
    display.value = "";
});

// removes the last digit
deleteBtn.addEventListener("click", function () {
    display.value = display.value.replace(display.value[display.value.length - 1], '');
});