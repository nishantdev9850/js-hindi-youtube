// array

const myArray = [1, 2, 3, 4, 5];

// console.log(myArray);

// console.log(myArray[0]); // 1

myArray.push(6); // add 6 to the end of the array
// console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop(); // remove the last element of the array
console.log(myArray); // [1, 2, 3, 4, 5]

console.log(myArray.splice(2, 1)); // remove 1 element at index 2