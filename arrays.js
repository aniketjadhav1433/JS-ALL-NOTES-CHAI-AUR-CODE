// arrays

let cars = ["volvo", "RX 100", "fortuner"];

cars[2] = "legender"    // we can change the vlaue of the arrays using this

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);  // this will take time to see all the vlaues using this method 

cars.splice(2,2,"kanmani")          // we use splice to change the array explanatin in depth in below
console.log(cars);


cars.forEach((item,idx)=>{               // for the iteration of the arrays
    console.log('items and their index', item , idx);
    if(item === "kanmani"){
        cars[idx] = "fortuner";
    }
    
})

console.log('cars',cars);



// another way to create arrays 

let movies = new Array ("aavesham", "manjumel boys" , "premalu");   // second way to create arrays we can create arrays this way it will not require[] this it will work with paranthesis
let age = [23,34,444];
let mixed = [movies, age]                                           // we can have arrays inside a array

// console.log('movies array ', movies);
movies.forEach((item,idx)=>{
    console.log('item and idx', item, idx);
    if(item === "aavesham"){                // we can use this to change the value of array
        movies[idx] = "kanmani"
    }
    // movies[2] = "bhola aashiq"
})

console.log('edited movies', movies);
console.log('mixed arrays', mixed);

mixed.forEach((item)=>{
    console.log('items', item);
    
})


// concatination and sorting of arrays                   

let arr1 = [4,4,4,4,333,55]
let arr2 = [99,94,33,54]

let arr3 = arr1.concat(arr2);                         // we use concat to joint 2 or more than 2 arrays
console.log('arr3 this will give concat array',arr3);

let fruits = ["apple", "bada apple" , "donut apple" , "chota apple"];
console.log('fruits',fruits);                        // this will be printed as it is


fruits.sort()                                        // this will make them in alphabetical order
console.log('sorted fruits', fruits);


let axis = [44, 4.4, 2.3, 444];
console.log('axis ', axis);

axis.sort((a,b)=>{ return a-b })                             // this is the mehtod to arrange the number in ascending order 
console.log('the ascended axis ',axis);

axis.sort((a,b)=>{ return b-a })                             // this is the mehtod to arrange the number in descending order 
console.log('the descending axis ',axis);


// splice and slice 

let non = [1,2,3,4];
console.log('non',non);


non.splice(4,0,5,6,7,8)                   // we use this to add the values in arrays the first index is from where to start the second is till where to go and third are the values we want to add
console.log('splice non', non);


let splicedNon = non.slice(0,5)           //*note = slice cant change the og value       // this will take the part out of the array the first index is from where to start and second is where to stop
console.log('non  slice',splicedNon);



// more methods of arrays

let normal = [34,43,43,"wow"]
console.log('normal',normal);
console.log('reverse normal ',normal.reverse());   // reverse method reverses all the values of arrays


normal.push(33,"shree ram")        // this will add the values in the array at the end
console.log('push array',normal);

normal.pop()
console.log('pop normal',normal); // this will remove the last value in the array

normal.shift()
console.log('shift normal',normal); // this will remove the first element or value in the array


normal.unshift("jai shree ram")   // this will insert the value at the start
console.log('unshift normal',normal);

console.log('includes',normal.includes("jai shree ram"));   // this will check whether the vlaue is present or not


console.log(normal);
console.log('index of ',normal.indexOf("jai shree ram"));  // this will show the index of that value 

let newNormal = normal.join("")          // this will convert all the arrays in the form of string
console.log('new normal = ',newNormal);

let first = {
    name:"jadhav",
    age:19,
    caste:"hindu"
}
let second = 200
let third = 300

let fourth = Array.of(first,second,third)  // this will convert any number or object to array by use of array.of  we can convert multiple number or anything at one time
console.log('fourth',fourth);



let anik = Array.from("aniket nonsense")         // this will convert anything to array
console.log('anik',anik);


let multiple = [4,4,3,[5,33,2],[4,56,654,[4,4,3,2]]]         // this is the array inside a array
console.log('multiple arrays',multiple.flat(Infinity));     // this makes sure that all the arrays come in one array and not one inside one



// spread operator

let oneArray = ['nice', 'bad', 'tp', "wow"]
let twoArray = ["aniket ", "jadhav"]     
let thirdArray = ["nice"]    

// now if we wan to concat it we can use concat method but we also have spread method

let fouthArray = [...oneArray,...twoArray, ...thirdArray]        // spread method has ... and in this we can concat as much array we want in concat we can only concat two arrays

console.log('fourth array using spread',fouthArray);
console.log('check array',Array.isArray(fouthArray));  // this will check whether it is a array or not



// looping objects in array

let newArray  = [
    {
        firstname:"java",
        lastname:"java"
    },
    {
        firstname:"javascript",
        lastname:"js"
    },
    {
        firstname:"python",
        lastname:"py"
    }
]

newArray.forEach( (item)=>{
    console.log('first name is',item.firstname);
    console.log('first name is',item.lastname);
    
} )




