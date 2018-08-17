class person{
id:number;
name:string;
constructor(id:number,name:string){
    this.id=id;
    this.name=name;
}
}

class student extends person{
    address:string;
    constructor(address:string){
super(1,"priyanka");
    }
}


let  p = new person(1,"sumit kumar");
let  s = new student("Ghaziabad");


console.log(p);
console.log(s);
console.log(s.id=2);console.log(s.address="modinagar");