const express = require('express');
const http=require('http')
const fs=require('fs');
const bodyParser = require('body-parser');

const app=express();

const port=9080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const routes=require('./routes/products');
app.use('/',routes)

// const routesOrder=require('./routes/orders');
// app.use('/orders/',routesOrder)



app.listen(port,()=>{
console.log("Listening Port!! "+port);
});
