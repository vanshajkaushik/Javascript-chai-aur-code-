const Account_id = 1234 //cannot be changed the value is fixed now 
let accountemail = "random.01@gmail.com" //can be changed scope problem solved
var accountpass = "123456"//can be changed, has the scope problem, so we usually avoid it 

accountcity = "Dehradun"// a variable can be declared this way but it is a bad practiced to do such thing 

let accountstate; // this variable has not been given any value so for the time being its value is undefined

console.log(Account_id);
console.table([accountemail,accountpass,accountcity,accountstate])
// In javascript whether we use ; or not it doesnt matter much 

