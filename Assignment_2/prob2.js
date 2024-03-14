//Create a calculator to perform sum, subtraction, multiplication and division of 2 integers provided by use
const prompt = require('prompt-sync')();
let a = parseInt(prompt('Enter the first value'));
let b = parseInt(prompt('Enter the second value'));
console.log("the sum of two number is ",a+b);
console.log("the subtraction of two number is ",a-b);
console.log("the division of two number is ",a/b);
console.log("the multiplication of two number is ",a*b);
//output:
Enter the first value8
Enter the second value4
the sum of two number is 12
the subtraction of two number is 4
the division of two number is 2
the multiplication of two number is 32
