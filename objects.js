// first way to create objects

let aniket = {
    fname:"jadhav",
    lname:"jadhavaa",
    age:32,
    nonsense: function(){        // we can callback a function inside a obj we cannot use arrow funcs bcz it does not support this
        return this.age
    },
    nonsense2(){
        return this.age   // this is the easy way to create a func in obj *******
    },
    greet(){
        console.log(`hello , ${this.fname} welcome to js`);
    }
}

aniket.wow="red"  // this is to add new keys in object
aniket.lname = "jadhavaaaaaa"         // we can change the value of obj like this
Object.freeze(aniket)          // this will make sure that nothing can be changed in the object
aniket.lname = "rathod"       // this will not throw any error but it will not change anything in the object

console.log('function calling nonsense',aniket.nonsense());     // this will call the func inside the obj
console.log('function calling nonsense 2',aniket.nonsense2());    // this will call the func inside the obj
console.log('greet func calling' ,aniket.greet());
console.log('aniket obj is =' ,aniket);
console.log('this will only give fname', aniket.fname);

for(let key in aniket){
    console.log('this will give the key and its value in obj',key, aniket[key]);   // the key here is the first thing of the obj e.g fname and the second thing vlaue of the key to access that we use aniket[key]
}

let objects1 = {
    1:"a",
    2:"b"
}

let objects2 = {
    3:"c",
    4:"d"
}

let objects3 = {...objects1,...objects2}  // this will concat objects1 and objcets2
console.log('objects3', objects3);


let objArr = Object.keys(aniket);   //****      // if we want values of objects in array then we will use this, this helps us to loop or perfrom other things on it
console.log('objects in array foramt',objArr);
console.log('values of objects in array',Object.values(aniket));  // we need to pass the name of the object of which we want the keys or values
console.log('keys of objects in array format',Object.keys(aniket));


console.log('',aniket.hasOwnProperty("lname"));  // this tells us wheter the object has that property or not this will only show about the key and not values



// object destructuring

let {fname: name} = aniket            // this is used so that we need to call the fname again and again the syntax will be aniket.fname always to avoid that we use destructuor the first thing is the key and after the : we can also change the name of key if not then also its fine and at last we will write the obj name
console.log('name in aniket is ',name);

let {lname} = aniket
console.log('last name in aniket is ',lname,); // in this we dint change the key name 






// objects and prototype

let obj = {
    name : "aniket",
    contact:4444,
    status:"single",
    check(){
        console.log('this is check',);
    }
}

let person = {
    contact:888
}

person.__proto__= obj

console.log('person name',person.name);












































// // the second way to create the obj is 

// let jadhav = {}

// jadhav["firstname"] = "yash";        // this will be used if we want to do it in the [] square brackets
// jadhav.age= 344;
// jadhav.lastname="yashi"


// console.log('jadhav obj',jadhav);

// // the third way to create obj is 

// let ways = new Object()

// ways.firstname  = "monty"
// ways.lastname= "golu"
// ways.greet = function(){            // we can use funcs in obj
//     return "hello world"
// }

// console.log('ways oject',ways);
// console.log('ways obj of a funcs',ways.greet());

// // objects



