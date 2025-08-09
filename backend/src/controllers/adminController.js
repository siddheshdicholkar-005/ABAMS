const Teacher = require('../models/Teacher');
const User = require('../models/User');

// Get all teachers for admin to manage
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().populate('userId', 'username fullName email');
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update teacher roles
const updateTeacherRoles = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { roles } = req.body;
    
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    teacher.roles = { ...teacher.roles, ...roles };
    teacher.assignedBy = req.body.adminId; // You can get this from JWT token in production
    
    await teacher.save();
    
    // Populate user data for response
    await teacher.populate('userId', 'username fullName email');
    
    res.json({ 
      message: 'Teacher roles updated successfully', 
      teacher 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllTeachers, updateTeacherRoles };
