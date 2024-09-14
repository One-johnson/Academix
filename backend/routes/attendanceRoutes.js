// routes/attendanceRoutes.js
const express = require('express');
const { validateAttendance } = require('../validation/attendanceValidator'); // Import validation middleware
const { validationResult } = require('express-validator'); // Import express-validator helper
const attendanceController = require('../controllers/attendanceController');

const router = express.Router();

// Create attendance with validation
router.post('/', validateAttendance, attendanceController.createAttendance);

// Get all attendance records
router.get('/', attendanceController.getAllAttendance);

// Get attendance for a specific student
router.get('/student/:studentId', attendanceController.getAttendanceByStudent);

// Update attendance record with validation
router.put('/:id', validateAttendance, attendanceController.updateAttendance);

// Delete attendance record
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
