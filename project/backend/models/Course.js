const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  studentsEnrolled: { type: Number, default: 0 },
});

module.exports = mongoose.model('Course', CourseSchema);
