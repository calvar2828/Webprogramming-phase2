const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Importa el modelo de usuario
const router = express.Router();

//login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    //the user exists??
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message:'invalid username or password' });
    }


    //comparing the password with the hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    //save the info of the user in the session
    req.session.user = {

      id: user._id,
      username: user.username,
      role: user.role,

    };

    res.status(200).json({ message: 'Login successful', user: req.session.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//route to check if the user is authenticated
router.get('/check-auth', (req, res) => {
  if (req.session.user) {
    res.status(200).json({ isAuthenticated: true, user: req.session.user });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

//for the logout
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {

        return res.status(500).json({ message: 'Could not log out' });
      }
  
      //to delete the client cookie 

      res.clearCookie('connect.sid');
      res.status(200).json({ message: 'Logout successful' });


      
    });
  });
  

module.exports = router;
