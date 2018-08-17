/*Static properties are called class properties there is no need of object for that memebers */


/* Abtract */

abstract class department{
    constructor(){
        console.log("parent constructor call");
    }
    
call1(){
    console.log("hello");
}
abstract call2();
}

class teaching extends department{
    constructor(){
        super();
        console.log("child constructor call");
    }
  call2(){
      console.log("Implemented");
  }  
}


let obj = new teaching();
