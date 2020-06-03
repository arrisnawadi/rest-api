const Student = require('./../models/student')

// get all students
exports.getAllStudents = async (req, res, next) => {
  try {
    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || 100
    const skip = (page - 1) * limit

    if (req.query.page) {
      const numStudents = await Student.countDocuments()
      if (skip >= numStudents) throw new Error('This page doesn\'t exist!')
    }

    const students = await Student.find().skip(skip).limit(limit)

    res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    })
  }
}

// create new students
exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        student: newStudent
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Invalid data sent!'
    })
  }
}

// get student by ID
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    })
  }
}

// update student by ID
exports.updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    })
  }
}

// delete student by ID
exports.deleteStudent = async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success'
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err
    })
  }
}