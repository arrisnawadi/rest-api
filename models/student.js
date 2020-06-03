const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  age: {
    type: Number
  },
  address: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentSchema)