/*Tuple*/
let x: [string,number]=['priya',17];
x[2]= "sumitkumar";
console.log(x[0].substr(3));
console.log(x[0].toString());
console.log(x[1].toString());
console.log(x[0].substr(0).toUpperCase());
console.log(x[2]);
let y:Array<any>=[1,2,3,4];
let c:Array<any>=[1,2,3,4];
let d:Array<any>=[1,2,3,4];
let z:Array<any>=[];
z.push(y);
console.log(z);
/*any*/

let notsure:any =5;
console.log(notsure="priyanka singh");
notsure = 8.9;
notsure = true;
console.log(notsure);

/* Void */
function callme():void{
var name = "jjerg";

    console.log("heyyyy!!!!!!" +name);
    return null || undefined ;
}
var p = callme();
console.log(p);


/*  **************************  */
let arr :Array<any>= [1,true,"harry"];//array
let a:  number[] = [1,2]; //array
let n : [string ,number]=["p",3]; // tuple
let [first,second] = [1,"priya"]; // destructuring
let [kanchan,agni]= [first,second];//destructurin using aleary declare variable mean reusing

 function k([first,second]:[number,number]){
     console.log(first);
     console.log(second);
 }

 k([1,3]); // passing one but got two




 /* Object destructure */

 