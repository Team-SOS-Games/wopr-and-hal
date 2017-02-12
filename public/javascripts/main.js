$(document).ready(function () {
    // Initialize collapse sidebar
    $(".button-collapse").sideNav({
        menuWidth: 300
        , edge: 'right'
        ,
    });
    
    $('#chat_send').on('click', function () {
        $('#textbox').empty();
        console.log("clicked");
        return false;
    });
});