//how iterate over an object data? explain with an example
let obj = {
             name:"sumanth",
               id: 250,
      designation:"manager",
           salary: 25000
}
console.log(obj.name);
console.log(obj.id);
console.log(obj.designation);
console.log(obj.salary);
obj.salary = 50000;
console.log(obj.salary);
obj["name"]= "chethan"
console.log(obj.name);

/* output:
sumanth
250
manager
25000
50000
chethan
*/