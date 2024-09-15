// routes/attendanceRoutes.js
const express = require("express");
const { validateAttendance } = require("../validation/attendanceValidator"); // Import validation middleware
const handleValidation = require("../middleware/handleValidation");
const attendanceController = require("../controllers/attendanceController");

const router = express.Router();

router.post(
  "/",
  validateAttendance,
  handleValidation,
  attendanceController.createAttendance
);
router.get("/", attendanceController.getAllAttendance);

router.get("/student/:studentId", attendanceController.getAttendanceByStudent);
router.put(
  "/:id",
  validateAttendance,
  handleValidation,
  attendanceController.updateAttendance
);
router.delete("/:id", attendanceController.deleteAttendance);

module.exports = router;
