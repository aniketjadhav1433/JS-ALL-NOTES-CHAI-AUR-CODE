let images = document.querySelector(".images")
let flower = document.querySelector(".image2")
let google = document.querySelector(".google")

// images.addEventListener("click", (e)=>{
//     console.log('images clicked',);
// },false)     // the third parameter false is deafult
  
// flower.addEventListener("click",(e)=>{
//     console.log('flower clicked',);     //this will perform bubbling first we will see flower clicked and then images clicked bcz it goes from inside to outside
// },false)



// images.addEventListener("click", (e)=>{
//     console.log('images clicked',);
// },true)    

// flower.addEventListener("click",(e)=>{      // now this will not perform bubbling it will come from outside to inside first images clicked will appear then flower clicked will appear
//     console.log('flower clicked',);
// },true)



images.addEventListener("click", (e)=>{
    console.log('images clicked',);
})    

flower.addEventListener("click",(e)=>{    
    console.log('flower clicked',);
    // e.stopPropagation()            // by doing this now images clicked will not appear
})

google.addEventListener("click",(e)=>{
    console.log('google clicked',);
    // e.stopPropagation()
    e.preventDefault()          // this prevents the default behaviour of element , now this will not take us to the google website
})


 images.addEventListener("click", (e)=>{ 
    console.log('e. tag name',e.target.tagName);  // this will give the name of the tag we clicked

    if(e.target.tagName === "IMG"){
        let remove = e.target.parentNode        // if we dont use if else then when we will click to li all the images will removed bcz the parent of li is ul
        remove.remove()                         
    }
})                                          
     
