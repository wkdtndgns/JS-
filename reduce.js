function callback(a, b) 
{ console.log(a + ", " + b); 
    return a + b; } 

var a1 = [10, 20, 30, 40, 50];

 var sum = a1.reduce(callback); 
 console.log(sum);