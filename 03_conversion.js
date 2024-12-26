let score = 33 
var num= "33"
//console.log(typeof score)
//console.log(typeof num)

let valueinscore = String(score) //this part of code converts the datatype of score which was earlier number to string 
let valueinum = Number(num) // this part of code converts  the datatype fo score which was earlier string to number 

console.log(typeof valueinscore)
console.log(typeof valueinum) 

let x = "22abc"
var y = Number(x)

console.log(typeof y) //Here although the number is not an actual number but still it gets converted 
console.log(y) // Here the value os NaN which stands for not a number

// true >= 1 false >= 0
// '' >= false 'vanshaj' >= true  