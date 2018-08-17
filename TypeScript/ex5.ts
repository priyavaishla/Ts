class a{
    id:number =1;
    constructor(id:number){
this.id=id;
    }
}

class b extends a{
  constructor(id:number)
  {
      super(id);
    
    }
}

 class c extends a{
     name:string="priyanka"
    constructor(id:number,name:string)
  {
      super(id);
    
    }
     
 }

let a1 =new a(4);
let a2= new b(2);
let a3 = new c(3,"sumitkumar");

console.log(a1);
console.log(a2);
console.log(a3);