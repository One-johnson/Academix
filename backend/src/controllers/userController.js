const db = require('../config/db');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// Get all users
const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new user
const createUser = [
  // Validate and sanitize input
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const [result] = await db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
      );

      res.json({ id: result.insertId, name, email });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
];

module.exports = { getUsers, createUser };
