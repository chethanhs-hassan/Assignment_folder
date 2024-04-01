//How would you swap two numbers without using a third variable?

let x=5;
let y=7;
x=x^y;
y=x^y;
x=x^y;
console.log(x);
console.log(y);

/*  output:
7
5
*/