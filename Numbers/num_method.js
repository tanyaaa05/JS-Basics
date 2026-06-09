const score = 500;
console.log(score);
console.log(typeof score); // "number"


const balance = new Number(100);
console.log(balance);
console.log(typeof balance); // "object"


console.log(balance.toString());
console.log(typeof balance.toString()); // "string"
console.log(balance.toFixed(2)); // Converts the number to a string with 2 decimal places.


const otherNumber = 125.876;
console.log(otherNumber.toPrecision(4)); // Converts the number to a string with a specified length (4 significant digits in this case).


const longNumber = 10000000;
console.log(longNumber.toLocaleString('en-IN')); // used to format numbers in a readable way based on country or locale standards. In this case, it formats the number according to Indian numbering system, resulting in "1,00,00,000". The 'en-IN' locale is used to specify that the formatting should follow Indian conventions.


console.log(balance.__proto__); // The __proto__ property is a reference to the prototype of the object. In this case, it points to Number.prototype, which contains all the methods and properties available to number objects in JavaScript.


