const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const db = require("../config/db");

// Middleware to validate and sanitize input for user registration
const validateUserRegistration = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// Register a new user
const registerUser = [
  ...validateUserRegistration,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if the email already exists
      const [existingUser] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const [result] = await db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
      );

      res.status(201).json({ id: result.insertId, name, email });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ message: "Server error" });
    }
  },
];

// Login a user
const loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    const [user] = await db.query("SELECT * FROM users WHERE name = ?", [name]);

    if (!user.length || !(await bcrypt.compare(password, user[0].password))) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Export the controller functions
module.exports = { registerUser, loginUser };
