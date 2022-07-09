const express = require('express')
const app = express()
const colors = require('./data')

//req=>middleware=>res
app.get('/',(req,res)=>{
   // res.json(colors)
   res.send('<h1>Hey There!!!!</h1><a href="/api/colors">Know more</a>')
})

app.get('/api/colors',(req,res)=>{
    const newColors = colors.map(colordata=>{
        const {id,color,value} = colordata;
        return {id,color,value}

    })
   res.json(newColors)
})

app.get('/api/colors/:colorID',(req,res)=>{
    console.log(req.params);
    const {colorID} = req.params;
    const singleColor = colors.find(color=>color.id===Number(colorID))
    if(!singleColor){
        return res.status(404).send('Color Does Not Exist')
    }
    res.json(singleColor)
})
app.listen(9000,()=>{
    console.log('Server is listening on port 9000');
})