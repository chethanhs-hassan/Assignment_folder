
/*Q3. Column Sum

Problem Description
You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.



Problem Constraints
1 <= A.size() <= 10^3

1 <= A[i].size() <= 10^3

1 <= A[i][j] <= 10^3



Input Format
First argument is a 2D array of integers.(2D matrix).



Output Format
Return an array containing column-wise sums of original matrix.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,8]
[9,2,3,4]


Example Output
Output 1:

{15,10,13,16}


Example Explanation
Explanation 1

Column 1 = 1+5+9 = 15
Column 2 = 2+6+2 = 10
Column 3 = 3+7+3 = 13
Column 4 = 4+8+4 = 16 */

function matrix_column_sum(A){
    let output =[];
    let sum =0;
    for(let i =0; i<A[0].length; i++){
        sum=A[0][i]+A[1][i]+A[2][i];
        output.push(sum);
    }
    return output

}

let A=[[1,2,3,4],
       [5,6,7,8],
       [9,2,3,4]];

       console.log(matrix_column_sum(A));


     //  output:[ 15, 10, 13, 16 ]