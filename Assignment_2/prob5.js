let arr = [1,3,2,4,7,8,9];
//for loop
function adding(input){
let sum = 0;
for(let i=0;i<input.length;i++){
    sum +=arr[i];
}
return sum;
}
console.log(adding(arr))
//whiel loop
function adding1(input1){
let sum1=0;
let j =0;
while(j<input1.length){
    sum1 +=arr[j]
    j++
}
return sum1;
}
console.log(adding1(arr));