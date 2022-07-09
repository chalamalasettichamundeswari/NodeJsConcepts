const express = require('express')
const app = express()
const logger = require('./loggermiddeware')
const authorize = require('./authorize')
const morgan = require('morgan')
// app.use([logger,authorize])->instead of this use morgan for logger
app.use(morgan('tiny'))


//req=>middleware=>res
//first middleware function
//app.use(logger) //instead of passing logger as argument in everyfunc use this usefunc
//app.use('/api',logger) //api/home/about/contact
//app.get('/',logger,(req,res)=>{
 //   res.send('Home')
//})

//Here order matters 
//place app.use above all app.get (or) routes in order to see details on the console
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Us</h1>')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})