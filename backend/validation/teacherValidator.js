const { body } = require('express-validator');

exports.validateTeacher = [
  // Full name should be a non-empty string
  body('fullName')
    .notEmpty()
    .withMessage('Full Name is required')
    .isString()
    .withMessage('Full Name must be a string'),

  // Date of birth should be a valid date
  body('dateOfBirth')
    .isISO8601()
    .withMessage('Date of Birth must be in a valid format (YYYY-MM-DD)'),

  // Gender should be either Male or Female
  body('gender')
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either "Male" or "Female"'),

  // Nationality should be a non-empty string
  body('nationality')
    .notEmpty()
    .withMessage('Nationality is required')
    .isString()
    .withMessage('Nationality must be a string'),

  // Phone should be a non-empty string containing only digits
  body('phone')
    .notEmpty()
    .withMessage('Phone number is required')
    .isNumeric()
    .withMessage('Phone number must contain only numbers'),

  // Email should be a valid email format
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a valid email address'),

  // Address should be a non-empty string
  body('address')
    .notEmpty()
    .withMessage('Address is required')
    .isString()
    .withMessage('Address must be a valid string'),

  // Position should be a non-empty string
  body('position')
    .notEmpty()
    .withMessage('Position is required')
    .isString()
    .withMessage('Position must be a valid string'),

  // Start date should be a valid date
  body('startDate')
    .isISO8601()
    .withMessage('Start Date must be in a valid format (YYYY-MM-DD)'),

  // Salary should be a number
  body('salary')
    .isDecimal()
    .withMessage('Salary must be a decimal number'),

  // Emergency contact should be a non-empty string containing only digits
  body('emergencyContact')
    .notEmpty()
    .withMessage('Emergency contact is required')
    .isNumeric()
    .withMessage('Emergency contact must contain only numbers'),

  // Status should be one of the allowed values (Fulltime, Parttime, Contract)
  body('status')
    .isIn(['Fulltime', 'Parttime', 'Contract'])
    .withMessage('Status must be either Fulltime, Parttime, or Contract'),
];

exports.validateTeacherAssignment = [
    body('teacherId').isUUID(4).withMessage('Teacher ID must be a valid UUID'),
    body('classId').isUUID(4).withMessage('Class ID must be a valid UUID'),
  ];