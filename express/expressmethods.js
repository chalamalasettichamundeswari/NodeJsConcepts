const express = require('express')
const app = express()
const people = require('./samplejson')

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
console.log(__dirname)

app.post('/login',(req,res)=>{
    res.send('POST')
})

app.listen(7000,()=>{
    console.log('Server is listening on port 7000.......');
})
