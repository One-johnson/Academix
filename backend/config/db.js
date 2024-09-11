// config/db.js
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Create a Sequelize instance with the database connection details
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql", // Choose 'mysql' since you're using MySQL
  pool: {
    max: 10, // Maximum number of connections in the pool
    min: 0,  // Minimum number of connections in the pool
    acquire: 30000, // Maximum time in ms that pool will try to get connection before throwing error
    idle: 10000 // Maximum time in ms that a connection can be idle before being released
  }
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
