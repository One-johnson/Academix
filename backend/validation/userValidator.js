const { body } = require("express-validator");

// Validation rules for user registration
const validateRegister = [
  body("username")
    .notEmpty().withMessage("Username is required.")
    .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long.")
    .isLength({ max: 30 }).withMessage("Username must be less than 30 characters long."),
  
  body("email")
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Must be a valid email address.")
    .normalizeEmail(),
  
  body("password")
    .notEmpty().withMessage("Password is required.")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    .matches(/\d/).withMessage("Password must contain a number.")
    .matches(/[a-z]/).withMessage("Password must contain a lowercase letter.")
    .matches(/[A-Z]/).withMessage("Password must contain an uppercase letter."),
];

// Validation rules for user login
const validateLogin = [
  body("email")
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Must be a valid email address.")
    .normalizeEmail(),
  
  body("password")
    .notEmpty().withMessage("Password is required.")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
];

module.exports = { validateRegister, validateLogin };
