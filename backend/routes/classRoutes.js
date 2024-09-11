// routes/classRoutes.js
const express = require("express");
const router = express.Router();
const {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
} = require("../controllers/classController");

// Route to create a new class
router.post("/", createClass);

// Route to get all classes
router.get("/", getAllClasses);

// Route to get a specific class by ID
router.get("/:id", getClassById);

// Route to update a class by ID
router.put("/:id", updateClass);

// Route to delete a class by ID
router.delete("/:id", deleteClass);

module.exports = router;
