const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

// connect to mongoDb
mongoose.connect('mongodb://localhost/studentSchool')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// initialize routes
app.use('/api', routes)

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('running on port: 4000')
})

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message })
})