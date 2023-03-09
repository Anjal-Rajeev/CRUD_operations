const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = new express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(logger('dev'))


require('dotenv').config()
require('./middlewares/mongoDB')


const PORT = process.env.PORT || 3000


const studentApi = require('./routes/studentApi')
app.use('/student', studentApi) 
  



app.listen(PORT, ()=>{
    console.log(`---------Server running on PORT ${PORT}--------`);
}) 