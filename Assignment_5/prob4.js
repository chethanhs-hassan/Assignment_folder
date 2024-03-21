/*Q2. Closest MinMax


Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array. */
let A =[1,3,2];
let min =Number.MAX_VALUE;
let max =Number.MIN_VALUE;
for(let i =0; i<A.length;i++){
    if(A[i]<min){
        min =A[i];
    }
}
for(let i =0; i<A.length;i++){
    if(A[i]>max){
        max = A[i];
    }
}
let minlength =Number.MAX_VALUE;
let length;
for(let i =0;i<A.length-1;i++){
    if(A[i]==min){
        for(let j=i+1; j<A.length;j++){
            if(A[j]==max){
                length=j-i+1;
                if(length<minlength){
                    minlength=length;
                    break;
                }
                else{
                    break;
                }
            }
        }
    }

  if(A[i]==max){
    for(let k=i+1; k<A.length;k++){
        if(A[k]==min){
            length=k-i+1;
            if(length<minlength){
                minlength=length;
                break;
            }
            else{
                break;
            }
        }
    }
 }
}
console.log(minlength);
//output:2