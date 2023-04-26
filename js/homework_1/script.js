// Minimum 

// Task 2

let name;
let userName;
let visitorName;
let fullName;

// Wrong names: 

// let имя;
// let let;
// let _name;
// let 2name;
// let 1; 


// Task 3

// Comments 

/* Comments
for many lines
*/

let surname; // Comment in a line


// Task 4

// let kebab-case;
// let snake_case;
// let CamelCase;
// let lowerCamelCase;

// Norm

// Task 1

let user = prompt('What is your name?', '');
alert(`Hello, ${user}!`);


// Task 2

let birthYear = prompt('In what year were you born', '');

const CURRENT_YEAR = 2023;
let age = CURRENT_YEAR - birthYear;

alert(`You are ${age} years old!`);


// Task 3

let sideLength = prompt('Write a square side length', '');

let squarePerimeter = sideLength * 4;
alert(`The perimeter of the square is ${squarePerimeter}`);

// Maximum

// Task 1

let circleRadius = prompt('Write a circle radius', '');

const PI = 3.14;
let circleArea = PI * Math.pow(circleRadius, 2);

alert(`Circle area is ${circleArea}`);


// Task 2

let distance = prompt('Write a distance in km', '');
let time = prompt('Write time in hours', '');

let speed = distance / time;

alert(`You should move with speed ${speed} km per hour`);


// Task 3

let dollars = prompt('Write the amount of dollars', '');

const EXCHANGE_RATE = 0.8993;
let euro = dollars * EXCHANGE_RATE;

alert(`You will get ${euro} euros`);
