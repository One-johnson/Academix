const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const {
  validateRegister,
  validateLogin,
} = require("../validation/userValidator"); 
const handleValidation = require("../middleware/handleValidation");

const router = express.Router();

// Route for user registration with validation
router.post(
  "/register",
  validateRegister, // Use registration validation rules
  handleValidation, // Handle validation errors
  registerUser
);

// Route for user login with validation
router.post(
  "/login",
  validateLogin, // Use login validation rules
  handleValidation, // Handle validation errors
  loginUser
);

module.exports = router;
