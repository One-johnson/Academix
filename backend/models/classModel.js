// models/classModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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

module.exports = Class;
