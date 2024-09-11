const sequelize = require('../config/db');
const Teacher = require('./teacherModel');
const Class = require('./classModel');

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

module.exports = {
  sequelize,
  Teacher,
  Class,
};
