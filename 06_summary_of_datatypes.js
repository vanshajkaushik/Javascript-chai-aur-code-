// the way the data is kept in the memory and accesed has been divided into two categories 
// primitive and non primitive 
// there  are 7 primitve datatypes which are call by value 
// 7 types: strings,Number,null,undefined,Bigint,Boolean,symbol

//Reference or Non primitive 
//Array,Objects,Function 

// JavaScript is a dynamically typed language. 
//This means that variable types are determined at runtime, 
//and you do not need to explicitly declare the type of a variable before using it. 
//You can assign different types of values to a variable during its lifetime.

var score = 123
let name = "vanshaj"
const id = "1234"

console.log(typeof score) // typeof is used to find the datatype of the variables 
console.log(typeof name)
console.log(typeof id)

//ecma script is the offcial documentation of javascript for future interview purposes plz refer to it.

//for all the non primitve datatypes the returned datatype is function only and for function the returned datatype is funcion object 