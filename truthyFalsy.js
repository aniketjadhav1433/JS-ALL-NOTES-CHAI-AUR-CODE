// truthy values => "0" , "false" , " " , [] , {} , function(){}

//flasy values => 0, -0 , BigInt 0n, "" , null , undefined , Nan

let username = "#aniket";

if (username) {                                    // it will be a truthy value,  we dont need to do any condition check it will check the truthy or falsy vlaues directly
  console.log("this is true");
} else {
  console.log("this is not true");
}

let obj = {};

if (Object.keys(obj).length === 0) {                // to check a empty obj we use this mehtod
  console.log("this is a empty obj");
} else {
  console.log("this is not a empty array");
}

let array = []

if(array.length === 0){
    console.log('this is a empty array',);        // to check a empty array we use this method
}else{
    console.log('this is not a empty array',);
}