const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your database configuration
const Class = require("./classModel"); // Import the Class model

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
    parentGuardian: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    religiousDenomination: {
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

// Establish association between Student and Class
Student.belongsTo(Class, { foreignKey: "currentClassId", as: "currentClass" });
Class.hasMany(Student, { foreignKey: "currentClassId", as: "students" });

module.exports = Student;
