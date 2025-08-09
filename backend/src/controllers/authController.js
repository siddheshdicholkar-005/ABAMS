const User = require('../models/User');
const Student = require('../models/Student');
const Parent = require('../models/Parent');
const Teacher = require('../models/Teacher');
const Admin = require('../models/Admin');

const login = async (req, res) => {
  try {
    const { userId, password, userType } = req.body;
    
    // Find user by username
    const user = await User.findOne({ 
      username: userId
    });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    let userRole = user.userType;
    let additionalData = {};
    
    // For teachers, check their specific roles
    if (user.userType === 'teacher') {
      const teacher = await Teacher.findOne({ userId: user._id });
      if (teacher) {
        // Determine the specific role for login
        if (userType === 'hod' && teacher.roles.isHOD) {
          userRole = 'hod';
        } else if (userType === 'coordinator' && teacher.roles.isClassCoordinator) {
          userRole = 'coordinator';
        } else if (userType === 'teacher' && teacher.roles.isSubjectTeacher) {
          userRole = 'teacher';
        } else {
          return res.status(401).json({ message: 'You do not have permission for this role' });
        }
        additionalData.teacherRoles = teacher.roles;
      }
    } else {
      // For non-teachers, the userType in request must match user's actual type
      if (userType !== user.userType) {
        return res.status(401).json({ message: 'Invalid user type for this account' });
      }
    }
    
    res.json({ 
      message: 'Login successful', 
      user: { 
        id: user._id,
        username: user.username, 
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        loginRole: userRole,
        ...additionalData
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const register = async (req, res) => {
  try {
    const { 
      username, 
      email, 
      password, 
      confirmPassword, 
      fullName, 
      mobileNumber, 
      userType 
    } = req.body;

    // Validation
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this username or email already exists' 
      });
    }

    // Create base user
    const user = new User({
      username,
      email,
      password, // In production, hash this password
      fullName,
      mobileNumber,
      userType
    });

    const savedUser = await user.save();

    // Create specific user type record
    let specificUserRecord;
    
    switch (userType) {
      case 'student':
        specificUserRecord = new Student({
          userId: savedUser._id,
          studentId: `STD${Date.now()}`
        });
        break;
        
      case 'parent':
        specificUserRecord = new Parent({
          userId: savedUser._id
        });
        break;
        
      case 'teacher':
        specificUserRecord = new Teacher({
          userId: savedUser._id,
          employeeId: `EMP${Date.now()}`
        });
        break;
        
      case 'admin':
        specificUserRecord = new Admin({
          userId: savedUser._id
        });
        break;
    }

    if (specificUserRecord) {
      await specificUserRecord.save();
    }

    res.status(201).json({ 
      message: 'Registration successful', 
      user: { 
        username: savedUser.username, 
        email: savedUser.email,
        fullName: savedUser.fullName,
        userType: savedUser.userType 
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

module.exports = { login, register };
