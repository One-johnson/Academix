const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to add a new teacher
router.post('/add', teacherController.addTeacher);

// Route to get all teachers
router.get('/all', teacherController.getAllTeachers);

// Route to assign a teacher to a class
router.post('/assign', teacherController.assignToClass);

// Export the router to be used in the main server file
module.exports = router;
