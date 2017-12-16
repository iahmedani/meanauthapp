const express = require('express');
const router = express.Router();

// Register
router.post('/register', (req,res) => {
  res.send('Register');
});

// Authenticate
router.post('/authenticate', (req,res) => {
  res.send('Authenticate');
});

// Profile
router.get('/profile', (req,res) => {
  res.send('Profile');
});

module.exports = router;
