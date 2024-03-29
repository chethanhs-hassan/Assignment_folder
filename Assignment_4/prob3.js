/* 
Q3. Time to equality

Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.


Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.


Output Format
Return an integer denoting the minimum time to make all elements equal.


Example Input
A = [2, 4, 1, 3, 2]


Example Output
8
*/
let A = [2,4,1,3,2];
let max = Number.MIN_VALUE;
for(let i = 0; i<A.length; i++){
    if(A[i]>max){
        max =A[i];
    }
}
let seconds =0;
for(let j=0; j<A.length;j++){
    while(A[j]<max){
        A[j]++;
        seconds++;
    }
}
console.log(seconds);
//output:8
