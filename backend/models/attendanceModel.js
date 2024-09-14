// models/attendanceModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./studentModel");
const Class = require("./classModel");

// Define Attendance model
const Attendance = sequelize.define(
  "Attendance",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Present", "Absent", "Late", "Permission"),
      allowNull: false,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "attendance",
    timestamps: true,
  }
);

// Establish associations

module.exports = Attendance;
