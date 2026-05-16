// Primitive Stored by Value
let a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);


// Non-Primitive Stored by Reference
let obj1 = {
    name: "Tanya",
    age: 23
};

let obj2 = obj1;
obj2.name = "Alice";

console.log(obj1);
console.log(obj2);


