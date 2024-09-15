const express = require("express");
const { validateEvent } = require("../validation/eventValidator");
const { validationResult } = require("express-validator");
const eventController = require("../controllers/eventController");

const router = express.Router();

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Create a new event with validation
router.post(
  "/add",
  validateEvent,
  handleValidation,
  eventController.createEvent
);

// Get all events
router.get("/all", eventController.getAllEvents);

// Get an event by ID
router.get("/:id", eventController.getEventById);

// Update an event by ID with validation
router.put(
  "/:id",
  validateEvent,
  handleValidation,
  eventController.updateEvent
);

// Delete an event by ID
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
