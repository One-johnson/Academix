const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Define routes for event operations
router.post('/add', eventController.addEvent);
router.get('/all', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
