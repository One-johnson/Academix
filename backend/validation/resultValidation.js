const { body } = require("express-validator");

const validateResult = [
  body("subject")
    .isString()
    .withMessage("Subject must be a string")
    .notEmpty()
    .withMessage("Subject is required"),

  body("grade")
    .isString()
    .withMessage("Grade must be a string")
    .isLength({ min: 1, max: 5 })
    .withMessage("Grade must be between 1 and 5 characters")
    .notEmpty()
    .withMessage("Grade is required"),

  body("term")
    .isIn(["Term 1", "Term 2", "Term 3"])
    .withMessage("Term must be either 'Term 1', 'Term 2', or 'Term 3'"),

  body("year")
    .isInt({ min: 2000 })
    .withMessage("Year must be a valid integer from 2000 onwards")
    .notEmpty()
    .withMessage("Year is required"),

  body("studentId")
    .isUUID()
    .withMessage("Student ID must be a valid UUID")
    .notEmpty()
    .withMessage("Student ID is required"),

  body("classId")
    .optional() // Since classId is optional
    .isUUID()
    .withMessage("Class ID must be a valid UUID if provided"),
];

module.exports = { validateResult };
