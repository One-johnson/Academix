// routes/registerRoutes.js
const express = require("express");
const { registerUser } = require("../controllers/registerController");

const router = express.Router();

// Define the registration route
router.post("/register", registerUser);

module.exports = router;
