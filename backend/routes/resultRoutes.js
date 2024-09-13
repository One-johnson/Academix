const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/resultController');

// Define routes for grade operations
router.post('/add', gradeController.addGrade);
router.get('/student/:studentId', gradeController.getGradesForStudent);
router.get('/class/:classId', gradeController.getGradesForClass);
router.delete('/:id', gradeController.deleteGrade);
router.put('/:id', gradeController.updateGrade); // Add the update route

module.exports = router;
