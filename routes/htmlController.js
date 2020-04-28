// require dependencies
const path = require('path');
const express = require('express');
const router = express.Router();

// get root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

// catch all route- anything else will default to the main page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

module.exports = router;