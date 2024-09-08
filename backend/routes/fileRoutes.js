// routes/fileRoutes.js
const express = require("express");
const { uploadFile } = require("../controllers/fileController"); // Import the controller

const router = express.Router();

// Define the upload route
router.post("/upload", uploadFile);

module.exports = router;
