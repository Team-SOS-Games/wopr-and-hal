$(document).ready(function () {

    //grab gameroom number from url on load
    var id = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log(id);
    
    //reference socket io via chat namespace set on server
    var socket = io.connect('/chat');
    //caching chat components for multiple use 
    var $chat = $('#chat_posts');
    var $postForm = $('#chat_form');
    var $message = $('#chat_message');

    $postForm.submit(function (e) {
        //form from refreshing page on submit
        e.preventDefault();

        var message = $message.val();

        //post route test
        $.post('/chat', function (result) {
            console.log(result);
        }); //send message to io listener on server
        socket.emit('post', message, function (data) {
            console.log(data);
        });
        //empty chat text box
        $message.val('');
    });

    //renders user posts from server to chat panel 
    socket.on('new post', function (data) {
        console.log(data);
        $chat.append('<li>' + data.msg + '</li>');
    });

    //runs when user connects to page
    socket.on('testing', function (data) {
        console.log(data);
        socket.emit('test', { my: 'data' });
    });

});//end of ready