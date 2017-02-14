var express = require('express');
var router = express.Router();

var gameRouter = function (io) {

    //nice message to test chat route
    router.get('/', function (req, res, next) {
        res.send('hello');
    });

    //post route can be used to save post to DB if time allows
    router.post('/', function (req, res, next) {

        res.sendStatus(200);
    });

    //when user connects to site this runs
    io.on('connection', function (socket) {

        socket.emit('load', {game: 'hello from game'});

        socket.on('load', function(data) {
            socket.join(data);
        });
    });

    //return router so it can be exported
    return router;

};//end of gameRouter

module.exports = gameRouter;