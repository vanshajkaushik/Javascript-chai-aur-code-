//when we make an object using a constructor then singelton is made 

const jsuser = {
    name:"vanshaj",
    age:21,
    email:"vanshajk.04@gmail.com",
    "full name": "Vanshaj kaushik"

} // The key in the objects are stored in the form of strings. So the dot(.) method to access the key value pair doesnt work 
console.log(jsuser.email);
console.log(jsuser["full name"]);// we cannot access the full name other than this method so this make this method the most suitable one 
console.log(jsuser["age"]);
//Object.freeze(jsuser)// this makes the object freeze i.e we cannot change anythings inside the object now 
jsuser.email="vansu2003@gmail.com"// since the object is now freeze hence the email doesnt change 
console.log(jsuser["email"]);
