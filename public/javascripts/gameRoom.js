$(document).ready(function() {

    //gram gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log("gameroom id: " + roomID);

    //reference socket io via game namespace set on server
    var gameIO = io.connect('/game');

    //cache choice buttons for multiple use
    var $choice0 = $('#0');
    var $choice1 = $('#1');
    var $choice2 = $('#2');

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
        gameIO.emit('load', roomID);
    });

    /**
     * TODO need to disable button choices after click
     * re-enable after both users choices submitted and result
     * from server is sent back
     */
    //send rock as choice
    $choice0.on('click', function() {
        var self = $(this).attr('id');
        
        gameIO.emit('choice', self, function(data) {
            //console.log(data);
        });
    });

    //send paper as choice
    $choice1.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self, function (data) {
            //console.log(data);
        });
    });

    //send scissors as choice
    $choice2.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self, function (data) {
            //console.log(data);
        });
    });

    //listens for return data after choice events are fired
    gameIO.on('choice', function(data){
        console.log(data);
    });
});