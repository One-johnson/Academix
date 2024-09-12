const Parent = require('../models/parentModel');

exports.addParent = async (req, res) => {
  try {
    const parent = await Parent.create(req.body);
    res.status(201).json(parent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parent.findAll();
    res.status(200).json(parents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getParentById = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (parent) {
      res.status(200).json(parent);
    } else {
      res.status(404).json({ error: 'Parent not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateParent = async (req, res) => {
  try {
    const [updated] = await Parent.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedParent = await Parent.findByPk(req.params.id);
      res.status(200).json(updatedParent);
    } else {
      res.status(404).json({ error: 'Parent not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteParent = async (req, res) => {
  try {
    const deleted = await Parent.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Parent not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
