const Student = require("../models/studentModel");
const Class = require("../models/classModel");

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: "Student not found." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update student information
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Student.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedStudent = await Student.findByPk(id);
      res.status(200).json(updatedStudent);
    } else {
      res.status(404).json({ error: "Student not found." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Assign a student to a class
exports.assignToClass = async (req, res) => {
  const { studentId, classId } = req.body;
  try {
    const student = await Student.findByPk(studentId);
    const classObj = await Class.findByPk(classId);
    if (student && classObj) {
      await student.setClass(classObj); // Assuming you have setClass method defined
      res
        .status(200)
        .json({ message: "Student assigned to class successfully." });
    } else {
      res.status(404).json({ error: "Student or Class not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Student.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).json(); // No content
    } else {
      res.status(404).json({ error: "Student not found." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
