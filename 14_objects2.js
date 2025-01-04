//singelton - we had earlier studied the literals now we study the singelton method 
const tinder_user = {}
tinder_user.name="vanshaj"
tinder_user.age=12
tinder_user.email="123abc"
console.log(tinder_user);

//we can also define the object using the method
// const tinder_user= new object()

// Nested objects 

const regularuser = {
    email:"some@gmail.com",
    name : {
        fullname : {
            firstname: "vanshaj",
            lastname: "kaushik"

        }
    }
}