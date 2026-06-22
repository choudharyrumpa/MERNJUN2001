console.log("Hello World");

a=30;
console.log(a);

A=40;
console.log(A);

st1="subhankar";
console.log(st1);

_=80;
console.log(_);

$=70;
console.log($);

full_name="hiii"
console.log(full_name);

// var let const
//scope
  // global
  // function
  // block

  //var
// declare at global level
  var a=40;
  console.log(a);

// declare at block level
{
    var b=50;
    console.log("block level access",b);
}
console.log("outside the access",b)

//declare at function level
function getV(){
    var d=55;
    console.log(d);
}
// we cannot access the value outside the function
// console.log(d);
getV()

// the way of declaration
var num;  // declaration part
console.log(num);

num=40; //Initialization part
console.log(num);

//both declaration and initialization
var num1=70;
console.log(num1);

// Redeclaration of varriable
var num=100;
console.log(num);



