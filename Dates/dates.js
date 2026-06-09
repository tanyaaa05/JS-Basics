const myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

console.log('\n');

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log('\n');

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log('\n');

const createdDate = new Date(2023, 0, 1);
console.log(createdDate.toDateString());


const date1 = new Date(2023, 0, 1, 22, 30);
console.log("Important date: " + date1.toLocaleString());

console.log(date1.getTime()); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, which is the standard way to represent dates in JavaScript. This value is often used for date comparisons and calculations.
