const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes for student operations
router.post('/add', studentController.addStudent);
router.get('/all', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.post('/assign', studentController.assignToClass);
router.delete('/:id', studentController.deleteStudent); // Add the delete route

module.exports = router;
