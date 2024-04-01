//3. How to find out if the given two strings are anagrams or not?

let string1="bored"
let string2="robed"
if(string1.length==string2.length){
    anagrams(string1,string2);
}
else{
    console.log("The given strings are not anagrams");
}

function anagrams(string1,string2){
let map1=new Map();
let map2=new Map();
for(let i=0; i<string1.length;i++){
    if(map1.has(string1[i])){
        map1.set(string1[i],map1.get(string1[i])+1);
    }
    else{
        map1.set(string1[i],1);
    }
}

for(let i=0 ; i<string2.length; i++){
    if(map2.has(string2[i])){
        map2.set(string2[i],map2.get(string2[i])+1);
    }
    else{
        map2.set(string2[i],1);
    }
}
let flag=false;
for(let i=0; i<string1.length; i++){
    flag=false;
    if(map1.get(string1[i])==map2.get(string1[i])){
              flag=true;
    }

    else{
        console.log("The given strings are not anagrams")
        return;
    }
}
if(flag==true){
    console.log("The given strings are anagrams")
}


}


//output:    The given strings are anagrams
