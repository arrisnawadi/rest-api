const Student = require('./../models/student')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')

// get all students
exports.getAllStudents = catchAsync(async (req, res, next) => {
  // set up pagination
  const page = req.query.page * 1 || 1
  const limit = req.query.limit * 1 || 100
  const skip = (page - 1) * limit

  const students = await Student.find().skip(skip).limit(limit)

  // throw error when page over total students
  if (req.query.page) {
    const numStudents = await Student.countDocuments()
    if (skip >= numStudents) return next(new AppError('This page doesn\'t exist!', 404))
  }

  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  })
})

// create new students
exports.createStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Student.create(req.body)

  res.status(201).json({
    status: 'success',
    data: {
      student: newStudent
    }
  })
})

// get student by ID
exports.getStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findById(req.params.id)

  // throw error when id not found
  if (!student) {
    return next(new AppError(`Can\'t find student with ID '${req.params.id}'!`, 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  })
})

// update student by ID
exports.updateStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  // throw error when id not found
  if (!student) {
    return next(new AppError(`Can\'t find student with ID '${req.params.id}'!`, 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  })
})

// delete student by ID
exports.deleteStudent = catchAsync(async (req, res, next) => {
  await Student.findByIdAndDelete(req.params.id)

  // throw error when id not found
  if (!student) {
    return next(new AppError(`Can\'t find student with ID '${req.params.id}'!`, 404))
  }

  res.status(204).json({
    status: 'success'
  })
})