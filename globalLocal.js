// global variable's are for all the page or all the code 
// local variable's are just for the fncs and is only available inside the fncs

let num = 99;   // this is a global variable

let checkVar = ()=>{
    let num = 44;
    console.log('this is now a local variable and this is only for this fncs',num);
}


checkVar();
console.log('the value of num will not change bcz of checkvar bcz it is a global var', num);


let fullName = "aniket jadhav";

let trying = ()=>{
    let fullName = "myself"      // the name will just be change here and not to the main full name bcz it is a global variable
    console.log(fullName);
    let age = 99;
    console.log("age is",age);
    
}

let trying2 = ()=>{
    console.log(fullName)
    //console.log(age);           // this will throw error bcz it is a local variable and can be accessed only where it is declared
    
}

trying()
trying2()
trying()