//jshint esversion:6
const express = require('express');
const router = express.Router();
const db = require('../models/index.js');

/**
 * This router handles the Get, Post, Put,
 * and Delete routes for out data.
 */
/* GET  api  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next) {
  res.json('I am a postman');
});

router.post('/adduser', function(req, res, next) {
	console.log("username: ", req.body.userName);
	db.user.create(req.body.userName, function(error) {
		if (error) {
			console.log("Please enter a valid user name!");
		}

		// add this after /createroom is made
		// res.redirect('/createroom');
	});
});

module.exports = router;
