//jshint esversion:6
const express = require('express');
const router = express.Router();

/**
 * This router handles the Get, Post, Put,
 * and Delete routes for out data.
 */
/* GET  api  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
