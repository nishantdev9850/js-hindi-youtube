let score = 33;
let age = "33";
let runs = "77abc";

let value = null;

let value1 = undefined;

// console.log(typeof score); // number

// console.log(typeof age); // string

// console.log(typeof runs); //string

//converting string to number
let convertedAge = Number(age);
// console.log(typeof (convertedAge)); // number

let convertedRuns = Number(runs);
// console.log(typeof (convertedRuns)); // number
// console.log(convertedRuns); // NaN


// console.log(typeof value); // object
// console.log(Number(value)); // 0

// console.log(Number(value1)); // NaN

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn); // true


// 1=> true;
// 0=> false;

let someNumber = 0;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "0"
