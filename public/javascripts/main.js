$(document).ready(function () {
    var socket = io.connect('http://localhost:8080');
    var $chat = $('#chat_posts');
    var $postForm = $('#chat_form');
    var $post = $('#chat_message');

    // Initialize collapse sidebar
    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right',
    });

    $postForm.submit(function (e) {
        e.preventDefault();

        var message = $post.val();
        
        socket.emit('post', message, function (data) {
            console.log(data);
        });

        $post.val('');
    });

    socket.on('new post', function (data) {
        console.log(data);
        $chat.append('<p>'+ data.msg +'</p>');
    })

    socket.on('testing',function (data) {
        console.log(data);
        socket.emit('test', { my: 'data' });
    });
    
});