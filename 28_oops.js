// adding new gives you a new instance everytime it is used 
//whenever we use new an empty object is created  which is know as instance , a constructor function is created due to new keyword 
//then by using this we inject the data into that object 

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this. loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this

}

const userOne = new User ("hitesh", 12, true)

const userTwo = new User ("ChaiAurCode", 11, false)// if we donot use the new keyword it would overwrite the userone's data. 
console. log (userOne) ; console. log(userTwo);