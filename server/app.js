const dotenv = require("dotenv");
const express = require('express');
const app = express();
const mongoose = require("mongoose");   

dotenv.config({path:'./config.env'})

//middleware
 
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no collection'));



const middleware = (req, res, next) => {
    console.log("hello my middleare");
    next();
}


app.get('/', (req, res)=> {
    res.send('hello world form the server');     
});
app.get('/about',middleware, (req, res)=> {
    res.send('hello about world form the server');     
});
app.get('/contact', (req, res)=> {
    res.send('hello contact world form the server');     
});
app.get('/signin', (req, res)=> {
    res.send('hello signin world form the server');     
});
app.get('/signup', (req, res)=> {
    res.send('hello signup world form the server');     
});

app.listen(3000, ()=> {
    console.log('server is running at 3000');
})

console.log("subscribe to my channel");