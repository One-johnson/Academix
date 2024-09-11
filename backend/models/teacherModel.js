// models/teacherModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your database configuration

// Define Teacher model
const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.UUID, // Use UUID for a unique identifier
      defaultValue: DataTypes.UUIDV4, // Automatically generate a unique identifier
      primaryKey: true, // Define as primary key
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female"),
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualifications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    emergencyContact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Fulltime", "Parttime", "Contract"),
      allowNull: false,
      defaultValue: "Fulltime",
    },
  },
  {
    tableName: "teachers",
    timestamps: true,
  }
);

module.exports = Teacher;
