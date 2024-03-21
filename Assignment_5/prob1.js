/*Q2. Special Index

Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 10^5
-10^5 <= A[i] <= 10^5


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.
 */
let A =[2,1,6,4];
let cn =0;

for(let i =0; i<=A.length;i++){
    A =[2,1,6,4];
   let B=A;
   
   let cea =[];
   let coa =[];
    B.splice(i,1);
    
    for(let j =0; j<B.length; j++){
        if(j==0){
            cea.push(B[0]);
        }
        else if(j%2==0){
           cea.push(cea[j-1]+B[j]);
        }
        else{
            cea.push(cea[j-1])
        }
    }
    
    for(let k =0; k<B.length;k++){
        if(k==0){
            coa.push(0);
        }
        else if(k%2!=0){
            coa.push(coa[k-1]+B[k]);
        }
        else{
            coa.push(coa[k-1]);
        }
    }
    
    if(cea[cea.length-1]==coa[coa.length-1]){
        cn++;
    }
}
console.log(cn)
//output:1
