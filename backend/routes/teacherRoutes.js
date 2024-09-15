const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const { validateTeacher } = require("../validation/teacherValidator");
const handleValidation = require("../middleware/handleValidation");

// Route to add a new teacher with validation
router.post(
  "/add",
  validateTeacher,
  handleValidation,
  teacherController.addTeacher
);

// Route to get all teachers
router.get("/all", teacherController.getAllTeachers);

// Route to get a specific teacher by ID
router.get("/:id", teacherController.getTeacherById);

// Route to update a teacher's information with validation
router.put(
  "/:id",
  validateTeacher,
  handleValidation,
  teacherController.updateTeacher
);

// Route to delete a teacher by ID
router.delete("/:id", teacherController.deleteTeacher);

// Route to assign a teacher to a class
router.post("/assign", teacherController.assignToClass);

module.exports = router;
