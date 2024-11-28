const mongoose = require('mongoose');


const CourseSchema= new mongoose.Schema({
  IDCourse:String,
  courseName: String,
  typeTerm:String,
  codeCourse:String,
  description: String,
  courseDay: String,
  courseTime: String,
  weekDay:String,
  campus: String,
  deliveryMode: String,
  seatsAvailable:Number,
  classSize: Number,
});



const ProgramSchema = new mongoose.Schema({
  programName:{type:String, required: true},
  programType: String,
  programDescription:String,
  programCode: String,
  department:String,
  terms:[String],
  startDate: String,
  endDate:String,
  fees:Number,
  courses: [CourseSchema],
});

module.exports = mongoose.model('Program', ProgramSchema);
