$(document).ready(function () {
    // Initialize collapse sidebar
    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right',
    });

    $('#chat_send').on('click', function (e) {
        e.preventDefault();

        $('#textbox').val('');
        console.log("clicked");
    });

    var socket = io.connect('http://localhost:8080');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
});