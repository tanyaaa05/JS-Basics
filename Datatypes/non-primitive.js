// Reference(non-primitive data types): Objects, Arrays, Functions, Dates, etc. are non-primitive data types in JavaScript. They are mutable and can hold multiple values or complex data structures.


// array is a collection of values, which can be of any type, including other arrays or objects. Arrays are ordered and indexed starting from 0.
const student = ["Alice", 20, "Male", "student"];
console.log("Student Array:", student);
console.log("Type of student:", typeof student);
console.table(student);


// object is a collection of key-value pairs, where keys are strings (or symbols) and values can be of any type, including other objects or arrays. Objects are unordered and accessed by keys.
let person = {
    name: "Bob",
    age:    30,
    gender  : "Male",
    occupation: "Developer"
};

console.log("Person Object:", person);

// Object is a constructor function, while {} is an object instance.
console.log("Type of Object:", typeof Object);
console.log("Type of person:", typeof person);
console.table(person);


let currentDate = new Date();
console.log("Current Date:", currentDate);
console.log("Type of currentDate:", typeof currentDate);


// function is a reusable block of code that performs a specific task. Functions can be defined using function declarations, function expressions, or arrow functions.
function greet(name) {
    return `Hello, ${name}!`; // Template literal is used to insert variables into a string easily using ${}.
}

console.log(greet("Alice"));
console.log("Type of greet:", typeof greet);


