//var led to bug

console.log("tutorial3: var,letand const")
var a = 45;
let b = "harry";
var c = null;
var d = undefined; 
console.log(a);
// const through out same 
//var is globally scoped while let and const are blacked scope
// var can be updated & redeclared within its scope
// let can be updated but not redeclared 
// const can neither be updated nor be reclared 

// {
//     var b = "lala";
//     console.log(b);
// }
// console.log(b);

{
    let b = "lala";
    console.log(b);
}
console.log(b);

