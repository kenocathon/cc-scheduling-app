const mongoose = require('mongoose');

const JobTypeSchema = new mongoose.Schema({
  jobType: {
    type: String,
    trim: true,
    required: true,
  },
  payType: {
    type: String,
  },
  colorCode: {
    type: String,
    required: 'A color is required for each job type',
  },
  description: {
    type: String,
  }
});

module.exports = mongoose.model('jobType', JobTypeSchema);
