$(document).ready(function () {

    // get the user name from session storage
    var sessionUserName;
    if (sessionStorage.sessionUserName === undefined) {
        sessionUserName = "voldermort";
    } else {
        sessionUserName = sessionStorage.sessionUserName;
    }

    //grab gameroom number from url on load
    var roomID = Number(window.location.pathname.match(/\/gameroom\/(\d+)$/)[1]);

    console.log("chatroom id: " + roomID);
    
    //reference socket io via chat namespace set on server
    var chatIO = io.connect('/chat');

    //caching chat components for multiple use 
    var $chat = $('#chat_posts');
    var $postForm = $('#chat_form');
    var $message = $('#chat_message');

    /**
     * Socket.io custom "on" event listener
     * runs when user connects to page
     * @params(string: load) our name for event
     * @params(obj: data) returns whatever emit('load')
     * passes ex.{ hello: 'hello from chat' }
     * @params(emit(Int: roomID)) sends to add user to room
    */
    chatIO.on('load', function (data) {
        console.log(data);
        chatIO.emit('load', roomID);
    });

    //submit event for posting in chat
    $postForm.submit(function (e) {
        //keeps form from refreshing page on submit
        e.preventDefault();

        //message obj to hold chat post data
        var message = {
            roomID: roomID,
            userName: sessionUserName,
            msg: $message.val().trim()
        };

        //post route test (can be used to add post to DB)
        //returns status code 200/OK
        $.post('/chat', function (result) {
            console.log(result);
        });

        //send message to "post" io listener on server
        chatIO.emit('post', message);

        //empty chat text box
        $message.val('');
    });

    //renders user posts from server to chat panel
    chatIO.on('new post', function (data) {
        console.log(data);
        $chat.prepend('<li><h6>' + '<b><mark>' + data.userName + ':</mark> ' + '</b>' + data.msg + '</h6></li>');
    });

});//end of ready