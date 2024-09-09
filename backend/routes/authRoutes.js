// routes/authRoutes.js

const express = require("express");
const { registerUser } = require("../controllers/authController"); // Import the controller

const router = express.Router();

// Define the registration route
router.post("/register", registerUser);

module.exports = router;
