//jshint esversion:6
const express = require('express');
const router = express.Router();
const db = require('../models/index.js');

// import the game_object that holds scenes and data
const game_object = require('../game_object.js')

/**
 * This router handles the websites HTML routing, redirecting
 * and rendering.
 */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WOPR and HAL' });
});

router.get('/lobby', function(req, res, next) {
  res.render('lobby', {title: 'Game lobby'});
});

router.get('/leaderboards', function(req, res, next) {
	db.leaderboards.findAll({
		// order by games played
		order: [['wins', 'DESC']]
	}).then(function(leaderboardsObject) {
		res.render('leaderboards', {leaderboards: leaderboardsObject});
	});
});

router.get('/createroom', function(req, res, next) {
  var roomID = Math.floor(Math.random() * (2 - 0) + 0);

  res.redirect('/gameroom/'+ roomID);
});

router.get('/gameroom/:id', function(req, res, next) {
  res.render('gameroom', { title: 'Game Room', scene: game_object.scenes[0]});
});

module.exports = router;
