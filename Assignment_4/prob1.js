/*Q1:  equilibrium
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
--------------------------------------------------------------------------------------------------------

eg:

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1 */

let A = [-7,1,5,2,-4,3,0];
let cumarray = [];
function cummarray(A){
    for(let i= 0; i<A.length;i++){
        if(i==0){
            cumarray.push(A[0]);
        }
        if(i>0){
            cumarray.push(A[i] + cumarray[i-1]);
        }
    }
    return
}
cummarray(A)
let B =[];
let cn =0;
let minindex = Number.MAX_VALUE;
for(let j=0; j<A.length;j++){
    if(cumarray[j-1]==cumarray[cumarray.length-1]-cumarray[j]){
        B.push(j);
        cn++;
    }
}
if(cn == 0){
    console.log(-1);
}
if(cn == 1){
    console.log(B[0]);
}
if(cn>1){
    for(let i =0; i<B.length; B++){
        if(B[i]<minindex){
            minindex=B[i];
        }
    }
    console.log(minindex);
}
// output:3
