// config/db.js
require("dotenv").config();
const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Number of connections to create in the pool
});

// Create a promise-based connection
const promisePool = pool.promise();

module.exports = promisePool;
