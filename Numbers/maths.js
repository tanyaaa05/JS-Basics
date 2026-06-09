console.log(Math);

console.log(Math.abs(-10));

console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.round(4.7));

console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));

console.log(Math.min(4, 8, 7, 2));
console.log(Math.max(4, 8, 7, 2));

console.log(Math.random());
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1); // here we are generating a random number between 1 and 10 (inclusive) by multiplying the random decimal by 10, flooring it to get an integer, and then adding 1 to shift the range from 0-9 to 1-10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(Math.PI);


