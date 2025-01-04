// we will study on how we can de-structure an object 

const course = {
    name:"js in hindi",
    courseinstructor:"hitesh"
}
//we can access the courseinstructor by console.log(course.courseinstructor)
// but we can also do the de structre 

const {courseinstructor:instructor}= course // here after : we write instructor just because courseinstructor was becoming too long to write 
console.log(instructor);

// API is nothing just giving or taking information 
//{
    //"name': "vanshaj",
    //"email": "some@gmail"
//}

//json is nothing an object without name just consisting of information 