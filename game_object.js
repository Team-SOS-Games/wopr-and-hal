// define object for rock/paper/scissors for now
// array of scenes, bgImg, dialong text, choices

var game_object = {
	scenes: [
		{	
			scene: 0, 
			bgImg: "http://www.snorgtees.com/media/catalog/product/c/h/choosewisely_fullpic_artwork.jpg",
			dialogText: "Make a choice!",
			choices: ["rock", "paper", "scissors"]
		} // end of scene # 0

	] // end of scenes array

}// end of game_object

// console.log(game_object);

module.exports = game_object;