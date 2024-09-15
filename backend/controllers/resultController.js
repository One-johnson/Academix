const Result = require("../models/resultModel");
const Student = require("../models/studentModel");

// Add a new grade
exports.addGrade = async (req, res) => {
  try {
    const newGrade = await Result.create(req.body);
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all grades for a student
exports.getGradesForStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    const grades = await Result.findAll({ where: { studentId } });
    if (grades.length > 0) {
      res.status(200).json(grades);
    } else {
      res.status(404).json({ error: "No grades found for this student." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all grades for a class
exports.getGradesForClass = async (req, res) => {
  const { classId } = req.params;
  try {
    const grades = await Result.findAll({
      include: [
        {
          model: Student,
          where: { currentClassId: classId },
        },
      ],
    });
    if (grades.length > 0) {
      res.status(200).json(grades);
    } else {
      res.status(404).json({ error: "No grades found for this class." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a grade
exports.updateGrade = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const [updated] = await Result.update(updatedData, { where: { id } });

    if (updated) {
      const updatedGrade = await Result.findOne({ where: { id } });
      res.status(200).json(updatedGrade);
    } else {
      res.status(404).json({ error: "Grade not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a grade
exports.deleteGrade = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Result.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send(); // Send no content response
    } else {
      res.status(404).json({ error: "Grade not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
