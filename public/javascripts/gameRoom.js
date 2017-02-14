$(document).ready(function() {

    //reference socket io via game namespace set on server
    var gameIO = io.connect('/game');

    gameIO.on('load', function (data) {
        console.log(data);
        gameIO.emit('load', data.roomID);
    });
});