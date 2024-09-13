const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./studentModel");
const Class = require("./classModel");

const Grade = sequelize.define(
  "Results",
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
      type: DataTypes.STRING,
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
  },
  {
    tableName: "results",
    timestamps: true,
  }
);



module.exports = Grade;
