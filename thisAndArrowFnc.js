let user={
    username:"aniket",
    price:999,

    welcomeMessage(){
        console.log(`${this.username}, welcome to the website`);   // the context of this keyword here is user
    }
}

console.log(user)
user.welcomeMessage()
user.username= "jadhav"
user.welcomeMessage()
console.log('',this);   // the context of this keyword here is window in google console and in node it is empty braces


function chai(){
    let username = "aniket jadhav"
    console.log('',this.username);  // we cannot use this keyword in functions***********
    
}

// chai()

// arrow function 

// method 1 

let add = (num1 , num2)=>{
    return num1 + num2
}
console.log('',add(4,4));

// method 2

let addtwo = (num3, num4)=> (num3 + num4)  // no need to write return keyword if it is in brackets, in curly braces it is needed for return keyword
console.log('addtwo',addtwo(4,9));

let obj = ()=>({username:"aniket"})  //  this method will retun object

console.log('obj',obj());

// method 3

let addThree = (num5, num6) => num5 + num6   // no need to write return keyword if we write this in one line
console.log('add three',addThree(4,99));





// adding all the numbers code

let addAll = (...num)=>{
    return num.reduce( (acc, curr)=>{
        return acc + curr
    },0 )
}



console.log('add all function',addAll(4,4,3,3,2,1111));


