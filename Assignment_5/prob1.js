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
