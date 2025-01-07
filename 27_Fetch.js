//The global fetch() method starts the process of fetching a resource from the network
//, returning a promise which is fulfilled once the response is available.

fetch("https://api.randomuser.me")
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))