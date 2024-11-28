const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName: String,
  codeCourse: String,
  typeTerm: String,
  courseDay: String,
  courseTime: String,
  deliveryMode: String,
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  birthday: String,
  department: String,
  program: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Admin'], required: true },
  courses: [CourseSchema],
});

module.exports = mongoose.model('User', UserSchema);
