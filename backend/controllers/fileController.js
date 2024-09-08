// controllers/fileController.js
const multer = require("multer");
const path = require("path");
const db = require("../config/db"); // Import the database connection

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage: storage }).single('file');

// File upload handler
const uploadFile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send('Error uploading file.');
    }
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const filePath = req.file.path; // Path to the uploaded file
    const fileName = req.file.filename; // Name of the uploaded file

    try {
      // Save file information to the database
      const query = 'INSERT INTO files (filename, filepath) VALUES (?, ?)';
      await db.query(query, [fileName, filePath]);
      res.send(`File uploaded successfully: ${fileName}`);
    } catch (err) {
      res.status(500).send('Error saving file information to the database.');
    }
  });
};

module.exports = { uploadFile };
