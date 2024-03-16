let A = [5, 1, 10, 1];
let product = 1;
for(let i =0; i<A.length; i++){
    product = product*A[i];
}
let AP =[];
for(let j =0; j<A.length;j++){
    AP.push(product/A[j]);
}
console.log(AP);