let score = "85abc"; // string that looks like a number but contains non-numeric characters

console.log("Original score:", score);
console.log("Type of score:", typeof score);


// Attempt to convert the string to a number
let convertedScore = Number(score);

console.log("Converted score:", convertedScore);
console.log("Type of converted score:", typeof convertedScore);


// isNaN(convertedScore) checks whether the converted value is not a valid number; if true, it means the conversion failed.
if (isNaN(convertedScore)) {
    console.log("Conversion failed: The string contains non-numeric characters.");
} else {
    console.log("Conversion successful: The numeric value is", convertedScore);
}


//  "33" => 33, but "85abc" => NaN because of the non-numeric characters.
// true => 1, false => 0
// "" (empty string) => 0, " " (space) => 0
let booleanValue = true;

console.log("Original boolean value:", booleanValue);
console.log("Type of boolean value:", typeof booleanValue);

let convertedBoolean = Number(booleanValue);

console.log("Converted boolean:", convertedBoolean);
console.log("Type of converted boolean:", typeof convertedBoolean);


let someNumber = 98765;
console.log("Original number value:", someNumber);
console.log("Type of number value:", typeof someNumber);

let convertedString = String(someNumber);
console.log("Converted string:", convertedString);
console.log("Type of converted string:", typeof convertedString);
