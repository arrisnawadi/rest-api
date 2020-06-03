const express = require('express')
const router = express.Router()
const studentController = require('./../controllers/studentController')

// get all student from db
router.get('/students', studentController.getAllStudents)

// get a student from db
router.get('/students/:id', studentController.getStudent)

// add new data to db
router.post('/students', studentController.createStudent)

// update data in the db
router.patch('/students/:id', studentController.updateStudent)

// delete data in the db
router.delete('/students/:id', studentController.deleteStudent)

module.exports = router