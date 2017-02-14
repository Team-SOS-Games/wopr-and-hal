/**
 * main.js is where the logic for the client side front-end goes
 * this will be used for sending user input back to server
 * and retreiving data from Server back to the user
 */
$(document).ready(function () {
    
    // Initialize collapse sidebar
    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right',
    });

    // listen for onclick on lobby submit button
    $("#text-enter-button").on('click', function() {
    	// when clicked, grab the text the user entered for username
    	var localSavedName = $("#enter_text").val().trim();
    	// save the user name to session storage under key name of sessionUserName
    	sessionStorage.setItem("sessionUserName", localSavedName);
    });
    
});