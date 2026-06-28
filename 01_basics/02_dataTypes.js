"use strict"; // treat all JS code as newer version

// alert(3 + 1 + 2); // 6 // we are using node js not browser so alert will not work here. we can use console.log instead

//code readability should be high

let name = "John"; // string
let age = 25; // number
let isAdmin = true; // boolean

//number
//bigint 
let bigInt = 1234567890123456789012345678901234567890n; // bigint

//null => standalone value
let state = null; // null => empty value

//undefined => no value assigned
let city; // undefined => no value assigned

console.log(typeof name); // string
console.log(typeof null);
console.log(typeof undefined); // undefined

console.table([typeof name, typeof null, typeof undefined]); // table format