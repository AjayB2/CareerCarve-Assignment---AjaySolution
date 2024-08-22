const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.getAll();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching students' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.getById(req.params.id);
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Student not found' });
  }
});

module.exports = router;