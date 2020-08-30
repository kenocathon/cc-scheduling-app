const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  materialName: {
    type: String,
    trim: true,
    required: "Material name is required"
  },
  materialCost: {
    type: String,
    trim: true,
  },
  vendorName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vendor'
  },
})