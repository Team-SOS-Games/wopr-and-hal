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
	console.log("password: ", req.body.password);
	db.user.findOrCreate({where: {userName: req.body.userName, password: req.body.password}}).then(function() {

		//add this after /createroom is made
		res.redirect('/createroom');

	}).catch(function (err) {
		
		res.redirect('/lobby');
		console.error(err.errors[0].message);
	});
});

module.exports = router;
