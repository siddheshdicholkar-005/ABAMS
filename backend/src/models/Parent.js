const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  occupation: { type: String },
  relationship: { type: String, enum: ['father', 'mother', 'guardian'] },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Parent', parentSchema);
