const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateOfBirth: Date,
  gender: String,
  role: String,
  pass: String
})

const EmpModel = mongoose.model('emp', EmployeeSchema);
module.exports = EmpModel