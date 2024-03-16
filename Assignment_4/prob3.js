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