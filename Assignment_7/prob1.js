/*Q1. Max Sum Contiguous Subarray


Problem Description
Find the maximum sum of contiguous non-empty subarray within an array A of length N.



Problem Constraints
1 <= N <= 10^6
-1000 <= A[i] <= 1000



Input Format
The first and the only argument contains an integer array, A.



Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.



Example Input
Input 1:

 A = [1, 2, 3, 4, -10] 
Input 2:

 A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output
Output 1:

 10 
Output 2:

 6 


Example Explanation
Explanation 1:

 The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:

 The subarray [4,-1,2,1] has the maximum possible sum of 6.  */


let A =[1,2,3,4,-10];
let CA = [];
for(let i =0; i<A.length; i++){
    if(i==0){
        CA.push(A[i]);
    }

    else{
        CA.push(A[i]+CA[i-1]);
    }
}
let max =Number.MIN_VALUE;
let calculate;
for(let l=0; l<A.length; l++){
    for(let r=l; r<A.length;r++){
        if(l==0){
            calculate = CA[r];
            if(calculate>max){
                max=calculate;
            }
    
        }
        else{
            calculate=CA[r]-CA[l-1]
            if(calculate>max){
                max=calculate;
            }
        }
    }

}
console.log(max);
console.log(CA)


/*output
10
[ 1, 3, 6, 10, 0 ]
 */