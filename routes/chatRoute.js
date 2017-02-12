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

    //when user connects to site this runs
    io.on('connection', function (socket) {
        //sends to user once connected to a page
        socket.emit('testing', { hello: 'world' });
        //listens for user response when they connect
        socket.on('test', function (data) {
            console.log(data);
        });

        //listens for when a new post is added
        socket.on('post', function (data) {
            console.log(data);
            //sends post back to users
            io.emit('new post', { msg: data });
        });
    });

    //return router so it can be exported
    return router;
};

module.exports = chatRouter;