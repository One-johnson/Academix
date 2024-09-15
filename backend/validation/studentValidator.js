const { body } = require("express-validator");

exports.validateStudent = [
  // Registration Date should be a valid date
  body("registrationDate")
    .isISO8601()
    .withMessage("Registration Date must be a valid date"),

  // First Name should be a non-empty string
  body("firstName")
    .notEmpty()
    .withMessage("First Name is required")
    .isString()
    .withMessage("First Name must be a string"),

  // Middle Name should be a string
  body("middleName")
    .notEmpty()
    .isString()
    .withMessage("Middle Name must be a string"),

  // Last Name should be a non-empty string
  body("lastName")
    .notEmpty()
    .withMessage("Last Name is required")
    .isString()
    .withMessage("Last Name must be a string"),

  // Date of Birth should be a valid date
  body("dateOfBirth")
    .isISO8601()
    .withMessage("Date of Birth must be in a valid format (YYYY-MM-DD)"),

  // Age should be a positive integer
  body("age").isInt({ gt: 0 }).withMessage("Age must be a positive integer"),

  // Gender should be either Male or Female
  body("gender")
    .isIn(["Male", "Female"])
    .withMessage('Gender must be either "Male" or "Female"'),

  // Nationality should be a non-empty string
  body("nationality")
    .notEmpty()
    .withMessage("Nationality is required")
    .isString()
    .withMessage("Nationality must be a string"),

  // Hometown should be a string
  body("hometown")
    .optional()
    .isString()
    .withMessage("Hometown must be a string"),

  // Address should be a string
  body("address").notEmpty().isString().withMessage("Address must be a string"),

  // Parent Guardian ID should be a valid UUID
  body("parentGuardianId")
    .notEmpty()
    .isUUID()
    .withMessage("Parent Guardian ID must be a valid UUID"),

  // Religious Denomination should be a string
  body("religion")
    .optional()
    .isString()
    .withMessage("Religious Denomination must be a string"),

  // House Number should be a string
  body("houseNumber")
    .optional()
    .isString()
    .withMessage("House Number must be a string"),

  // Phone Number should be a valid phone number (required)
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters")
    .isNumeric()
    .withMessage("Phone number must contain only numbers"),
  // Status should be either Fresher, Continuing, or Completed
  body("status")
    .isIn(["Fresher", "Continuing", "Completed"])
    .withMessage(
      'Status must be either "Fresher", "Continuing", or "Completed"'
    ),

  // Current Class ID should be a valid UUID
  body("currentClassId")
    .optional()
    .isUUID()
    .withMessage("Current Class ID must be a valid UUID"),
];
