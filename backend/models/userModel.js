const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import your Sequelize instance

// Define the User model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true, // Define as primary key
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Username should be unique
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Email should be unique
    validate: {
      isEmail: true, // Validate that the value is a valid email address
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "users", // Custom table name
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = User;
