let heading = document.querySelector(".subHead")
let para = document.querySelector(".para")

heading.textContent= "done by chai aur code"    // this will change the text inside the heading class
heading.style.color= "orange";
heading.remove(); // this will remove the whole element



// .democlass {
    //     color: red;
    //   }
//   </style>                  set attribute explanation
  
//   <body>
//   <h1 id="myH1">The Element Object</h1>
//   <h2>The setAttribute() Method</h2>
  
//   <p>Click "Add Class" to add a class attribute to the h1 element:</p>
  
//   <button onclick="myFunction()">Add Class</button>
  
//   <script>
//   function myFunction() {
//     document.getElementById("myH1").setAttribute("class", "democlass"); 
//   }
//   </script>



// ********** inner text gives all text that is present but if any text is hidden or its display is none then it will not show us that 
// inner content gives all the text even if  it is hidden
// inner html gives all the tags and the content ***********


// all about dom
let week = document.querySelector(".week")
console.log(week.children)   // this will give us all the children of the week and it will be in html collection form
console.log(week.children[2].innerHTML); // this will give specific children which is present at 2 index that will be wednesday

week.children[1].style.color = "white"
week.children[2].style.color = "green"

console.log(week.firstElementChild); // this will give the first  child of the week
console.log(week.lastElementChild.innerHTML); // this iwll give the last child of the week 

week.firstElementChild.style.color = "orange"

// if we need all the elements then we can run loop

for (let i = 0; i < week.children.length; i++) {
    const element = week.children[i].innerHTML;         // this will give us all the elements of the week as it is a html collection we cannot use foreach loop
    console.log('elements of week',element);
}




let dayOne = document.querySelector(".day")
console.log("parent element is :",dayOne.parentElement);
console.log('this will give next element ',dayOne.nextElementSibling.innerHTML);



// create and insert any element

let div = document.createElement("div")
let main = document.querySelector(".main")

div.setAttribute("class" ,"main1")
div.setAttribute("title", "aniket")     // anything given in set attribute will come inside the div where class and id are written
div.id = "myId"
// div.className = ("secondMain wow")        // we can use only any one of the method to set classname this one or div.setattribute("class","main")

// div.innerText = "welcome to chai aur code the best js tutorial"
let node = document.createTextNode("welcome to chai aur code")   //************** this is the optimised way rather than innertext or innerhtml */
div.appendChild(node)
div.style.color ="lightcoral"
div.style.padding = "10px"
div.style.fontSize = "3rem"

main.appendChild(div)  // this will add the div inside the main tag




// optimized code that is usually used in big projects we use textnode rather than innerhtml to optimise the code

let addList = (listnames)=>{
    let li = document.createElement("li")
    let ul = document.querySelector(".unorder")

    let text = document.createTextNode(listnames)
    li.appendChild(text)
    
    // li.appendChild(document.createTextNode(listnames))        // we can use anything of the method line 89 90 or 92
    ul.appendChild(li)
    
}


addList("java")
addList("python")
addList("express js")

// ADD CLASSES TO ELEMENT

let lists = document.querySelector(".lists")
lists.classList.add("wow")  // this will add new wow class to the element 
lists.classList.remove("wow")

////

let check = document.querySelector("ol")
console.log('first',check.firstElementChild.innerHTML);
console.log('last element',check.lastElementChild.innerHTML);

let newli = document.createElement("li")
newli.innerText = "nonse"
check.appendChild(newli)

let change = document.querySelector("li:nth-child(3)")   // this will edit the value
let changed = document.createElement("li")
changed.innerText="nonsense"
change.replaceWith(changed)

// check.removeChild(check.lastElementChild)  // this will remove the first element
// check.removeChild(check.firstElementChild) // this will remove the last lelement


let h2 = document.querySelector("h2")
h2.remove()         // this will remove the whole element

// edit 






