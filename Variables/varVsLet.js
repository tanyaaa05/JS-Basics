// (1). Var usecase
var a = 10;

a = 30; // allowed

var a = 20; // allowed

console.log(a);

if (true) {
    var x = 15;
}
console.log(x); // accessible outside block


// (2). Let usecase
let name = "Tanya";

name = "Alice";

// let name = "John"; // not allowed

console.log(name);

if (true) {
    let y = 50;
    console.log(y); // allowed
}
// console.log(y); // not allowed
