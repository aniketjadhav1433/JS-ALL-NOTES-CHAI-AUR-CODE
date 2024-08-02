let button = document.querySelectorAll(".button")
let body = document.querySelector("body")
let clicked = document.querySelector("button")

button.forEach((value)=>{
    console.log(value)
    value.addEventListener("click",(e)=>{
        console.log('e',e);
        console.log('e target',e.target);
        console.log('e id',e.target.id);
        
        if(e.target.id === "orange"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "lightcoral"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "pink"){
            body.style.backgroundColor = e.target.id
        }
        
    })
   
})

clicked.addEventListener("click",(e)=>{
    body.style.backgroundColor = "white"
})
