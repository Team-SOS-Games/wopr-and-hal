$(document).ready(function () {

    //grab gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log(roomID);
    
    //reference socket io via chat namespace set on server
    var chatIO = io.connect('/chat');
    //caching chat components for multiple use 
    var $chat = $('#chat_posts');
    var $postForm = $('#chat_form');
    var $message = $('#chat_message');

    $postForm.submit(function (e) {
        //keeps form from refreshing page on submit
        e.preventDefault();

        var message = {
            roomID: roomID,
            msg: $message.val().trim()
        };

        //post route test (can be used to add post to DB)
        $.post('/chat', function (result) {
            console.log(result);
        });

        //send message to io listener on server
        chatIO.emit('post', message, function (data) {
            console.log(data);
        });
        //empty chat text box
        $message.val('');
    });

    //renders user posts from server to chat panel 
    chatIO.on('new post', function (data) {
        console.log(data);
        $chat.append('<li>' + data.msg + '</li>');
    });

    //runs when user connects to page
    chatIO.on('load', function (data) {
        console.log(data);
        chatIO.emit('load', roomID);
    });

});//end of ready