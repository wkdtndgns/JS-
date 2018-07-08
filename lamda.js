"use strict";


function f1(a,b) {
    return a+b; 
}

let f2 =function(a,b){
    return a+b;
}

let f3 = (a,b) => {return a+b; }

let f4 = (a,b) => a+b;

console.log(f1(2,3));
console.log(f2(2,3));
console.log(f3(2,3));
console.log(f4(2,3));

