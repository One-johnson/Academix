const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your database configuration
const Teacher = require('./teacherModel'); // Import the Teacher model

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "classes", // Custom table name
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

Class.belongsToMany(Teacher, { through: 'ClassTeachers', foreignKey: 'classId' });
Teacher.belongsToMany(Class, { through: 'ClassTeachers', foreignKey: 'teacherId' });

module.exports = Class;
