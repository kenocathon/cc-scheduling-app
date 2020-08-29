const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
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
    trim: true,
    required: true,
  },
  payType: {
    type: String,
    required: true,
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
  listOfEmployees: [
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
    type: String,
  },
  listOfMaterials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'material',
    },
  ],
});

module.exports = mongoose.model('job', JobSchema);
