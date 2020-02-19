const express = require('express')
const mongoose = require('mongoose');

//Connect mongodb via mongoose
mongoose.connect('mongodb://localhost/biolink');

const User = require('./models/User.js')
const Link = require('./models/Link.js')

//dotenv config
require('dotenv').config()

const app = express()
app.set('view engine', 'ejs');

//Public folder for CSS
app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/:username', function(req, res) {
    let data = {}

    User.findOne({username: req.params.username})
        .then(function(user) {
            data.user = user
            return Link.find({username: req.params.username})
        })
        .then(function(links) {
            data.links = links
            if (!data.user) {
                res.render('404')
            }
            if (!data.links) {
                data.links = []
            }
            res.render('userlink', {data: data})
        })
        .catch(function(error) {
            res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            })
        })
})

app.listen('3000', function(){
    console.log('connected to port 3000')
})