// singelton
//object literals

//Object.create

const jsUser = {
    name : "Nishant",
    age : 20,
    location : "India",
    email : "nishant.@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

jsUser.email = "xyz@gmail.com";
// Object.freeze(jsUser); // freeze the object so that it cannot be modified

jsUser.email = "abc@gmail.com";
// console.log(jsUser.email); // it will still print

jsUser.greeting = function(){
    console.log(`Hello ${this.name} welcome to the website`);
}

// console.log(jsUser.greeting());

// const tinderUser = new Object(); singelton
const tinderUser = {} // object literal

tinderUser.id = "123abc";
tinderUser.name = "Nishant";
// console.log(tinderUser);

const regularUser = {
    email : "nishant.gmail.com",
    fullname: {
        firstName : "Nishant",
        lastName : "Kumar",
    }
}

// console.log(regularUser.fullname.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

const obj3 = Object.assign({}, obj1, obj2); // merging two objects
// console.log(obj3);

const obj4 = {...obj1, ...obj2}; // merging two objects using spread operator
// console.log(obj4);


// console.log(Object.keys(obj4)); // returns the keys of the object
// console.log(Object.values(obj4)); // returns the values of the object

// console.log(Object.entries(obj4));


//Object destructuring

const course = {
    name : "JavaScript",
    price : 299,
    courseInstructor : "Nishant",
}

//course.courseInstructor = "Nishant Kumar"; // changing the value of the property

const {courseInstructor : instructor} = course; // destructuring the object

console.log(instructor); // it will print the value of the property courseInstructor

// {
//     "name" : "Nishant",
//     "age" :"20",
//     "location" : "India",
// }