// For of Loop - These type of Loops are actually array specific Loop 
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}// here you will see that there was no need to increment or decrement any sort of things this is a very  
// we studied about maps which are just objects that store data in key value pair just the difference is 
// that it stores unique value only i.e same value cannot be stored again and again.

const map = new Map()
map.set('IN',"INDIA")
map.set("FR","FRANCE")
console.log(map);


for(const [key,value] of map){
    console.log(key,':-',value);
}
// for of loops do not work on objects (they do work on arrays but not on objects) so for that we come with
// for in Loops 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple",
}

for(const num in myObject){
    console.log(myObject[num]);
    
}
// since maps are not itereable for in doesnt work on maps

//+++++++++++++IMPORTANT++++++++++++++=

const newarr = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }
]

newarr.forEach((item)=>{
    console.log(item.languagefilename);
    
})