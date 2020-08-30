const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    trim: true,
    required: 'Company Name is required'
  },
  contact: {
    name: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      trim: true
    }
  },
})

module.exports = mongoose.model('vendor', VendorSchema);
