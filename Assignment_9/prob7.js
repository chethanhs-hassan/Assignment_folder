/*
Q7. Spiral Order Matrix II


Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.



Problem Constraints
1 <= A <= 1000



Input Format
First and only argument is integer A


Output Format
Return a 2-D matrix which consists of the elements added in spiral order.



Example Input
Input 1:

1
Input 2:

2
Input 3:

5


Example Output
Output 1:

[ [1] ]
Output 2:

[ [1, 2], 
  [4, 3] ]
Output 2:

[ [1,   2,  3,  4, 5], 
  [16, 17, 18, 19, 6], 
  [15, 24, 25, 20, 7], 
  [14, 23, 22, 21, 8], 
  [13, 12, 11, 10, 9] ]


Example Explanation
Explanation 1:

Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3
 */


let N=5;
let result=new Array(N);
for(let i=0; i<N; i++){
    result[i]=new Array(N);
}
let top=0;
let right=N-1;
let bottom=N-1;
let left=0;
let cn=1;

while(top<=bottom && left<=right){
    for(let i=top; i<=right; i++){
         result[top][i]=(cn);
         cn++;
    }

     top++;

     for(let i=top; i<=bottom;i++){
        result[i][right]=(cn);
        cn++;
     }

     right--;

     if(top<=bottom){
        for(let i=right; i>=left; i--){
            result[bottom][i]=(cn);
            cn++;
        }

        bottom--;
    
     }

     if(left<=right){
        for(let i=bottom; i>=top; i--){
            result[i][left]=(cn);
            cn++;
        }
        left++;
     }
}

for(let i=0; i<result.length; i++){
    console.log(result[i]);
}

/*
output:
[ 1, 2, 3, 4, 5 ]
[ 16, 17, 18, 19, 6 ]
[ 15, 24, 25, 20, 7 ]
[ 14, 23, 22, 21, 8 ]
[ 13, 12, 11, 10, 9 ]

 */