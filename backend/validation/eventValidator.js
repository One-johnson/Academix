const { body } = require('express-validator');

exports.validateEvent = [
  // Title is required and should be a non-empty string
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string'),
  
  // Description is optional but must be a string if provided
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  
  // Date is required and must be a valid date
  body('date')
    .isISO8601()
    .withMessage('Date must be in a valid format (ISO 8601)'),

  // Location is optional but must be a string if provided
  body('location')
    .optional()
    .isString()
    .withMessage('Location must be a string'),

  // Status must be one of the predefined values
  body('status')
    .isIn(['Upcoming', 'Ongoing', 'Completed', 'Cancelled'])
    .withMessage('Status must be either Upcoming, Ongoing, Completed, or Cancelled'),
];
