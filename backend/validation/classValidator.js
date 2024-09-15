const { check } = require('express-validator');

exports.validateClass = [
  check('name')
    .notEmpty()
    .withMessage('Class name is required')
    .isString()
    .withMessage('Class name must be a string'),
  check('year')
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage('Year must be a valid year between 1900 and the current year'),
];
