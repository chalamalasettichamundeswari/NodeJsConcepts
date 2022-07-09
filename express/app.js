const express = require('express')
const path = require('path')

const app = express();

//setup static and middleware
app.use(express.static('../http/public'))

// app.get('/',(req,res)=>{
//  res.sendFile(path.resolve(__dirname,'../http/index.html'))
//  adding to static assets
// })

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(4000,()=>{
    console.log('server is listening on port 5000');
})

// app.put
// app.post
// app.get
// app.delete
// app.all
// app.use
// app.listen