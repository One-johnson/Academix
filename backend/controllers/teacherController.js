const Teacher = require('../models/teacherModel');
const Class = require('../models/classModel');

// Add a new teacher
exports.addTeacher = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Assign a teacher to a class
exports.assignToClass = async (req, res) => {
  const { teacherId, classId } = req.body;
  try {
    const teacher = await Teacher.findByPk(teacherId);
    const classObj = await Class.findByPk(classId);
    if (teacher && classObj) {
      await teacher.addClass(classObj); // Using Sequelize methods to establish the relation
      res.status(200).json({ message: 'Teacher assigned to class successfully.' });
    } else {
      res.status(404).json({ error: 'Teacher or Class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
