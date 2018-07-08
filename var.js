"use strict";

var f1 =function(){ 
    console.log(f1);

    var f2=function(){      //지역변수 
        console.log(f2);
    }       

    f2();
}

f1();
