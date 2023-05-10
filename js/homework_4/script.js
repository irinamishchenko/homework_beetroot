// Minimum

// Task 1

function sayHi() {
    alert("Hi!")
}

let sayBye = function() {
    alert("Bye!")
}

let sum = (a, b, c) => a + b + c;


// Task 2

function countArguments() {
    console.log(arguments.length);
}


// Task 3

function compareNumbers(a, b) {
    if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else if(a === b) {
        return 0;
    }
}


// Task 4

function calculateFactorial(a) {
    let factorial = 1;
    while(a) {
        factorial *= a--;
    }
    return factorial;
}


// Task 5

function makeNumber(a, b, c) {
    let number = '' + a + b + c;
    return number;    
}


// Task 6

function calculateArea(length, width=length) {
    let rectangleArea = length * width;
    return rectangleArea;
}


// Norm

// Task 1

function checkPerfectNumber(number) {
    let devisorsSum = 0;
    for(i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            devisorsSum += i;
        }
    }
    if (number === devisorsSum) {
        return true;
    } else {
        return false;
    }
}


// Task 2

function checkPerfectNumbers(min, max) {
    let perfectNumbers = [];
    for(min; min <= max; min++) {
        if(checkPerfectNumber(min)) {
            perfectNumbers.push(min);
        }
    }
    return perfectNumbers;
}
