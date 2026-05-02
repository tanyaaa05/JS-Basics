let value = 5;

let negativeValue = -value; // Using the unary minus operator to negate the value

console.log("Original value:", value);
console.log("Negated value:", negativeValue);

console.log(2 + 3); // Addition
console.log(10 - 4);            // Subtraction
console.log(6 * 7); // Multiplication
console.log(20 / 5);       // Division
console.log(8 % 5);       // Modulus (remainder)
console.log(2 ** 3);       // Exponentiation (2 raised to the power of 3)


// String Operators
let str1 = "Hello, ";
let str2 = "world!";
let combinedString = str1 + str2; // Using the addition operator to concatenate strings

console.log("Combined string:", combinedString);


console.log("5" + 10); // String concatenation: "5" + "10" => "510"
console.log(5 + "10"); // String concatenation: "5" + "10" => "510"
console.log(5 + 10);  // Numeric addition: 5 + 10 => 15

console.log("5" + 2 + 3); // String concatenation: "5" + "2" => "52", then "52" + "3" => "523", reason: String comes first → everything becomes string

console.log(2 + 4 + "5"); // Numeric addition: 2 + 4 => 6, then string concatenation: "6" + "5" => "65", reason: Numbers first → calculation happens first


console.log(+true);
console.log(+false);
console.log(+""); // The unary plus operator converts its operand to a number. In this case, it converts true to 1, false to 0, and an empty string to 0.
