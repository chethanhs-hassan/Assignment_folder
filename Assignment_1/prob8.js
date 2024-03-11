//Implement array reversal. dont use builtin function
let array =[1,3,4,4,2,6];
console.log(reverseArray(array));
function reverseArray(array) {
    const output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
// output :[ 6, 2, 4, 4, 3, 1 ]