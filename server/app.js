const express = require('express');
const app = express()
const cors =require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
mongoose.connect('mongodb://localhost/ecommerces')
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const items = require('./routes/item')

app.use('/item',items)

app.listen(port,()=>{
  console.log('port 3000');
});
