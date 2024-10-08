const sequelize = require("../config/db"); // Import your database configuration

// Import all models
const Teacher = require("./teacherModel");
const Class = require("./classModel");
const Student = require("./studentModel");
const Parent = require("./parentModel");
const Event = require("./eventModel");
const Result = require("./resultModel");
const Attendance = require("./attendanceModel");

// Define many-to-many relationships
Teacher.belongsToMany(Class, {
  through: "ClassTeachers",
  foreignKey: "teacherId",
  otherKey: "classId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Class.belongsToMany(Teacher, {
  through: "ClassTeachers",
  foreignKey: "classId",
  otherKey: "teacherId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Define other associations here
Student.belongsTo(Class, { foreignKey: "currentClassId", as: "currentClass" });
Class.hasMany(Student, { foreignKey: "currentClassId", as: "students" });

Student.belongsTo(Parent, { foreignKey: "parentGuardianId", as: "parent" });
Parent.hasMany(Student, { foreignKey: "parentGuardianId", as: "students" });

Result.belongsTo(Student, { foreignKey: "studentId", as: "student" });
Student.hasMany(Result, { foreignKey: "studentId", as: "grades" });

Attendance.belongsTo(Student, { foreignKey: "studentId", as: "student" });
Student.hasMany(Attendance, { foreignKey: "studentId", as: "attendances" });

Attendance.belongsTo(Class, { foreignKey: "classId", as: "class" });
Class.hasMany(Attendance, { foreignKey: "classId", as: "attendances" });

// Export models for use in other parts of the application
module.exports = {
  sequelize,
  Teacher,
  Class,
  Student,
  Parent,
  Event,
  Result,
  Attendance,
};
