const express = require('express');
const router = express.Router();

var chatRouter = function(io) {

    router.get('/chat', function(req, res, next) {
        res.send("I am here");
    });

    router.post('/chat', function(req, res, next) {
        
        res.status(200).json("ok");
    });

    io.on('connection', function (socket) {
        socket.emit('testing', { hello: 'world' });
        socket.on('test', function (data) {
            console.log(data);
        });

        socket.on('post', function (data) {
            console.log(data);
        io.sockets.emit('new post', { msg: data });
        });
    });

    return router;
}

module.exports = chatRouter;