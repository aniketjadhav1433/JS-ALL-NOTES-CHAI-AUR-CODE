// for loop

// for arrays


let arr = ["aniket", "prem", "yash", "maddy"]

for(i = 0; i < arr.length; i++){                  // we use arr.length so that it counts the length of the arr aniket prem yash maddy 
    console.log('all the values of array', arr[i]);
    
}

// for string

let fname = "aniketjadhav"

for(i = 0; i< fname.length; i++){
    // console.log('character of fname is', fname[i]  +  [i]);
    console.log(`character of fname is = ${fname[i]} index of fname is = ${[i]}`);
    
}

// for each loop (it is used for arrays only)

let lname = ["jadhav", "gondhale", "atole" , "tripati" ]

lname.forEach((wow, nice)=>{
    console.log('item wow =', wow);   // name doesnt matter the first argument is item and second is index
    console.log('index nice = ',nice);
    
})

lname.forEach(function(item, index, arr){   // the arguments first have the item and then the index we can give any name to it and the last we also have the whole array
    console.log(`item is : ${item}, index is :${index} and the array is : ${arr}`);
})


// while loop

let j = 0;

while (j < 10){
    console.log(j);
    j++;
}

// do while loop 

let y = 0;

do {
    console.log('',y);  // in do while this code will executed once even if the condition is true or not
    y++;
    
} while (y <=-10) ;


// for of loop  // it is mostly used for strings we can also use it for arrays but we have foreach loop for that

let str = "aniketjadhav1433"

for (let i of str) {
    console.log('letters of str', i);
}

let newArr = [34, 42,34,55,43]

for (let i of newArr) {
    console.log('',i);
}

// for in loop   // it is mostly used for objects to itterate

let newObj = {
    name:"aniket",
    job:"reels",
    relation:"akhantSingle"
}

for(let key in newObj){    // key means name job relation we can name it anything we want
    console.log(key , newObj[key]);
    
}


// for loop

for (let i = 1; i <=10; i++) {
    console.log('the value of i is ',i );
}


for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log('5 is detected',);
        break                            // break will now not iterate till 20 it will stop at 5 only
    }
    console.log('the value of i is ',i );
}


for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log('5 is detected',);
        continue                            // contine will let you iterate in the loop but it will escape one iteration , here the escape iteration will be 5
    }
    console.log('the value of i is ',i );
}


let greetings = ( "hello aniket!   ")
greetings = greetings.trim()

for (let greet of greetings) {
    console.log(`the greetings is : ${greet}`);
}




