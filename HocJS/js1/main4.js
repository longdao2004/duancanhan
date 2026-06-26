// ternary operator = a shortcut to if{} and else{} statements
// helps to assign a variable based on a condition
//  condition ? codeIfTrue : codeIfFalse; 
// toan tu dieu kien bac 3

/* let age = 20;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message); */

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);