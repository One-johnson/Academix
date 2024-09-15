const express = require("express");
const router = express.Router();
const gradeController = require("../controllers/resultController");
const { validationResult } = require("express-validator");

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Define routes for grade operations
router.post(
  "/add",
  validationResult,
  handleValidation,
  gradeController.addGrade
);
router.get("/student/:studentId", gradeController.getGradesForStudent);
router.get("/class/:classId", gradeController.getGradesForClass);
router.delete("/:id", gradeController.deleteGrade);
router.put(
  "/:id",
  validationResult,
  handleValidation,
  gradeController.updateGrade
); // Add the update route

module.exports = router;
