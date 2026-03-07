'use strict';
const ERROR_EMPTY_NUMBER = 'Проверте числа! Одно из них не было введено!';
const DEFAULT_PANEL_VALUE = 'Результат вычислений.';
const DEFAULT = 'DEFAULT';

const panel = document.querySelector('.panel');
const firstInput = document.querySelector('#fist-number');
const secondInput = document.querySelector('#second-number');

const additionBtn = document.querySelector('#addition');
const divisionBtn = document.querySelector('#division');
const subtractionBtn = document.querySelector('#subtraction');
const multiplicationBtn = document.querySelector('#multiplication');
const resetBtn = document.querySelector('#reset');

const addition = (first, second) => first + second;
const division = (first, second) => {
    if (second === 0) {
        return 'На ноль делить нельзя, попробуй еще раз!';
    } else {
        return first / second;
    }
};
const subtraction = (first, second) => first - second;
const multiplication = (first, second) => first * second;


function performArithmeticOperation(firstInputElement, secondInputElement, operation) {
    if (firstInputElement === null || secondInputElement === null || typeof operation !== 'function') {
        return null;
    }
    
    const firstNumText = firstInputElement.value;
    const secondNumText = secondInputElement.value;
    
    if (!firstNumText || !secondNumText) {
        return ERROR_EMPTY_NUMBER;
    }

    const firstNum = Number(firstNumText);
    const secondNum = Number(secondNumText);

    return operation(firstNum, secondNum);
}

function reflectResultInHTMLElement(result, panelElement, firstInputElement, secondInputElement) {
    if (panelElement === null || firstInputElement === null || secondInputElement === null) {
        return;
    }
    if (result === null) {
        panelElement.innerText = 'Результат не был получен!';
        firstInputElement.value = '';
        secondInputElement.value = '';
        return;
    }
    if (result === ERROR_EMPTY_NUMBER) {
        panelElement.innerText = result;
        return;
    }
    if (result === DEFAULT) {
        panelElement.innerText = DEFAULT_PANEL_VALUE;
        firstInputElement.value = '';
        secondInputElement.value = '';
        return;
    }
    panelElement.innerText = result;
    firstInputElement.value = '';
    secondInputElement.value = '';
}

resetBtn.addEventListener('click', () => {
    reflectResultInHTMLElement(DEFAULT, panel, firstInput, secondInput);
});

additionBtn.addEventListener('click', () => {
    const result = performArithmeticOperation(firstInput, secondInput, addition);
    reflectResultInHTMLElement(result, panel, firstInput, secondInput);
});

divisionBtn.addEventListener('click', () => {
    const result = performArithmeticOperation(firstInput, secondInput, division);
    reflectResultInHTMLElement(result, panel, firstInput, secondInput);
});

subtractionBtn.addEventListener('click', () => {
    const result = performArithmeticOperation(firstInput, secondInput, subtraction);
    reflectResultInHTMLElement(result, panel, firstInput, secondInput);
});

multiplicationBtn.addEventListener('click', () => {
    const result = performArithmeticOperation(firstInput, secondInput, multiplication);
    reflectResultInHTMLElement(result, panel, firstInput, secondInput);
});