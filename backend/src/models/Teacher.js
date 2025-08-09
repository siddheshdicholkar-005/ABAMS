const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  employeeId: { type: String, required: true, unique: true },
  department: { type: String },
  qualification: { type: String },
  experience: { type: Number },
  roles: {
    isHOD: { type: Boolean, default: false },
    isClassCoordinator: { type: Boolean, default: false },
    isSubjectTeacher: { type: Boolean, default: true }
  },
  subjects: [{ type: String }],
  assignedClasses: [{ type: String }],
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Teacher', teacherSchema);
