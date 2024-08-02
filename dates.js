// dates in js 

let currentTime = new Date();
console.log('',currentTime);

let currentTiUnix = currentTime.getTime(); // this gives 10 digit number that can be converted to see the time
console.log(currentTiUnix);

let currentMOnth = currentTime.getMonth();  // if the month is june then it will show 5 bcz the january is treated as 0 and same to date also
console.log(currentMOnth)

let currentday = currentTime.getDay();
console.log(currentday);

let localDate = currentTime.toLocaleString()
console.log('localdate',localDate);


let date = document.querySelector(".date");
date.innerHTML=`<h1>  ${currentTime} </h1> <br> <h2> LOCAL DATE AND TIME = ${localDate} </h2>`;