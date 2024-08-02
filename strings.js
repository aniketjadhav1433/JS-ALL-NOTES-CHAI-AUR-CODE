// stings are immutable
let fname = "aniketAAA"
let lname = " jadhav"
let just  = "the method"
let voidWord = "         wow    aniket        "
let ans = voidWord.trim();
console.log('trim value',ans);

console.log('this will show the length of the string', fname.length);
console.log('this makes sure that the part is extracted from the string it will always give the end vlaue -1 =',fname.slice(0,4));
console.log('this will replace the word you want to but this will only replace one value = ', fname.replace("a", "s"));
console.log('this will replace all the word you want to  =', fname.replaceAll("a", "s"));
console.log('this will uppercase all the words =',fname.toLocaleUpperCase());
console.log('this will lowercase all the words =',fname.toLocaleLowerCase());
console.log('this will concat / add the string  =', fname.concat(lname));
console.log('this will concat / add the string = ',"hello ".concat(fname) );
console.log('this will make sure that all the void spaces are removed from starting and end =',voidWord.trim());
console.log('this will make show what is the character at 2 index =',fname.charAt(2));

let text = "How are you doing today?";
const myArray = text.split(" ");  //split() splits a string into an array of substrings, and returns the array.
console.log('the second word is:',myArray[1]);


let greetings = " how are you nonsense how are you?";

console.log('this will show where the word is present and at what index', greetings.indexOf("nonsense"));
console.log('this will show where the index is of the string from the last word',greetings.lastIndexOf("how"));
console.log('this will search whether the word is present or not ',greetings.search("why"));
console.log('this will see if the word matches with the string or not it will check the first word only',greetings.match("how"));
console.log('this will see if the word matches with the string or not it will check for all the words',Array.from(greetings.matchAll("how"))); 

let fourth = [...fname,...lname]  // this is also the mehtod to concate two strings
console.log('fouth',fourth);









