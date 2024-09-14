// controllers/attendanceController.js
const Attendance = require("../models/attendanceModel");
const { validationResult } = require("express-validator");

// Create attendance record

exports.createAttendance = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { studentId, classId, date, status, remarks } = req.body;
    const attendance = await Attendance.create({
      studentId,
      classId,
      date,
      status,
      remarks,
    });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get attendance for a specific student
exports.getAttendanceByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendances = await Attendance.findAll({ where: { studentId } });
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update attendance record
exports.updateAttendance = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const { status, remarks } = req.body;
    const [updated] = await Attendance.update(
      { status, remarks },
      { where: { id } }
    );
    if (updated) {
      const updatedAttendance = await Attendance.findByPk(id);
      res.status(200).json(updatedAttendance);
    } else {
      res.status(404).json({ error: "Attendance record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete attendance record
exports.deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Attendance.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Attendance record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
