const newDate = new Date();

console.log(newDate.getMonth()); // Returns the month (0-11) of the date. January is 0, February is 1, and so on.

console.log(newDate.getMonth() + 1); // Adding 1 to the month value to get the correct month number (1-12)

console.log(newDate.getFullYear()); // Returns the year (4 digits) of the date.

console.log(newDate.getDay()); // Returns the day of the week (0-6) of the date. Sunday is 0, Monday is 1, and so on.

console.log(newDate.getDay() + 1); // Returns the day of the week (1-7) of the date. Sunday is 1, Monday is 2, and so on.

console.log(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`); // Template literal to format the date, month, and year as "DD/MM/YYYY"


