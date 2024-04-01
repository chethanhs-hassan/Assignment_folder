// How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let array =[1,2,3,4,5,5,5,1,2,7,7,7,3,8,9,9,9,9,10,10,10,10,10,22,33];
let map=new Map();
for(let i =0; i<array.length; i++){
    if(map.has(array[i])){
        map.set(array[i],map.get(array[i])+1);
    }
    else{
        map.set(array[i],1);
    }
}



    for(let [key,value] of map){
        if(value>1){
            console.log(`Number:${key}  Occurance:${value}` )
        }
    }

    /* output:

Number:1  Occurance:2
Number:2  Occurance:2
Number:3  Occurance:2
Number:5  Occurance:3
Number:7  Occurance:3
Number:9  Occurance:4
Number:10  Occurance:5

*/
    
    
