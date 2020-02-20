const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

//Connect mongodb via mongoose
mongoose.connect('mongodb://localhost/biolink');

//dotenv config
require('dotenv').config()

//Routes
const indexRoute = require('./routes/index')
const userRoute = require('./routes/users')
const linkRoute = require('./routes/links')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Cors
const corsOptions = {
    exposedHeaders: 'x-auth-token',
  };
app.use(cors(corsOptions))

app.use('/', indexRoute)
app.use('/users', userRoute)
app.use('/links', linkRoute)

app.listen('3000', function(){
    console.log('connected to port 3000')
})