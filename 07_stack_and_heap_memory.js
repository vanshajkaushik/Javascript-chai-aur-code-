// There are two types of memory 
// stack (Primitive ) and Heap (Non primitive)

var id1 = 123
var id2 = id1 
console.log(id1)
console.log(id2)

id2 = 234

console.log(id1)
console.log(id2)

// this is a clear example of stack where a copy of data is given and the change done in the copy 
// doesnot affect the original value 

let obj1 = {
    email: "email@gmail.com"
}
let obj2 = obj1
console.log(obj1.email)
console.log(obj2.email)

obj2.email = "yahoo@gmail.com"
console.log(obj1.email)
console.log(obj2.email)
// here in heap since the reference to original value is given so if any changes are made they 
// are made in the original value hence it changes from everywhere
