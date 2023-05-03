// Minimum

// Task 1

let age = +prompt("How old are you?", "");
let message;

if(age > 0 && age <= 11) {
    message = "It's a child";
} else if(12 <= age && age <= 17) {
    message = "It's a teenager";
} else if(18 <= age && age <= 59) {
    message = "It's an adult";
} else if(age >= 60) {
    message = "It's a pensioner";
} else if(Number.isNaN(age)) {
    message = "It's not a number";
} else {
    message = "I don't know what it is"
}

console.log(message);


// Task 2

let number = +prompt("Write a number", "");
let answer;

switch (number) {
    case 0:
        answer = ")"
        break;
    case 1:
        answer = "!"
        break;
    case 2:
        answer = "@"
        break;
    case 3:
        answer = "#"
        break;
    case 4:
        answer = "$"
        break;
    case 5:
        answer = "%"
        break;
    case 6:
        answer = "^"
        break;
    case 7:
        answer = "&"
        break;
    case 8:
        answer = "*"
        break;
    case 9:
        answer = "("
        break;
    default:
        answer = "It's not a number. Try again!"
        break;
};

alert(answer);


// Task 3

let a = +prompt("Write rhe first numer", "");
let b = +prompt("Write the second number", "");
let sum = 0;

if (a >= b) {
    do {
        sum += b;
        b++;
    } while (a >= b);
} else if (a <= b) {
    do {
        sum += a;
        a++;
    } while (a <= b);
} 

console.log(`Sum is ${sum}`);


// Task 4

let c = +prompt("Whrite the first number", "");
let d = +prompt("Write the second number", "");

let firstDeviders = [];
let secondDeviders = [];
let commonDeviders = [];

for(i = 0; i <= c; i++) {
    if(c % i === 0) {
        firstDeviders.push(i);
    }
}

for(j = 0; j <= d; j++) {
    if(d % j === 0) {
        secondDeviders.push(j);
    }
}

for (firstDevider of firstDeviders) {
    for(secondDevider of secondDeviders) {
        if (firstDevider === secondDevider) {
            commonDeviders.push(firstDevider);
        }
    }
}

console.log(commonDeviders.join( ));


// Task 5

let userNumber = +prompt("Write a number", "");
let devider; 

for(i = 0; i <= userNumber; i++) {
    if (userNumber % i === 0) {
        console.log(i);
    }
}


// Normal

// Task 1

let anyNumber = +prompt("Write a number", "");

let reverseNumber = +('' + anyNumber).split('').reverse().join('');

if (anyNumber === reverseNumber) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}


// Task 2

let purchasePrice = +prompt("Write purchase price", "");
let smallDiscount = 3;
let averageDiscount = 5;
let bigDiscount = 7;
let discountAmount;

if (purchasePrice < 200) {
    discountAmount = purchasePrice;
} else if (purchasePrice >= 200 && purchasePrice < 300) {
    discountAmount = (purchasePrice * (100 - smallDiscount)) / 100;
} else if (purchasePrice >= 300 && purchasePrice < 500) {
    discountAmount = (purchasePrice * (100 - averageDiscount)) / 100;
} else if (purchasePrice >= 500) {
    discountAmount = (purchasePrice * (100 - bigDiscount)) / 100;
}

console.log(`You should pay ${discountAmount}`);


// Task 3

let numbers = prompt("Write numbers", "").split(',');

let positiveNumbers = 0;
let negativeNumbers = 0;
let zeros = 0; 
let evenNumbers = 0;
let oddNumbers = 0;

for (number of numbers) {
    if (number > 0) {
        positiveNumbers += 1;
    } else if (number < 0) {
        negativeNumbers += 1; 
    } else {
        zeros += 1;
    }
    if (number % 2 === 0) {
        evenNumbers += 1;
    } else {
        oddNumbers += 1;
    }
}

console.log(`${positiveNumbers} positive numbers, 
${negativeNumbers} negative numbers, 
${zeros} zeros, 
${evenNumbers} even numbers, 
${oddNumbers} odd numbers`);


// Task 4

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let isContinue = true;

while (isContinue !== false){   
    for (i = 0; i < weekDays.length; i++){
        if (isContinue === true) {
            isContinue = confirm(`It's ${weekDays[i]}. Do you want to see the next day?`);
        }
    }
}

// Maximum

// Task 1

let numberArray = [];
for (i = 0; i <= 100; i++) {
    numberArray.push(i);
} 

let desiredNumber;
let left = 0;
let right = numberArray.length - 1;
let index;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentElement = numberArray[mid];
    desiredNumber = prompt(`Is your number >, < or = ${currentElement}?`);
    if (desiredNumber === '=') {
        index = currentElement;
        break;
    }
    else if (desiredNumber === '<') {
        right = mid - 1;
    }
    else if (desiredNumber === '>'){
        left = mid + 1;
    }
}

console.log(index);


// Task 2

let multipl;

for(i = 2; i <= 9; i++) {
    for(j = 1; j <= 10; j++) {
        multipl = i * j;
        console.log(`${i} * ${j} = ${multipl}`); 
    }
}


// Task 4

let date = prompt("Which date is today? Write in this format: dd/mm/yyyy", "").split('/');

let nextDate = [];
let isLongMonth = false; 
let isShortMonth = false;
let isFebruary = false;

switch (+date[1]) {
    case 4:
        isShortMonth = true;
        break;
    case 6:
        isShortMonth = true;
        break;
    case 9:
        isShortMonth = true;
        break;
    case 11:
        isShortMonth = true;
        break;
    case 2:
        isFebruary = true;
        break;
    default:
        isLongMonth = true;
        break;
}

if(+date[0] === 31 && isLongMonth) {
    nextDate[0] = 1;
    nextDate[1] = +date[1] + 1;
} else if (+date[0] === 30 && isShortMonth) {
    nextDate[0] = 1;
    nextDate[1] = +date[1] + 1;
} else if (+date[0] === 28 && isFebruary) {
    nextDate[0] = 1;
    nextDate[1] = +date[1] + 1;
} else {
    nextDate[0] = +date[0] + 1;
    nextDate[1] = +date[1];
}

if (+date[0] === 31 && +date[1] === 12) {
    nextDate[2] = +date[2] + 1;
} else {
    nextDate[2] = +date[2];
}

console.log(nextDate);
