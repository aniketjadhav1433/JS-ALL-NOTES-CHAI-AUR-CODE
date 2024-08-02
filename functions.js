// functions

function aniket() {
  console.log("this is a function");
}

aniket();

function add(fname = "customer") {
  // we can pass arguments in the brackets and give it while we call them
  console.log("hello " + fname);
}

add("aniket");
add("jadhav");
add(); // this will take the customer bcz it is not giving the parameter , if no parameter is passed it will take the value from the argument

function check(age) {
  console.log('desparate to check whether you are a voter or not',);
  
  return age > 18 ? "you are a voter" : "you are not a voter";     // we cannot write anything after return it will not be executed
}

console.log("", check(4));

// anonymous function

let wow = function (marks) {
  // in anonymous function name is not given but we need to assign it in a varaiable

  if (marks % 2 === 0) {
    console.log("passed"); // if we use this then we will directly call the function
  } else {
    console.log("failed");
  }
};

wow(87); // for if else

let marking = function (score) {
  return score % 2 === 0 ? "passed" : "failed"; // if we use this then we need to write the function in console
};

console.log("this is for return",marking(88)); // this is for return


//ES6 arrow function

let arrow = (first, last)=>{             // these are the parameters
    console.log(first + " " + last);
}

arrow("aniket from arrow", "jadhav from arrow fncs")  // these are the arguments



function username(name){
  if(name === undefined){              // if we need to make sure that there should be no empty thing in the name then we can define its value with this we will need not write the if else code
    console.log('please write the username');
    return                                      // we will write return bcz now the next line will never be executed if we dont write this then next line will be executed
  }
  return `${name} just logged in`
}

// console.log('',username());          // if return is not there then it will show undefined logged in to avoid that we will use return
console.log('',username("aniket jadhav"));


function addCart(...numb){              // this will be called rest operator here it is called spread operator when we concat , rest is use when we dont know how much values are going to come in the parameter
  return numb.reduce((acc,curr)=>{
     return acc + curr
  },0)
}

console.log('addcart',addCart(3,3,3,3,3,3,5,1,1));

// func extracting obj and array

let data ={
  non:"wow",
  none:"nice"
}


function extract(anyobj){             // this function will give us the objects we will write the parameter in the return or console but while calling the func we will give the object name
  console.log( `non is ${anyobj.non} and none is ${anyobj.none} `);
}

extract(data)


let newarr = [3,5,2,5,1]

function arrCall(arrFetch){
  console.log(`the values of array is ${arrFetch}`);
  
}

arrCall(newarr[2])

// immediately invoked function

(function chai(string){
  console.log('the will execute',string);    // this is named iffe
  
})("aniket");        // **************** we need to give semicolon in iffe bcz it will not run another iffe then **********

//iffe is ()()  in first bracket we will give the function and in second one we will give if any parameter needed

( (num)=>{
  console.log('the will also execute',num);
} )(4)      // if we need to pass any argument we will pass it here






