// if if-else , if-else-elseif all come under control flow , whereas different logical and boolean operator too.. 
//if(condition){
    //definition

//}
//we can also do the nested conditions 
//truthy and falsy value - when we assume that the given value is either true or false....
let useremail = "vanshajk.04@gmail.com";

if(useremail){
    console.log("got user email");
}
else{console.log("Didnt got user email");
}

//falsy values : false, o, -0, BigInt on, "'', null, undefined, NaN ; other than this all are considered truthy value
// special truthy value : "O" 'false' " ", [], {}, function(){}

// if we want to chech whether an array is empty or not we need to do it using its length property 

let userid = []

if(userid.length===0){
    console.log("array is empty");
    
}

//if we want to check whether an object is empty or not we need to first convert it into array and then check 
const emptyobj = {}
if(Object.keys(emptyobj).length===0){console.log("The object is empty");
}

// if we want multiple conditions to be true at similar time we use && and if we want any condition to be true out of multiple we use || - Known as Pipe operator 
//Nullish coalescing operator (??): null defined - Have a view from video (Basically made for undefined and null if the value received is wrong it gives them null/undefined rest the value is given only)

//To be sure Nullish and Terniary are different operators 