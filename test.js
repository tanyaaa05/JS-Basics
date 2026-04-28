const accountId = 98765;
let accountName = "John Doe";
var accountBalance = 10000.50;  // prefer not to use var bcs of issues in functional and block scope 

accountStatus = "Active"; // This will create a global variable without declaration, which is not recommended

// accountId = 54321; // This will cause an error because accountId is a constant

accountName = "Jane Smith";
accountBalance = 50000;

// console.log("Account ID:", accountId);
// console.log("Account Name:", accountName);
// console.log("Account Balance:", accountBalance);

console.table({ accountId, accountName, accountBalance, accountStatus });
