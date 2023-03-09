const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = new express()    // creating an instance of express

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(logger('dev'))


require('dotenv').config()
require('./middlewares/mongoDB')    // database connection


const PORT = process.env.PORT || 3000   


const studentApi = require('./routes/studentApi')  // api calls with "/student" in it will be redirect to studentApi 
app.use('/student', studentApi) 
  



app.listen(PORT, ()=>{
    console.log(`---------Server running on PORT ${PORT}--------`);
}) 