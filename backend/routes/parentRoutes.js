const express = require("express");
const { validateParent } = require("../validation/parentValidator");
const parentController = require("../controllers/parentController");
const handleValidation = require("../middleware/handleValidation");

const router = express.Router();

// Add a new parent with validation
router.post(
  "/add",
  validateParent,
  handleValidation,
  parentController.addParent
);

// Get all parents
router.get("/all", parentController.getAllParents);

// Get a parent by ID
router.get("/:id", parentController.getParentById);

// Update a parent by ID with validation
router.put(
  "/:id",
  validateParent,
  handleValidation,
  parentController.updateParent
);

// Delete a parent by ID
router.delete("/:id", parentController.deleteParent);

module.exports = router;
