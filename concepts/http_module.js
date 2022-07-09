const http = require('http')

const server = http.createServer((req,res)=>{
 console.log(req);
 if(req.url==="/"){
     res.end('Welcome to our home page')
 }
 if(req.url==="/about"){
     for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            console.log(`${i} ${j}`);
        }
     }
    res.end('Here is our short history')
}
})
server.listen(8009,()=>{
    console.log('Server is listening on port 5000....');
})