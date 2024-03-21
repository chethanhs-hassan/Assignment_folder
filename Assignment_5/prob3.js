/*Q1. Special Subsequences "AG"


Problem Description
You have given a string A having Uppercase English letters.

You have to find how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
First and only argument is a string A.



Output Format
Return an integer denoting the answer.



Example Input
Input 1:

 A = "ABCGAG"
Input 2:

 A = "GAB"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Subsequence "AG" is 3 times in given string 
Explanation 2:

 There is no subsequence "AG" in the given string. */
let A ="ABCGAG" 
let cg=0;
let cp=0;
for(let i = A.length-1;i>=0;i--){
    if(A[i]=="G"){
        cg++;
    }
    if(A[i]=="A"){
        cp+=cg;
    }
}
console.log(cp);
//output:3
