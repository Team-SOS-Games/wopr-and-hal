const express = require('express');
const router = express.Router();

var chatRouter = function(io) {

    router.get('/chat', function(req, res, next) {
        res.send("I am here");
    });

    router.post('/chat', function(req, res, next) {
        socket.on('post', function (data) {
            console.log(data);
            io.sockets.emit('new post', { msg: data });
        });
        res.status(200).json("ok");
    });

    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });

    return router;
}

module.exports = chatRouter;