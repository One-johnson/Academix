// controllers/fileController.js
const multer = require("multer");
const path = require("path");
const connection = require("../config/db"); // Import the database connection

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage: storage }).single("file");

// File upload handler
const uploadFile = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Multer error: ", err);
      return res.status(500).json({ error: "Error uploading file." });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const filePath = req.file.path; // Path to the uploaded file
    const fileName = req.file.filename; // Name of the uploaded file

    // Save file information to the database
    const query = "INSERT INTO files (filename, filepath) VALUES (?, ?)";
    connection.query(query, [fileName, filePath], (dbErr, results) => {
      if (dbErr) {
        console.error("Database error: ", dbErr);
        return res
          .status(500)
          .json({ error: "Error saving file information to the database." });
      }
      res.json({ message: `File uploaded successfully: ${fileName}` });
    });
  });
};

module.exports = { uploadFile };
