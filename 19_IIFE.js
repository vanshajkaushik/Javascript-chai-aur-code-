// to avoid the pollution from the glogal scope so to remove it and make the function work instant we use IIFE - Imediate Invoking Function Expression

(function welcome(){
    //named IIFE
    console.log("welcome");
    
})(); // this is the syntax of IIFE 
//make sure to add the semicolon cause it doesnt know where to stop and it may give error 

((name) => {
    // Unnamed or simple IIFE 
    console.log(`welcome,${name}`);
    
})("vanshaj")