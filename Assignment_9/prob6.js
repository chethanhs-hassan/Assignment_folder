 /*Q6. Matrix Transpose



Problem Constraints
1 <= A.size() <= 1000

1 <= A[i].size() <= 1000

1 <= A[i][j] <= 1000



Input Format
First argument is a 2D matrix of integers.



Output Format
You have to return the Transpose of this 2D matrix.



Example Input
Input 1:

A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
Input 2:

A = [[1, 2],[1, 2],[1, 2]]


Example Output
Output 1:

[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
Output 2:

[[1, 1, 1], [2, 2, 2]]


Example Explanation
Explanation 1:

Clearly after converting rows to column and columns to rows of [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
 we will get [[1, 4, 7], [2, 5, 8], [3, 6, 9]].
 */
let A = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
let N=3;
         
let result=new Array(N);
for(let i=0; i<N;i++){
    result[i]=new Array(N);
}


for(let i=0; i<N; i++){
    for(let j=0;j<N; j++){
    
        result[j][i]=A[i][j];
        
    }
}
for(let i=0; i<result.length;i++){
    console.log(result[i])
}

/*
output:
 [ 1, 4, 7 ]
[ 2, 5, 8 ]
[ 3, 6, 9 ]

*/