/**
 * main.js is where the logic for the client side front-end goes
 * this will be used for sending user input back to server
 * and retreiving data from Server back to the user
 */
$(document).ready(function () {
    //reference socket io via chat namespace set on server
    var socket = io.connect('/chat');
    //caching chat components for multiple use
    var $chat = $('#chat_posts');
    var $postForm = $('#chat_form');
    var $message = $('#chat_message');

    //create a new room when lobby button is clicked
    createRoom();

    // Initialize collapse sidebar
    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right',
    });

    //do stuff when we hit send in chat panel
    $postForm.submit(function (e) {
        //form from refreshing page on submit
        e.preventDefault();

        var message = $message.val();
        
        //post route test
        $.post('/chat', function(result){
            console.log(result);             
        });

        //send message to io listener on server
        socket.emit('post', message, function (data) {
            console.log(data);
        });

        //empty chat text box
        $message.val('');
    });

    //renders user posts from server to chat panel
    socket.on('new post', function (data) {
        console.log(data);
        $chat.append('<p>'+ data.msg +'</p>');
    });

    //runs when user connects to page
    socket.on('testing',function (data) {
        console.log(data);
        socket.emit('test', { my: 'data' });
    });
    
});

function createRoom() {
    //random number to add to end of url
    var roomID = Math.floor(Math.random() * (2 - 0) + 0);

    $('#lobby_button').on('click', function() {
        window.location.href = '/gameroom/' + roomID;
    });
}