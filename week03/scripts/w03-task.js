/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

function multiply(factor1, factor2) {
    return (factor1 * factor2);
};


function multiplyNumbers() {

    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {

    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */

//document.getElementById("button").addEventListener("Get Total Due", displayDate);

//let subtotal = Number(document.querySelector('#subtotal').value);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').value = numbersArray;

numbersArray.innerHTML = numbersArray.join(', ') + '<br>' + array.innerHTML;

/* Output Odds Only Array */

let odds = numbersArray.filter(number => number % 2 == 1);

document.querySelector('#odds').textContent = odds;


/* Output Evens Only Array */

let evens = numbersArray.filter(number => number % 2 == 0);

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */

let multiplied = numbersArray.map(number => number * 2);

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

let multiplyBy2 = numbersArray.map(number => number * 2);

let sumOfMultiplied = multiplyBy2.reduce((sum, number) => sum + number);

document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;