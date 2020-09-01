const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    required: 'Please select a customer for this job. ',
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
    type: String,
    enum: ['Daily', 'Hourly', 'Salary'],
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
    },
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
    vendorName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vendor',
    },
  },
  listOfSavedMaterials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'material',
    },
  ],
  addedMaterials: [
    {
      type: String,
      trim: true,
    },
  ],
  notes: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Unscheduled', 'Complete'],
  },
});

module.exports = mongoose.model('job', JobSchema);
