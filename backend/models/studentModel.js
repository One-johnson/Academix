const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your database configuration
const Class = require("./classModel");
const Parent = require("./parentModel");

// Define Student model
const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.UUID, // Use UUID for consistency
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    registrationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Sets default to the current date
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
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
    hometown: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parentGuardianId: {
      type: DataTypes.UUID,
      references: {
        model: Parent,
        key: "id",
      },
      allowNull: true, // A student may not have a parent record immediately
    },

    religion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    houseNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("Fresher", "Continuing", "Completed"),
      allowNull: false,
      defaultValue: "Fresher",
    },
    currentClassId: {
      type: DataTypes.UUID,
      references: {
        model: Class,
        key: "id",
      },
      allowNull: true, // A student may not be assigned to a class immediately
    },
  },
  {
    tableName: "students", // Custom table name
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = Student;
