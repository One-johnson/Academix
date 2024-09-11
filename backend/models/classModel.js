// models/classModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your database configuration

// Define Class model
const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.UUID, // Use UUID for a unique identifier
      defaultValue: DataTypes.UUIDV4, // Automatically generate a unique identifier
      primaryKey: true, // Define as primary key
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

module.exports = Class;
