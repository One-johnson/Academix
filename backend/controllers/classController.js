const Class = require('../models/classModel');

// Add a new class
exports.addClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a class by ID
exports.getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classObj = await Class.findByPk(id);
    if (classObj) {
      res.status(200).json(classObj);
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a class
exports.updateClass = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Class.update(req.body, { where: { id } });
    if (updated) {
      const updatedClass = await Class.findByPk(id);
      res.status(200).json(updatedClass);
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a class
exports.deleteClass = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Class.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
