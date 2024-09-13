// index.js or server.js
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db"); // Import Sequelize instance
const fileRoutes = require("./routes/fileRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const parentRoutes = require("./routes/parentRoutes");
const userRoutes = require("./routes/userRoutes");
const resultRoutes = require("./routes/resultRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/result", resultRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Sync the database
sequelize
  .sync({ force: false }) // Sync models with the database
  .then(() => {
    console.log("Database synced successfully.");

    // Start the server after successful sync
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
