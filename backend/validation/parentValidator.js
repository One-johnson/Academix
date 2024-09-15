const { body } = require('express-validator');

const validateParent = [
  // Validate fullName (required, must be alphabetic, and not empty)
  body('fullName')
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2 }).withMessage('Full name must be at least 2 characters long'),

  // Validate relationship (required, should be either 'Father', 'Mother', 'Guardian', etc.)
  body('relationship')
    .notEmpty().withMessage('Relationship is required')
    .isIn(['Father', 'Mother', 'Guardian', 'Other'])
    .withMessage('Relationship must be one of the following: Father, Mother, Guardian, Other'),

  // Validate phoneNumber (required, must be numeric and between 10-15 characters)
  body('phoneNumber')
    .notEmpty().withMessage('Phone number is required')
    .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 characters')
    .isNumeric().withMessage('Phone number must contain only numbers'),

  // Validate email (optional, must be a valid email if provided)
  body('email')
    .optional()
    .isEmail().withMessage('Email must be valid'),

  // Validate address (optional, must be a string)
  body('address')
    .optional()
    .isString().withMessage('Address must be a valid string'),

  // Validate occupation (optional, must be a string)
  body('occupation')
    .optional()
    .isString().withMessage('Occupation must be a valid string'),
];

module.exports = { validateParent };
