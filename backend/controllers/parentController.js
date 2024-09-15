const Parent = require("../models/parentModel");

// Add a new parent
exports.addParent = async (req, res) => {
  try {
    const { fullName, relationship, phoneNumber, email, address, occupation } =
      req.body;
    const parent = await Parent.create({
      fullName,
      relationship,
      phoneNumber,
      email,
      address,
      occupation,
    });
    res.status(201).json(parent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all parents
exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parent.findAll();
    res.status(200).json(parents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a parent by ID
exports.getParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const parent = await Parent.findByPk(id);
    if (parent) {
      res.status(200).json(parent);
    } else {
      res.status(404).json({ error: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a parent by ID
exports.updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, relationship, phoneNumber, email, address, occupation } =
      req.body;
    const [updated] = await Parent.update(
      { fullName, relationship, phoneNumber, email, address, occupation },
      { where: { id } }
    );
    if (updated) {
      const updatedParent = await Parent.findByPk(id);
      res.status(200).json(updatedParent);
    } else {
      res.status(404).json({ error: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a parent by ID
exports.deleteParent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Parent.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
