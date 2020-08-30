const mongoose = require('mongoose');

const EmployeeSchema = new.mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last name is required',
  },
  jobsWorked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job',
    }
  ]
});

module.exports = mongoose.model('employee', EmployeeSchema);
