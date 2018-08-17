class apple{
   id :number;
   constructor(theid:number){
       this.id= theid;
   } 
}


class b extends apple{
    name:string;
    constructor(id:number ,namee:string){
        super(id);
        this.name = namee;

    }
}

 class boy{
     //private id:number;
     id:number;
         name :string;
     constructor(id:number,name:string){
         this.id=id;
         this.name=name;
     }
 }

let app = new apple(1);
let ba = new b(2,"boy");
let c = new boy(3,"sumit");

console.log(app);
app =ba;
console.log(app);
console.log(app.id);
console.log(ba);
console.log(c);
ba = c;

