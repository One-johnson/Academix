const Teacher = require('../models/teacherModel');
const Class = require('../models/classModel'); // Assuming this is needed for assigning

// Create a new teacher
exports.addTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update teacher information
exports.updateTeacher = async (req, res) => {
  try {
    const [updated] = await Teacher.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedTeacher = await Teacher.findByPk(req.params.id);
      res.status(200).json(updatedTeacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
  try {
    const deleted = await Teacher.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Assign a teacher to a class (Assuming classId and teacherId are provided in the request body)
exports.assignToClass = async (req, res) => {
  try {
    const { teacherId, classId } = req.body;
    // Check if both teacher and class exist
    const teacher = await Teacher.findByPk(teacherId);
    const classInstance = await Class.findByPk(classId);

    if (!teacher || !classInstance) {
      return res.status(404).json({ error: 'Teacher or Class not found' });
    }

    // Add association
    await teacher.addClass(classInstance);

    res.status(200).json({ message: 'Teacher assigned to class successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
