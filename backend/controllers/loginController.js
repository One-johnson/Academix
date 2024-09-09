// controllers/loginController.js
const bcrypt = require("bcrypt");
const db = require("../config/db"); // Import your database configuration

// Function to handle user login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const [userResult] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (userResult.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = userResult[0];

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a session or JWT (JSON Web Token) here if needed

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
