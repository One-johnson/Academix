const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const { validateClass } = require('../validation/classValidator');
const handleValidation = require('../middleware/handleValidation');

// Define routes for class operations
router.post('/add', validateClass, handleValidation, classController.addClass);
router.put('/:id', validateClass, handleValidation, classController.updateClass);
router.get('/all', classController.getAllClasses);
router.get('/:id', classController.getClassById);
router.delete('/:id', classController.deleteClass);

module.exports = router;
