// 3. diamond shape

let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}
for (let i = 4; i>0 ; i--) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}

/* output:

        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 
 */       
