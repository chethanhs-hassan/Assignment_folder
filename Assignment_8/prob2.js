//2. Find the number of occurrences of a character in a String?
let string ="floccinaucinihilipilification"
let object=new Map();
for(let i=0; i<string.length; i++){
    if(object.has(string[i])){
        object.set(string[i],object.get(string[i])+1)
    }
    else{
        object.set(string[i],1);
    }
}

console.log(object.get("f"))

//output:2
