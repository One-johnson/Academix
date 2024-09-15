// routes/attendanceRoutes.js
const express = require("express");
const { validateAttendance } = require("../validation/attendanceValidator"); // Import validation middleware
const { validationResult } = require("express-validator"); // Import express-validator helper
const attendanceController = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", validateAttendance, attendanceController.createAttendance);
router.get("/", attendanceController.getAllAttendance);

router.get("/student/:studentId", attendanceController.getAttendanceByStudent);
router.put("/:id", validateAttendance, attendanceController.updateAttendance);
router.delete("/:id", attendanceController.deleteAttendance);

module.exports = router;
