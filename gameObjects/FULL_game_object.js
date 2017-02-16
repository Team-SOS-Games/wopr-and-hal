// This is the actual deployed game object
// When using, move to /game_object.js

// define object for rock/paper/scissors for now
// array of scenes, bgImg, dialong text, choices

var game_object = {
	scenes: [
		{	
			scene: 0, 
			bgImg: "https://i.ytimg.com/vi/UYxpX3N20qU/maxresdefault.jpg",
			dialogText: "Choose wisely. Your life may depend on it!",
			choices: ["rock", "paper", "scissors"]
		}, // end of scene # 0

		{	
			scene: 1, 
			bgImg: "https://i.ytimg.com/vi/UYxpX3N20qU/maxresdefault.jpg",
			dialogText: "Choose again! Your life still depends on it!",
			choices: ["scissors", "rock", "paper"]
		} // end of scene # 0

	] // end of scenes array

}// end of game_object

// console.log(game_object);

module.exports = game_object;