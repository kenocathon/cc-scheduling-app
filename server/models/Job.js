const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    required: 'Please select a customer for this job. '
  },
  location: {
    street: {
      type: String,
      trim: true,
    },
    lotNumber: {
      type: String,
      trim: true,
    },
    subdivision: {
      type: String,
      trim: true,
    },
  },
  jobType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobType'
  },
  scheduledDate: {
    type: Date,
  },
  completedDate: {
    type: Date,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  scheduledEmployees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    }
  ],
  employeesThatWorked: [
    {
      employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
      },
      timeOnJob: {
        type: String,
      },
    },
  ],
  vendor: {
    vendorName:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vendor'
    },
  },
  listOfMaterials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'material',
    },
  ],
  notes: {
    type: String,
  }
});

module.exports = mongoose.model('job', JobSchema);
