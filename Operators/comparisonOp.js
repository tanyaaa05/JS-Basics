console.log(5 > 3);
console.log(2 < 1);
console.log(4 >= 4);
console.log(7 <= 10);


console.log(5 == "5"); // The double equals operator (==) performs type coercion, so it converts the string "5" to the number 5 before comparing, resulting in true.

console.log(5 === "5"); // The triple equals operator (===) does not perform type coercion, so it compares the value and type of the operands, resulting in false.


console.log(5 != "5");

console.log(5 !== "5");


console.log("5" > 3); // The string "5" is converted to the number 5 before comparison, resulting in true.


console.log(null == undefined); // true, because null and undefined are considered equal in non-strict comparison.

console.log(null === undefined); // false, because they are of different types in strict comparison.


console.log(NaN == NaN); // false, because NaN is not equal to anything, including itself.


console.log(null > 0); // false, because null is converted to 0 in numeric comparison, and 0 is not greater than 0.

console.log(null < 0); // false, because null is converted to 0 in numeric comparison, and 0 is not less than 0.

console.log(null == 0); // false, because null is only equal to undefined in non-strict comparison, and not equal to any other value, including 0.

console.log(null >= 0); // true, because null is converted to 0 in numeric comparison, and 0 is equal to 0.

console.log(null <= 0); // true, because null is converted to 0 in numeric comparison, and 0 is equal to 0.


console.log(undefined > 0); // false, because undefined is converted to NaN in numeric comparison, and NaN is not greater than any value.

console.log(undefined < 0);

console.log(undefined == 0); // false, because undefined is only equal to null in non-strict comparison, and not equal to any other value, including 0.

console.log(undefined >= 0); // false, because undefined is converted to NaN in numeric comparison, and NaN is not greater than or equal to any value.

console.log(undefined <= 0); // false, because undefined is converted to NaN in numeric comparison, and NaN is not less than or equal to any value.
