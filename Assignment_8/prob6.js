// 6. How do you reverse an array?

let array=[1,2,3,4,5]
let reversed_array=[];
for(let i=array.length-1; i>=0;i--){
    reversed_array.push(array[i])
}
console.log(reversed_array);

// output:[ 5, 4, 3, 2, 1 ]
