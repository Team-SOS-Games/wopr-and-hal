var express = require('express');
var router = express.Router();

//@params(Obj: io) passed in from server.js
var gameRouter = function (io) {

    //nice message to test game route
    router.get('/', function (req, res, next) {
        res.send('hello');
    });

    //post for adding data to leaderboard
    router.post('/', function (req, res, next) {

        res.sendStatus(200);
    });

     /**
     * when user connects to a page with a io namespace of /game
     * this will run automatically. All events sent to and from the client
     * is done inside the connection
     * @params(String: connection) built in event from socket.io
     * @params(Obj: socket) this is the client obj created by socket.io
    */
    io.on('connection', function (socket) {

        //sends to users once connected to page
        socket.emit('load', {game: 'hello from game'});

        /**
        * listens for user when they connect,
        * then adds user to a room via socket property
        * @params(Int: data) room id from client
        */
        socket.on('load', function(data) {
            console.log("gameroom id: " + data);
            socket.join(data);
        });

        /**
         * Listens for users click events
         * sends data back to all users
         * TODO needs to send back to same room only, pass room id from client inside
         * @params(String: data) id of element clicked by user
         */
        socket.on('choice', function(data) {
            console.log(data);
            io.emit('choice', { choice: data });
        });
    });

    //return router so it can be exported
    return router;

};//end of gameRouter

module.exports = gameRouter;