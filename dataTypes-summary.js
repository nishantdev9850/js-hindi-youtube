// Primitive 
// 7
// String number Boolean null undefined Symbol BigInt

// Reference (Non-Primitive)
// Arrays Objects Functions

// Stack (Primitive) Heap (Reference)

let myName = "Nishant";
let anotherName =  myName;

anotherName = "Nishant Kumar";

console.log(myName);
console.log(anotherName);

let userOne = {
    name: "Nishant",
    age : 24
};

let userTwo = userOne;

console.log(userOne.name);
console.log(userTwo.name);

userTwo.age = 25;

console.log(userOne.age);
console.log(userTwo.age);