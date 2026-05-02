"use strict"; // treat all js code as newer version


// alert("Hello World!"); // we can use alert, prompt and confirm in browser but not in node.js environment


let number = 42; // number data type
let name = "Alice"; // string data type
let isActive = true; // boolean data type
let undefinedVariable; // undefined data type
let nullVariable = null; // null data type
let bigIntNumber = 9007199254740991n; // BigInt data type
let symbolValue = Symbol("unique"); // Symbol data type
let objectValue = { key: "value" }; // Object data type


console.log("Number:", number);
console.log("String:", name);
console.log("Boolean:", isActive);
console.log("Undefined:", undefinedVariable);
console.log("Null:", nullVariable);
console.log("BigInt:", bigIntNumber);
console.log("Symbol:", symbolValue);
console.log("Object:", objectValue);


console.table({ number, name, isActive, undefinedVariable, nullVariable, bigIntNumber, symbolValue, objectValue });


console.log("Type of number:", typeof number);
console.log("Type of name:", typeof name);
console.log("Type of isActive:", typeof isActive);
console.log("Type of undefinedVariable:", typeof undefinedVariable);
console.log("Type of nullVariable:", typeof nullVariable);
console.log("Type of bigIntNumber:", typeof bigIntNumber);
console.log("Type of symbolValue:", typeof symbolValue);
console.log("Type of objectValue:", typeof objectValue);


console.log("Is number a BigInt?", typeof number === "bigint");






