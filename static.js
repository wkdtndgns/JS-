"use strict";


function f1(){ 
    console.log(f1);

    function f2(){      //지역변수 
        console.log(f2);
    }       

    f2();
}

f1();
f2();
