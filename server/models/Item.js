const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isApproved: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Item', itemSchema);
