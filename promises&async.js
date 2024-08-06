console.log('hey',);
console.log('hey 2',);
setTimeout(() => {
    console.log("hey 3")       // in this code hey 3 will be printed after hey 4 bcz the main stack will only take the sync code then it will ask the side stack that are u ready and then only it will be moved to main stack
}, 0);
console.log('hey 4',);


// now if we need to run the promises in sync order
//1.eat
//2.reel
//3.game
//4. sleep

let p = new Promise((resolve,reject)=>{
    resolve("eat")
})

let p2 = p.then((data)=>{
    console.log('data is ',data);     // p will have eat data
    return new Promise((resolve, reject) => {
        resolve ("reel")    // this wil be p2 ka data
    })
})

let p3 = p2.then((data)=>{
    console.log('data is',data);
    return new Promise((resolve, reject) => {      
        resolve("game")       // this will be p3's data
    })
})

let p4 = p3.then((data)=>{
    console.log('data is',data);
    return new Promise((resolve, reject) => {
        resolve("sleep")     // this will be p4's data
    })
})

p4.then((data)=>{
    console.log('data is ',data);
    
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('this is solved promise one');
        resolve()
    },1000)
})
.then(()=>{
    console.log('problem resolved one',);   // this code executes after the promise code gets executed
    
})
.catch(()=>{
    console.log('this is the error',);
})
.finally(()=>{
    console.log('this will always execute ',);
    
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('this is the second promise',);
        resolve({user:"aniket",no:4232})
    }, 2000);
})
.then((resolveVal)=>{                 // in this prameter we get the value of the resolve
    console.log('the resolve val is promise two ',resolveVal);
})

let promise3 = new Promise((resolve, reject) => {
    let dummy = false
    if (!dummy) {
        setTimeout(() => {
            console.log('this will execute when it is resolved third promise',);
            resolve()
        }, 3000);
        
    } else {
        console.log('this will execute if it is rejected third promise',);
        reject()
    }
})
.then(()=>{
    console.log('resolve executed',);
})
.catch(()=>{
    console.log('reject executed',);
    
})

let promise4 = new Promise((resolve, reject) => {
    let error = false
    if (!error) {
        setTimeout(() => {
            console.log('fourth promise',);
            
            resolve({name:"aniket",life:"unstable"})
        }, 4000);
        
    } else {
        console.log('this will execute if it is rejected fourth promise',);
        reject("ERROR : SOMETHING WENT WRONG")
    }
})
// .then((user)=>{              // this parameter have the value of resolve
//     console.log('resolve value',user);
//     return user.name
// })
// .then((username)=>{          // this now has the value of the return
//     console.log('username',username);
    
// })
// .catch((user)=>{            // this parameter has the vlaue of reject
//     console.log('reject vlaue',user); 
// })


// async function just() {
//     let result = await promise4
//     console.log('result is  just wala',result);
//     let result2 = await result.name
//     console.log('result 2 of just is',result2);
// }

// just()

let promise5 = new Promise((resolve, reject) => {
    let error = false
    if (!error) {
        setTimeout(() => {
            console.log('js resolved fifth promise',);
            
            resolve({name:"javascript",life:"mast"})            // *********** we can also handle promises with asynce await
        }, 2000);
        
    } else {
        console.log('this will execute if it is rejected',);
        reject("ERROR : SOMETHING WENT WRONG")
    }
})

async function promisefive(){
    try{
        let response = await promise5
        console.log('response',response);
    }catch(err){
        console.log('error',err);
    }
}

promisefive()




// to avoid then we use async and await 


// let rand = new Promise((resolve, reject) => {
//     fetch(`https://randomuser.me/api/`)
//     .then((raw)=>{
//        return raw.json()
//     }).then((ans)=>{
//         console.log('this is by promises',ans);
//     })
// })

async function random(){
    try{
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json()
    console.log('ans is ',ans);
   }catch(err){
    console.log('this is the error',err);
   }
}

random()

