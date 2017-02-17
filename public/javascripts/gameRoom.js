$(document).ready(function () {
    $('.modal').modal({
        dismissible: false,
    });

    // get the user name from session storage
    var sessionUserName = sessionStorage.sessionUserName;
    //gram gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log("gameroom id: " + roomID);

    //reference socket io via game namespace set on server
    var gameIO = io.connect('/game');

    //cache game panel elements for multiple use
    var $bg = $('#scene_bg');
    var $dialog = $('#dialog');
    //cache choice buttons for multiple use
    var $choice0 = $('#0');
    var $choice1 = $('#1');
    var $choice2 = $('#2');
    //cache modal elements
    var $resultImg = $('#resultsimage');
    var $resultTxt = $('#resultsdialog');
    var $resultBtn = $('#closeresultsmodal');

    //store for end of the game
    var gameover = false;

    /**
     * Socket.io custom "on" event listener
     * runs when user connects to page
     * @param(string: load) our name for event
     * @param(obj: data) returns whatever emit('load')
     * passes ex.{game: 'hello from game' }
     * @param(emit(Int: roomID)) sends to add user to room
    */
    gameIO.on('load', function (data) {
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
        waitingForUserToast();
        console.log(data);
    });

    gameIO.on('results', function (data) {
        $resultImg.attr('src', data.resultImg);
        $resultTxt.text(data.resultText);

        $('#resultsmodal').modal('open');
    });

    gameIO.on('next', function (data) {
        console.log(data);

        $bg.css("background-image", "url(" + data.bgImg + ")");
        $dialog.text(data.dialogText);
        $choice0.text(data.choices[0]);
        $choice1.text(data.choices[1]);
        $choice2.text(data.choices[2]);
    });

    gameIO.on('gameover', function (data) {
        console.log(data);

        $('.player-choices').hide();

        setTimeout(displayGameOver, 5500);
    });

    gameIO.on('redirect', function (data) {
        if (data.redirect) {
            window.location.href = data.url;
        }
    });

    gameIO.on('joined game', function (data) {
        userJoinedToast(data.player);
    });

    gameIO.on('player left', function (data) {
        console.log(data.msg);

        userLeftToast();
        if (data.redirect) {
            setTimeout(function () { window.location.href = data.url; }, 3000);
        }
    });

    $resultBtn.on('click', function () {
        if (gameover) {
            window.location.href = "/joingame";
        } else {
            $('#resultmodal').modal('close');
        }
    });

    function displayGameOver() {
        gameover = true;

        $resultImg.attr('src', 'https://media.giphy.com/media/U8bDgsXcnIEFy/giphy.gif');
        $resultTxt.text("Thank you for joining us in this adventure");

        $('#resultsmodal').modal('open');
    }
});



// function to call when a user joins
function userJoinedToast(joiningUser) {
    Materialize.toast(joiningUser + ' has entered', 5000);
}

// function to call when a user leaves
function userLeftToast() {
    Materialize.toast('Other player has left the game', 3000);
    Materialize.toast('Leaving back to lobby', 3000);
}

// function to call when waiting for a user
function waitingForUserToast() {
    Materialize.toast("Waiting for other player's turn", 3000);
}

// function to update leaderboard
// pass in playername from session storage
// pass in either 'W' or 'L' to represent win or loss
function updateLeaderBoard(playername, WorL) {
    if (WorL == 'W' || WorL == 'L') {
        $.post('/api/updateBoard', {playername: playername, result: WorL});
    } else {
        console.log('neither W nor L sent to updateLeaderBoard function');
    }
}
