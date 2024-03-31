//1. Determine if a string/number is a palindrome? 

let a =22422
let A;
if(typeof(a)=="string"){
 A= a.toLowerCase();
 checkpalindrome(A);
} 
else{
    A=a.toString();
    checkpalindrome(A);
    
}


function checkpalindrome(A){
    let length=A.length;
    if(length%2==0){
        check(A);
    }
    else{
        check2(A);
    }


    function check(A){
        let flag =false;
        for(let i=0; i<A.length; i++){
            flag=false;
            if(A[i]==A[A.length-1-i]){
                flag=true;
            }
            else{
                console.log("the given string/number in not a palindrome")
                return;
            }
        }

        if(flag==true){
            console.log("the given string/number is palindrome")
        }
    }


    function  check2(A){
        let flag =false;
        for(let i=0; i<A.length; i++){
            if(i==Math.floor(A.length/2)){
                continue;
            }
            flag=false;
            if(A[i]==A[A.length-1-i]){
                flag=true;
            }
            else{
                console.log("the given number/string in not a palindrome ")
                return;
            }
            
        }
        if(flag==true){
            console.log("the given number/string is palindrome")
        }
    }
}


//output:the given number/string is palindrome


