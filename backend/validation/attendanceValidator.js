const { body } = require("express-validator");

const validateAttendance = [
  body("studentId").isUUID(4).withMessage("Student ID must be a valid UUID"),
  body("classId").isUUID(4).withMessage("Class ID must be a valid UUID"),
  body("date").isISO8601().withMessage("Date must be in a valid format (ISO 8601)"),
  body("status").isIn(["Present", "Absent", "Late", "permission"])
    .withMessage("Status must be either Present, Absent, Late or Permission")
];

module.exports = {
  validateAttendance
};
