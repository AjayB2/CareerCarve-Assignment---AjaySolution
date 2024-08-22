const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');

router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.getAll();
    res.json(mentors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching mentors' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const mentor = await Mentor.getById(req.params.id);
    res.json(mentor);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Mentor not found' });
  }
});

module.exports = router;