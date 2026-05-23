let name = "Tanya Singh"; // String Primitive
let repoCount = 20;

// console.log(name + " has " + repoCount + " repositories."); // Concatenation

console.log(`${'John Doe'} has ${repoCount} repositories.`); // Template Literals


const gameName = new String("Subway"); // String Object
console.log(gameName);
console.log(typeof gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes("way"));

console.log(gameName.__proto__); // The __proto__ property is a reference to the prototype of the object. In this case, it points to String.prototype, which contains all the methods and properties available to string objects in JavaScript.

console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

console.log(gameName.split("w")); // Splits the string into an array of substrings based on the specified separator. In this case, it splits the string at the character "w", resulting in an array with two elements: ["Sub", "ay"].

console.log(gameName.substring(0, 3)); // Extracts characters from index 0 to 3 (excluding index 3)

console.log(gameName.slice(0, 3)); // Similar to substring but can also accept negative indices. Negative indices count from the end of the string. For example, slice(-3) would extract the last three characters of the string.

console.log(gameName.slice(-4, -1)); // Extracts the last four characters of the string (excluding the last character).


const language = "  JavaScript  ";
console.log(language);
console.log(language.trim()); // Removes whitespace from both ends of the string.

const url = "https://www.example%20com";
console.log(url);
console.log(url.replace("%20", ".")); // Replaces the first occurrence of "%20" with a period in the string.

