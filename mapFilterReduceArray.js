let books = [
  { book: "book 1", genre: "science", published: 2002, edition: 1900 },
  { book: "book 1", genre: "HISTORY", published: 2004, edition: 1800 },
  { book: "book 1", genre: "science", published: 2006, edition: 1700 },
  { book: "book 1", genre: "fiction", published: 2007, edition: 1500 },
  { book: "book 1", genre: "non-fiction", published: 2000, edition: 1300 },
  { book: "book 1", genre: "science", published: 2012, edition: 1200 },
];

// filter method

console.log(books.genre);
let filteredEdition = books.filter((items) => {             // we use filter to perform different conditons on the array filter has the parameter that containes items that shows all the values of the array
  return items.edition >= 1700;
});

let filteredGenre = books.filter((item) => {
  return item.genre === "science"
}).filter( (item) =>{                                       // we can use chaining in the array like we can use filter on filter
    return item.published === 2012;   
} );


console.log("filtered edition", filteredEdition);
console.log("filtered genre", filteredGenre);

// map method

let number = [3, 4, 5, 6, 7, 8, 9];

let mapped = number
  .map((item) => {                                   // in map we cannot perform any conditional events like === or less than etc
    return item * 10;
  }).filter((item) => {                              // we can chain or use the map or filter mehtod at one time on the same array
    return item >= 50;
  });

console.log("mapped values", mapped);


// reduce method 

let additon = [4,5,6,7,8,9]

let added = additon.reduce( (acc, currVal) => {         // in reduce method we have 2 parameter one is accumulator which has the value that we give bcz it itterates so it dosent has any value at starting the second is current value that is the values of array 
    return acc + currVal
},0)                                                    // we give value of accumulator so that in staring the so that the itteration starts with that number

console.log("added",added);


let shopping = [
    {
        course: "python",
        price:999
    },
    {
        course:"java",
        price:1999
    },
    {
        course:"java script",
        price:2999
    },
]

let cart = shopping.reduce( (accu, curr)=>{
    return accu + curr.price
} ,0)

console.log('the cart value is',cart);

