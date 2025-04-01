const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  profileImage: { type: String },

  department: { type: String, required: true },
  designation: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  employmentType: { type: String, enum: ['Full-time', 'Part-time', 'Contract'], required: true },
  salary: { type: Number, required: true },
  bankDetails: {
    bankName: String,
    accountNumber: String,
    IFSC: String
  },
  status: { type: String, enum: ['Active', 'Inactive', 'Terminated'], default: 'Active' },

  attendance: [
    {
      date: Date,
      status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Absent' },
      checkIn: String,
      checkOut: String
    }
  ],
  leaveBalance: {
    annualLeave: { type: Number, default: 12 },
    sickLeave: { type: Number, default: 10 },
    casualLeave: { type: Number, default: 8 }
  },
  leaveRecords: [
    {
      startDate: Date,
      endDate: Date,
      leaveType: { type: String, enum: ['Annual', 'Sick', 'Casual', 'Other'] },
      status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
    }
  ],

  performanceReviews: [
    {
      date: Date,
      rating: { type: Number, min: 1, max: 5 },
      feedback: String
    }
  ],
  projectsAssigned: [
    {
      projectId: mongoose.Schema.Types.ObjectId,
      projectName: String,
      role: String,
      status: { type: String, enum: ['Ongoing', 'Completed', 'On Hold'] }
    }
  ],

  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Employee', 'Manager'], required: true },
  permissions: [String]
}, { timestamps: true });

module.exports = mongoose.model('emp', EmployeeSchema);