const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateOfBirth: Date,
  gender: String,
  role: String,
  pass: String,
  isApproved:{type:Boolean,default:false},
  department:{type:String,default:"None"},
  salary:{type:Number,default:0}
})

const EmpModel = mongoose.model('emp', EmployeeSchema);
module.exports = EmpModel