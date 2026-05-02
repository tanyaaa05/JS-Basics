"use strict"; // treat all js code as newer version


// alert("Hello World!"); // we can use alert, prompt and confirm in browser but not in node.js environment

// primitive data types: number, string, boolean, undefined, null, BigInt, Symbol
// Primitive data types are immutable and store a single value.
let number = 42;
let name = "Alice";
let isActive = true;
let undefinedVariable;
let nullVariable = null;
let bigIntNumber = 9007199254740991n;
let objectValue = { name: "Alice" };


let symbolValue = Symbol("123");
let anotherSymbolValue = Symbol("123");
console.log("Symbol value:", symbolValue);
console.log("Another Symbol value:", anotherSymbolValue);
console.log("Are the two symbols equal?", symbolValue === anotherSymbolValue); // false, because each symbol is unique



console.log("Number:", number);
console.log("String:", name);
console.log("Boolean:", isActive);
console.log("Undefined:", undefinedVariable);
console.log("Null:", nullVariable);
console.log("BigInt:", bigIntNumber);
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






