function myname(){
    console.log("vanshaj kaushik");
    
}
myname()
// we just add the function keyword and then the function name and then define the function 

//During the time of defining the function the input we take are known as parameters whereas the input values that we give
// during the call of functions are known as arguments 

function addtwonumbers(number1,number2){
    let result = number1 + number2
    return result
    console.log("hello"); // unreachable code 
    
}
// any code written after return does not work as the function stops after it 
let result = addtwonumbers(3,5)
console.log(result);

//rest operator (...), supose we want to create a cart and dont know how many parameters can come then we use this

function calcultecartprice(...num){
    return num
}

console.log(calcultecartprice(10,20,30,40));
// supose the input type is object 

const user ={
    name:"vanshaj",
    price:199
}
function handleobject(anyobject){ // this way we make any function that can input any 
    console.log(`The name of the user is ${anyobject.name} and the price is ${anyobject.price}`);
    
}
handleobject(user)

//array as a parameter/argument in a function 

const newarray = [1,2,3,5]

function getsecondvalue(getarray){
    return newarray[1]

}
console.log(getsecondvalue(newarray));
