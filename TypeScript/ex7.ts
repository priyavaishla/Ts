class person{
   protected id:number;
    constructor(id:number){
this.id = id;
    }
}

class  student extends person{
  private name:string;
  readonly address:string = "noida";
  constructor(id:number,name:string,address:string){
     super(id);
this.name=name;
  }  
}

let ob = new student(1,"priya","ghaziabad");
console.log(ob);
//console.log(ob.id);
//console.log(ob.name);
console.log(ob.address);