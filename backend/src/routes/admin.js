const express = require('express');
const { getAllTeachers, updateTeacherRoles } = require('../controllers/adminController');
const router = express.Router();

router.get('/teachers', getAllTeachers);
router.put('/teachers/:teacherId/roles', updateTeacherRoles);

module.exports = router;
