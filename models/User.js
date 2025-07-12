const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: { type: String },
  points: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
