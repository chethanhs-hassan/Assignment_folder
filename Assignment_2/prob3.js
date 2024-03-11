//Create a calculator using function for each operation - sum, subtraction, multiplication and division of 2 integers provided by user
const prompt = require('prompt-sync')();
function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function division(a,b){
    return a/b;
}
function multiplication(a,b){
     return a*b;
}
let a = parseInt(prompt('Enter the first value'));
let b = parseInt(prompt('Enter the second value'));
console.log(addition(a,b));
console.log(subtraction(a,b));
console.log(division(a,b));
console.log(multiplication(a,b));
//output:
Enter the first value10
Enter the second value5
15
5
2
50
