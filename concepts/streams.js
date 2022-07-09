const fs = require('fs');
const stream = fs.createReadStream('../content/subfolder/test.txt','utf-8');
stream.on('data',(result)=>{
    console.log(result);
})