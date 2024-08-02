// try
// catch
// finally

let x = 88;

try{
    let result  = y*2;
    console.log('',result);      // if anything is wrong then catch will show the error
}catch(err){
//   throw err                   // this will tell what the error is with the red text format 
  console.log('',err.name);      // this will just show the error in normal form without showing red thing
  
}finally{
    console.log('failed to load',);    // this will work always whether there is error or not
}