// math
 
// in math random we will always get values btwn 0 to 1 

console.log('this will make the values come in numbers from 0 to 10',Math.floor(Math.random()*10));


console.log('math floor gives the number without decimal',Math.floor(10004.4444));
console.log('math random gives random values',Math.random()*100);
console.log('math pow gives the power to value',Math.pow(4,3));
console.log('math sqrt gives the squre root ',Math.sqrt(256));
console.log('math round rounds up the value basically removes decimal',Math.round(44.05));



// numbers

let num = 444

console.log('num ',num.toFixed(2));   // we use this bcz if we have number that comes in decimal and its decimal value is more than 4 or 5 etc then to make sure that the decimal is not more than 1 or 2 then we use tofixed and give the value 1 or 2 etc

let hundred = 49999999

console.log('hundred',hundred.toLocaleString("en-IN"));   // this will give the commas to the value we use en-IN to get it in indian format the default format is not indian





