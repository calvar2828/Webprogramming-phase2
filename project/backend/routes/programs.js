const express = require('express');
const router = express.Router();
const Program = require('../models/Program'); 

//to get all the programs 
router.get('/', async (req, res) => {
  try {
    const programs = await Program.find(); //with this mongoose search all the documents
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//to get a program with the ID
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//create a new program
router.post('/', async (req, res) => {
  const newProgram = new Program(req.body); //create the program with the data given
  try {
    const savedProgram = await newProgram.save(); //save on mongoDB
    res.status(201).json(savedProgram);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//update a program by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProgram = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
    });
    if (!updatedProgram) return res.status(404).json({ message: 'Program not found' });
    res.json(updatedProgram);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete a program by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    if (!deletedProgram) return res.status(404).json({ message: 'Program not found' });
    res.json({ message: 'Program deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
