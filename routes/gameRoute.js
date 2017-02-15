var express = require('express');
var router = express.Router();
var gamesList = [];

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
        socket.emit('load', { game: 'hello from game' });

        /**
        * listens for user when they connect,
        * then adds user to a room via socket property
        * @params(Int: data) room id from client
        */
        socket.on('load', function (data) {
            console.log("gameroom id: " + data);

            var roomID = data.roomID;

            //if room doesn't exist create and add it to list
            if (gamesList.indexOf(roomID) !== -1) {

                //setup data room and name data for current socket
                setUpUserSocket(socket, data);

                var newGame = {
                    roomID: roomID,
                    User1: {
                        turn: true,
                        choice: 0,
                        userName: data.userName,
                    },
                    User2: {
                        turn: true,
                        choice: null,
                        userName: "Voldermort"
                    },
                    numOfUsers: 1,
                    scene: 0
                };//end of newGame setup object

                //TODO call constuctor on gameslist adding new game

                //TODO emit to user waiting for other player

                //if only one user is in current room    
            } else if (gamesList[roomID].numOfUsers === 1) {

                setUpUserSocket(user, data);

                var User2 = {
                    turn: true,
                    choice: null,
                    userName: socket.userName
                };//end of user2

                gamesList[roomID].User2 = User2;

                //emit user 2 has joined game

            } else {
                //tell user room is full and redirect to lobby via front-end
                io.emit('redirect', {capicity: true});
            }

        });

        /**
         * Listens for users click events
         * sends data back to all users
         * TODO needs to send back to same room only, pass room id from client inside
         * @params(String: data) id of element clicked by user
         */
        socket.on('choice', function (data) {
            console.log(data);
            io.emit('choice', { choice: data });
        });
    });

    //return router so it can be exported
    return router;

};//end of gameRouter

function setUpUserSocket(user, data) {
    user.room = roomID;
    user.userName = data.userName;
    user.join(user.room);
}

module.exports = gameRouter;