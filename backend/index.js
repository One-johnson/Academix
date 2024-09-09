// server.js
const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes"); // Import the routes
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the file routes
app.use("/api", fileRoutes); // Prefix all routes with /api
app.use("/api", registerRoutes);
app.use("/api", loginRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
