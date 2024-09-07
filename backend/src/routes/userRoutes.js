// src/routes/userRoutes.js
const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const router = express.Router();

// Route to get all users
router.get("/", getUsers);

// Route to create a new user
router.post("/", createUser);

module.exports = router;
