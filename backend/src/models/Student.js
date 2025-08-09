const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: String, required: true, unique: true },
  class: { type: String },
  section: { type: String },
  rollNumber: { type: String },
  admissionYear: { type: Number },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
