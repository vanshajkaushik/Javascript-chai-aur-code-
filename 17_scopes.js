// var is not opted for declaring a variable as it is not bounded and can be used outside its scope 
//{ } curly brackets are used as a scope 



if(true){
var a = 1
let b = 2
const c = 3 
}
console.log(a);  // as var variable can be accessed outside the scope too 
//console.log(b);
//console.log(c);

//Nested scope 

function one(){
    const username = "vanshaj"

    function two(){
        const website = "vscode"
        console.log(username);
        
    }
    console.log(website);
    two()

}
one()