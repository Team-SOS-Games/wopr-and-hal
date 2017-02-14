var express = require('express');
var router = express.Router();

var chatRouter = function(io) {

    //nice message to test chat route
    router.get('/', function(req, res, next){
        res.send('hello');
    });

    //post route can be used to save post to DB if time allows
    router.post('/', function(req, res, next) {

        res.sendStatus(200);
    });

    /**
     * when user connects to a page with a io namespace of /chat
     * this runs automatically all events sent to and from the client
     * is done inside the connection
     * @params(obj: socket) this is the client obj created by socket.io
    */
    io.on('connection', function (socket) {
        
        //sends to user once connected to a page
        socket.emit('load', { hello: 'hello from chat' });

        /**
         * listens for user response when they connect
         * then adds user to a room via socket property
         * @params(Int: data) room id from client
        */
        socket.on('load', function (data) {
                socket.join(data);
        });

        //log the users connected to chat socket
        //id will be gibberish generateb by socket.io
        for(var id in io.connected) {
            console.log(id);
        }

        /**listens for when a new post is added
         * sends post back to front-end to render on page
         * @params(obj: data) contains
         * @params(data: roomID) id of chatroom
         * @params(data: msg) text content of post
        */
        socket.on('post', function (data) {
            console.log(data);
            //sends post back to users by roomID
            io.to(data.roomID).emit('new post', { msg: data.msg , userName: data.userName});
        });
    });

    //return router so it can be exported
    return router;

};//end of chatRouter

module.exports = chatRouter;