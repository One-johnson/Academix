const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./studentModel");
const Class = require("./classModel");

const Result = sequelize.define(
  "Result",
  {
    id: {
      type: DataTypes.UUID, // Use UUID for consistency
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    term: {
      type: DataTypes.ENUM("Term 1", "Term 2", "Term 3"), // Use ENUM for predefined term values
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.UUID,
      references: {
        model: Student,
        key: "id",
      },
      allowNull: false,
    },
    classId: {  // Optionally, relate results to a class
      type: DataTypes.UUID,
      references: {
        model: Class,
        key: "id",
      },
      allowNull: true, // Optional, as not all results might need a class
    },
  },
  {
    tableName: "results", // Keep this plural to match existing database convention
    timestamps: true,
  }
);

module.exports = Result;
