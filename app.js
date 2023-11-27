const express = require('express')
const mongoose = require('mongoose')
const app = express()
const guest = require('./routes/guest')
const methodOverride = require('method-override')
const engine = require('consolidate')
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

//to allow taking the input as url or body
app.use(express.urlencoded({ extended: true }))
// to make it able to take the files(.css, images,...etc.) from the views directory
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/views/assets'))
app.engine('html', engine.mustache);
app.set('view engine', 'html')
app.use('/', guest)


app.listen(3000, () => console.log('express started'))