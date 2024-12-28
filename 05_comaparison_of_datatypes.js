console.log("2" > 1) // in this case the compiler automatically converts 2(string) to 2(number)
// here we are comparing two different datatypes but is wrong so the answers can be unexpected

console.log(null > 0) //1
console.log(null == 0) //2
console.log(null >= 0) //3

// this would give very different answers because equality check and comparison operators work different
// in 1 only the comparison operator works hence the answer is false 
// whereas in 3 equaltiy check converts null to 0 which is equal to 0 hence the answer comes to true

console.log("2" === 2) // here the answer comes to false bcuz this is the case of strict check 
// in strict check it doesnot convert the datatype rather it would check if the datatypes are same or not `