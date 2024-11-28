const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth'); // Middleware para proteger rutas

//Get all the users (protected)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find(); // Recupera todos los usuarios de la base de datos
    res.json(users); // Devuelve los usuarios en formato JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // Manejo de errores
  }
});



//get user by id(protected)
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//search user by username(protected)
router.get('/username/:username', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//check if the username is available
router.get('/check-username/:username', async (req, res) => {
  try {
    const { username } = req.params;
    console.log("Checking username:", username);  // Log de la consulta
    const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') });
    
    if (user) {
      console.log("Username found:", user);  // Log del usuario encontrado
      return res.status(200).json({ isAvailable: false, message: 'Username is already taken' });
    }

    console.log("Username available");  // Log de si no se encuentra el usuario
    res.status(200).json({ isAvailable: true, message: 'Username is available' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



//create a new user 
router.post('/', async (req, res) => {
  const { password, ...rest } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
    const newUser = new User({ ...rest, password: hashedPassword }); // Crea el usuario con la contraseña encriptada
    const savedUser = await newUser.save(); // Guarda en la base de datos
    res.status(201).json(savedUser);
  } catch (err) {
    if (err.code === 11000) { // Error de duplicado
      res.status(400).json({ message: 'Username already exists' });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
});

//update an user by id(protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el documento actualizado
    });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//delete an user by id(protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
