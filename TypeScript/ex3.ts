class person{
    id:number;
    name:string;
    address:string;
    salary:number;

constructor(i:number,n:string,a:string,sa:number){
    this.id=i;
    this.name =n;
    this.address = a;
    this.salary =sa;
}

modify(){
    console.log("hello object oriented concepts again");
}
}

let objectin =  new person(1,"priyanka","ghaziabad",18000.0);
 class human extends person{

 }
 let ob =  new human(1,"sumit","ghaziabad",18000.0);
 console.log(objectin);
 console.log(ob);