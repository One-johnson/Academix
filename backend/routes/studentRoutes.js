const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { validateStudent } = require("../validation/studentValidator"); // Import validation middleware
const { validationResult } = require("express-validator"); // Import express-validator helper

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to add a new student with validation
router.post(
  "/add",
  validateStudent,
  handleValidation,
  studentController.addStudent
);

// Route to get all students
router.get("/all", studentController.getAllStudents);

// Route to get a specific student by ID
router.get("/:id", studentController.getStudentById);

// Route to update student information with validation
router.put(
  "/:id",
  validateStudent,
  handleValidation,
  studentController.updateStudent
);
// Route to assign a student to a class
router.post("/assign", studentController.assignToClass);


// Route to delete a student by ID
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
