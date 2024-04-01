//4. How do you calculate the number of vowels and consonants in a String?

let string="Incomprehensibilities"
let str=string.toLowerCase();
let vowel_count=0;
let consonents_count=0;
for(let i=0; i<str.length; i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        vowel_count++;
    }
    else{
        consonents_count++;
    }
}
console.log(`In the given word the number of vowels are : ${vowel_count} and consonents are :${consonents_count}`)

//output:  In the given word the number of vowels are : 9 and consonents are :12