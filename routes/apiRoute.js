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

// updateBoard route is for adding a win or loss to leaderboard and
// also incrementing the games played
router.post('/updateBoard', function(req, res, next) {
	console.log("username: ", req.body.playername);
	console.log("win or loss: ", req.body.result);

	// if W is received then increment wins and gamesplayed
	if (req.body.result == 'W') {
		db.leaderboards.findOne({
			where: {userName: req.body.playername}
		}).then(function(user) {
			user.increment(['wins', 'gamesplayed'])
		});

	// if L is received then increment losses and gamesplayed
	} else if (req.body.result = 'L') {
		db.leaderboards.findOne({
			where: {userName: req.body.playername}
		}).then(function(user) {
			user.increment(['losses', 'gamesplayed'])
		});
	} else {
		console.log('/updateBoard route did not receive W or L');
	}
	
	res.send();
});

module.exports = router;
