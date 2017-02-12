//jshint esversion:6
const express = require('express');
const router = express.Router();

/**
 * This router handles the websites HTML routing, redirecting
 * and rendering.
 */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WOPR and HAL' });
});

router.get('/gameroom', function(req, res, next) {
  res.render('gameroom', { title: 'Game Room'});
});

module.exports = router;
