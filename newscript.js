console.log('my first code');
// variables
a=5;  //Without declaratation   //block 1
var a=5;
console.log(a);
let b=56;
const n=67;
{
const n=77;
console.log(n);
var a=34;   //block 2
console.log(a);
let b=90;
console.log(b);
}

var a=67;
console.log(a);
console.log(b);
console.log(typeof(b));
var firstname='mridu';
console.log(typeof(firstname));
let bool=true;
console.log(typeof(bool));
var g='';
console.log (typeof(g));
// arrays
var arr1=['pine','acacia','teak',10];
arr1.push('rosewood');
arr1.pop()
console.log(arr1);

// objects
// let person=
// {
    // fname: 'maya',
    // age: 80,
    // location: 'trivandrum'
// }
// console.log(person.location)
let person=new Object();
person.fname='miya';
person.age=22;
console.log(person);
// array of object

var arr2=[
{
fname:'maya',
age:80,
location:'tvm'
},
{
    fname:'miya',
    age:70,
    location:'tivim'

}

]
console.log(arr2[1].age);

// functions

function display(fname) {
console.log('Welcome '+ fname +' to functions');    
}
display('mridula');
// function to add 2 numbers
// function add_val(a,b) {
//    var sum=a+b;
//    console.log(sum);
//return sum;
// }
// var result=add_val(10,20);
// console.log('the sum is '+result);

function multiply(a,b) {
   var multiplication=a*b;
    return multiplication;
// console.log(multiplication)
}
 var result= multiply(7,10);
console.log('the result is '+result);

// multiply(7,10);

var ab=7;
var abc=++ab; //post increment
console.log(ab);
console.log(abc);
var exp=(4*7)-8**2+9;//28-64+9
console.log(exp);

var tt=(56);
var tm=('56');
// conditional statemnet

if (tm>tt || tm===tt) {   //if (tm>tt && tm===tt)
     
} else {
    console.log('value is less') 
}
//if (tm>tt) {
  //console.log('value is greater')  
//} 
//else if(tm===tt){
  //  console.log('value is equal') 
//}
//else {
  //console.log('value is less')  
//}

var result1=exp>0? 'value is greater than zero': 'value is less than zero'; //var result1=exp>-30?
console.log(result1);

//looping statements
// print numbers 1 to 10
for (let i=0; i<10;i++){
  console.log(i+1);
}
var array=[1,45,34,56,78];
for(i=0;i<array.length;i++){
console.log(array[i]);
}
// for in loop
var obj= {fname:'sunita',age:34,place:'tvm'}
for (const i in obj){
  console.log(obj[i]);
}

for (const i of array){
  console.log(i);
}

for (let i of array){
  console.log(i);
}
// while loop
// let j=1;
// while (j<=10){
  // console.log(j);
// j++
// }
let j=0;
while (j<10){
  console.log(j);
j++
}

// do while

let r=1;
do{
  console.log(r)
  r++;

}while (r<=10);