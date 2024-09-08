// server.js
const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes"); // Import the routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Replace bodyParser.json() with express.json()

// Use the file routes
app.use("/api", fileRoutes); // Prefix all routes with /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
