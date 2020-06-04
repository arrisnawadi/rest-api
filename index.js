const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// import API routes
const apiRoutes = require('./routes/api')

// import error handler
const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')

// set up express app
const app = express()

// connect to mongoDb
mongoose.connect('mongodb://localhost/studentSchool')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// initialize routes
app.use('/api', apiRoutes)

// error handling middleware
app.get('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

// listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('running on port: 3000')
})