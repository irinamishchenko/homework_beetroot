// Minimum

// Task 1

let a = 0.1;
let b = 0.2;
let sum = (a + b).toFixed(1);

console.log(sum);


// Task 2

let str = "1";
let number = 2; 

let result = +str + number;

console.log(result);

// Task 3

let gb = prompt("Write the amount of Gb", "");

let fileSize = 820; 

let fileAmount = Math.floor((gb * 1024) / fileSize);

console.log(fileAmount);


// Normal

// Task 1

let moneyAmount = prompt("How much money do you have?", "");
let chocolateCost = prompt("How much does chocolate cost?", "");

let chocolateAmount = Math.floor(moneyAmount / chocolateCost);
let charge = moneyAmount % chocolateCost;

alert(`You may buy ${chocolateAmount} chocolates and you will have ${charge} as charge!`);


// Task 2

let anyNumber = prompt("Write a number", "");
alert(('' + anyNumber).split('').reverse().join(''));

// Maximum

// Task 1

let userMoney = prompt("How much money do you want to deposit?", "");
let yearInterest = 5;
let month  = 2;
let accuredInterest = userMoney * (1 + yearInterest / 12) * month / 100;

console.log(accuredInterest);

// Task 2

console.log(2 && 0 && 3); // 0
console.log(2 || 0 || 3); // 2
console.log(2 && 0 || 3); // 3