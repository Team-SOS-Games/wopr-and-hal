$(document).ready(function () {

    // get the user name from session storage
    var sessionUserName = sessionStorage.sessionUserName;
    //gram gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log("gameroom id: " + roomID);

    //reference socket io via game namespace set on server
    var gameIO = io.connect('/game');

    //cache choice buttons for multiple use
    $rock = $('#rock');
    $paper = $('#paper');
    $scissors = $('#scissors');

    /**
     * Socket.io custom "on" event listener
     * runs when user connects to page
     * @params(string: load) our name for event
     * @params(obj: data) returns whatever emit('load')
     * passes ex.{game: 'hello from game' }
     * @params(emit(Int: roomID)) sends to add user to room
    */
    gameIO.on('load', function (data) {
        console.log(data);
        gameIO.emit('load', { roomID: roomID, userName: sessionUserName });
    });

    /**
     * TODO need to disable button choices after click
     * re-enable after both users choices submitted and result
     * from server is sent back
     */
    //send rock as choice
    $rock.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self, function (data) {
            //console.log(data);
        });
    });

    //send paper as choice
    $paper.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self, function (data) {
            //console.log(data);
        });
    });

    //send scissors as choice
    $scissors.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self, function (data) {
            //console.log(data);
        });
    });

    //listens for return data after choice events are fired
    gameIO.on('choice', function (data) {
        console.log(data);
    });
});