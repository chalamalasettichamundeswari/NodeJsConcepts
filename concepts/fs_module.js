const fs= require('fs')

// const first = fs.readFileSync('../content/subfolder/test.txt','utf-8');
// console.log(first)
// //Output:Welcome
// fs.writeFileSync('../content/subfolder/test.txt',`\n Hey Hello,How are you ${first}`);
// console.log(fs.readFileSync('../content/subfolder/test.txt','utf-8'));
// //Output: Hey Hello,How are you Welcome
// console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
// fs.readFile('../content/subfolder/test.txt','utf8',(err,result)=>{
//  if(err){
//     console.log(err)
//     return;
//  }
//  console.log(result);
// });
// //Output: Hey Hello,How are you heyyyyyyyyyyyy

const getText = (path) =>{
   return new Promise((resolve,reject)=>{
      fs.readFile(path,'utf8',(err,result)=>{
         if(err){
            reject(err);
         }else{
            resolve(result)
         }
        });
   });
}

// getText('../content/subfolder/tesu.txt').then(result=>{
//    console.log(result);
// }).catch(error=>{
//    console.log(error);
// });

const start = async() =>{
   try{
    const txt = await getText('../content/subfolder/test.txt');
    console.log(txt);
   }catch(err){
      console.log(err);
   }
}
start();
