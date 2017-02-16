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
        * listens for user when they load page,
        * Creates a game and adds it to Gameslist if it doesn't already exist
        * when a user joins a room already in list they are added as second player
        * if a room already has 2 players they redireted back to lobby page to find another game
        * @params(Int: data) room id from client
        */
        socket.on('load', function (data) {

            var roomID = data.roomID;

            console.log(gamesList["room: " + roomID]);

            console.log(gamesList["room: " + roomID] == 'undefined');

            //if room doesn't exist create and add it to list
            if (typeof (gamesList["room: " + roomID]) == 'undefined') {

                console.log(gamesList.length === 0 || gamesList["room: " + roomID] == 'undefined');
                console.log("setting up user for first time in room");

                //setup room and name data for current socket
                setUpUserSocket(socket, data);

                addFirstUser(data);

                //TODO emit to user waiting for other player
                socket.emit('waiting', { waiting: "waiting for player 2 to join" });

                console.log(gamesList["room: " + roomID].numOfUsers);

                //if only one user is in current room    
            }
            else if (gamesList["room: " + roomID].numOfUsers == 1) {

                console.log("setting up user two for the first time");

                setUpUserSocket(socket, data);

                addSecondUser(socket);

                //emit user 2 has joined game
                socket.emit('waiting', { waiting: "player two has joined" });

            }
            else {

                //tell user room is full and redirect to lobby via front-end
                socket.emit('redirect', { redirect: true, url: "/lobby" });

            }

            console.log(gamesList);
        });

        /**
         * Listens for users click events
         * sends data back to all users
         * @params(String: data) id of element clicked by user
         */
        socket.on('choice', function (data) {

            storeUsersChoice(socket, data);

            console.log(data);
            io.to(socket.room).emit('choice', { choice: data });
        });

        //listens for disconnect of user
        socket.on('disconnect', function () {
            var message = "player has left the game";
            console.log(message);

            console.log(gamesList[0]);

            for (var key in gamesList) {
                console.log(key);
                if (key == "room: " + socket.room) {
                    console.log("match");

                    delete gamesList[key];

                    io.to(socket.room).emit('player left', { msg: message, redirect: true, url: "/lobby" });
                }
            }

            console.log(gamesList);
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
            userName: data.userName || "Voldermort1",
        },
        User2: {
            turn: true,
            choice: null,
            userName: null
        },
        numOfUsers: 1,
        scene: 0
    };//end of newGame setup object

    //TODO call constuctor on gameslist adding new game
    gamesList["room: " + data.roomID] = new Game(
        newGame.roomID,
        newGame.User1,
        newGame.User2,
        newGame.numOfUsers,
        newGame.scene
    );
}

function addSecondUser(socket) {
    var User2 = {
        turn: true,
        choice: null,
        userName: socket.userName || "voldermort2"
    };//end of user2

    //User2 to current active game
    gamesList["room: " + socket.room].User2 = User2;

    //increase number of users in room
    gamesList["room: " + socket.room].numOfUsers++;
}

function storeUsersChoice(socket, choice) {

    var user1 = gamesList["room: " + socket.room].User1;
    var user2 = gamesList["room: " + socket.room].User2;

    //check if current socke is User1 if not assign choice to User2
    if (user1.userName == socket.userName) {

        user1.choice = parseInt(choice);

    } else {

        user2.choice = parseInt(choice);

    }

    console.log("user 1: %s user 2: %d", user1.choice, user2.choice);

}

module.exports = gameRouter;