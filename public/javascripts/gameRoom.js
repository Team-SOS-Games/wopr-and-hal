$(document).ready(function () {

    // get the user name from session storage
    var sessionUserName = sessionStorage.sessionUserName;
    //gram gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log("gameroom id: " + roomID);

    //reference socket io via game namespace set on server
    var gameIO = io.connect('/game');

    //cache game panel elements for multiple use
    var $bg  = $('#scene_bg');
    var $dialog = $('#dialog');
    //cache choice buttons for multiple use
    var $choice0 = $('#0');
    var $choice1 = $('#1');
    var $choice2 = $('#2');

    /**
     * Socket.io custom "on" event listener
     * runs when user connects to page
     * @param(string: load) our name for event
     * @param(obj: data) returns whatever emit('load')
     * passes ex.{game: 'hello from game' }
     * @param(emit(Int: roomID)) sends to add user to room
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
    $choice0.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self);
    });

    //send paper as choice
    $choice1.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self);
    });

    //send scissors as choice
    $choice2.on('click', function () {
        var self = $(this).attr('id');

        gameIO.emit('choice', self);
    });

    //listens for return data after choice events are fired
    gameIO.on('choice', function (data) {
        console.log(data);
    });

    gameIO.on('next', function (data) {
        console.log(data);
        
        $bg.css("background-image", "url(" + data.bgImg + ")");
        $dialog.text(data.dialogText);
        $choice0.text(data.choices[0]);
        $choice1.text(data.choices[1]);
        $choice2.text(data.choices[2]);
    });

    gameIO.on('redirect', function (data) {
        if (data.redirect) {
            window.location.href = data.url;
        }
    });

    gameIO.on('player left', function (data) {
        console.log(data.msg);
        if (data.redirect) {
            setTimeout(function () { window.location.href = data.url; }, 3000);
        }
    });
});

// function to call when a user joins
function userJoinedToast(joiningUser) {
    Materialize.toast(joiningUser + 'has entered', 3000);
}

// function to call when a user leaves
function userLeftToast(leavingUser) {
    Materialize.toast(leavingUser + 'has left the game', 3000);
}

// function to call when waiting for a user
function waitingForUserToast() {
    Materialize.toast('Waiting for another player to join', 3000);
}
