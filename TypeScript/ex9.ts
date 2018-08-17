class employee{
     name:string ="sumit";
}
let obj = new employee();
if(obj.name){
    console.log(obj.name);
}





/* How to use Setter and Getter */
class person{
     private fullName:string;

     setter(name:string){
         this.fullName= name;
     }

     getter(){
        return this.fullName;
     }
}
let p1 = new person();
p1.setter("Harry");
let personname :string =  p1.getter();
console.log(personname);