//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
const promiseone = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
        
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
    
})  
new Promise(function(resolve,reject){
    setTimeout(function()
    {console.log("Async task two complete");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({"username":"chai",email:"example@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
    if(!error){
        resolve({username:'vanshaj',userid:"1234"})
    }
    else{
        reject("ERROR:Something Went Wrong")
    }
    },1000) 
})

promisefour.then(function(user){
    console.log(user);
    return user.username   
})
.then(function(username){
    console.log(username);   
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{console.log
("The promise has either resolved or rejected");})

fetch("https://api.randomuser.me")
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))