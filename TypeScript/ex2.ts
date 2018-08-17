

function fx(y){
let  x =21000;
  y =909;
  y =300;
  console.log(x + y);

}
fx(6);

/* ****************************** */
function theCityThatAlwaysSleeps() {
    let getCity;
  
    if (true) {
        let city = "Seattle";
      let  getCity = function() {
            return city;
        }
    }
    return getCity();

}
   

/* ***************************** */
/* call back function */
(function(i){
setTimeout(function(){
console.log(i);
},100*2);
})(2);


/* let vs constant  */


