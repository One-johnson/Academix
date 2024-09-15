const express = require('express');
const { validateParent } = require('../validation/parentValidator'); // Import validation middleware
const { validationResult } = require('express-validator'); // Import express-validator helper
const parentController = require('../controllers/parentController');

const router = express.Router();

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Add a new parent with validation
router.post('/add', validateParent, handleValidation, parentController.addParent);

// Get all parents
router.get('/all', parentController.getAllParents);

// Get a parent by ID
router.get('/:id', parentController.getParentById);

// Update a parent by ID with validation
router.put('/:id', validateParent, handleValidation, parentController.updateParent);

// Delete a parent by ID
router.delete('/:id', parentController.deleteParent);

module.exports = router;
