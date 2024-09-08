const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(morgan("dev")); // Use morgan for logging requests

// Routes
app.use("/api/users", userRoutes);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server shutting down gracefully.");
    process.exit(0);
  });
});
