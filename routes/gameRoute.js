var express = require('express');
var router = express.Router();

//list of all games currently active on server
var gamesList = [];

// Game constructor used to help keep track of state
function Game(roomID, User1, User2, numOfUsers, scene) {
    this.roomID = roomID;
    this.User1 = User1;
    this.User2 = User2;
    this.numOfUsers = numOfUsers;
    this.scene = scene;
}


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
            console.log("gameroom id: " + data.roomID);

            var roomID = data.roomID;

            //if room doesn't exist create and add it to list
            if (gamesList.length == 0 || typeof (gamesList[roomID]) == 'undefined') {

                console.log("setting up user for first time in room");

                //setup room and name data for current socket
                setUpUserSocket(socket, data);

                addFirstUser(data);

                console.log(gamesList);

                //TODO emit to user waiting for other player
                socket.emit('waiting', { waiting: "waiting for player 2 to join" });

                // console.log(gamesList[roomID].numOfUsers);

                //if only one user is in current room    
            } else if (gamesList[roomID].numOfUsers == 1) {

                console.log("setting up user two for the first time");

                setUpUserSocket(socket, data);

                var User2 = {
                    turn: true,
                    choice: null,
                    userName: socket.userName || "voldermort"
                };//end of user2

                //User2 to current active game
                gamesList[roomID].User2 = User2;

                //increase number of users in room
                gamesList[roomID].numOfUsers++;

                //console.log(gamesList);

                //emit user 2 has joined game
                socket.emit('waiting', { waiting: "player two has joined" });

            } else {
                //console.log("none selected");

                //tell user room is full and redirect to lobby via front-end
                socket.emit('redirect', { redirect: true, url: "/lobby" });
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
            io.to(socket.room).emit('choice', { choice: data });
        });
    });

    //return router so it can be exported
    return router;

};//end of gameRouter

function setUpUserSocket(user, data) {
    user.room = data.roomID;
    user.userName = data.userName;
    user.join(user.room);
}

function addFirstUser(data) {
    var newGame = {
        roomID: data.roomID,
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
    gamesList[data.roomID] = new Game(
        newGame.roomID,
        newGame.User1,
        newGame.User2,
        newGame.numOfUsers,
        newGame.scene
    );
}

module.exports = gameRouter;