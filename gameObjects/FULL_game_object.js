// This is the actual deployed game object
// When using, move to /game_object.js

// define object for rock/paper/scissors for now
// array of scenes, bgImg, dialong text, choices

var game_object = {
	scenes: [
		{	
			scene: 0,
			bgImg: "https://media.giphy.com/media/NNTweliEw1djW/giphy.gif",
			dialogText: "Your old friend in the village of SOS is dying and you must reach the fountain of youth at the top of the mountain to save him. You set out on your journey carrying a sleeping spell, a sword and shades. You reach a bridge but alas a wizard blocks your path and demands you solve his riddle: 'You will always find me in the past. I can be created in the present. But the future can never taint me. What am I?' How do you respond?",
			choices: ["Cry and beg", "Push the wizard off the bridge", "Wildly guess 'history'"],
			results: ["The wizard punishes you with an achy back and makes you grow a mile long beard!", "The wizard curses you to wear shoes as heavy as a thousand souls in your afterlife!", "The wizard lets you pass and gives you special flying shoes!"],
			resultsImgs: ["https://media.giphy.com/media/o7oGPYWTS4LGU/giphy.gif", "https://media.giphy.com/media/WCKIdGbb9fbyw/giphy.gif", "https://media.giphy.com/media/tyymn70zGFXYk/giphy.gif"]
		}, // end of scene # 0

		{	
			scene: 1,
			bgImg: "https://media.giphy.com/media/6ZhkSxi5KvORq/giphy.gif",
			dialogText: "Suddenly a heavy rain storm breaks out, and scares your horse away. This is a big ass mountain and without a horse it's going to take you forever to climb. What do you do?",
			choices: ["Wait for the rain to pass then search for your horse", "Call out to your horse", "Use your beard as a lasso"],
			results: ["You retrieve your horse and continue on your journey.", "With no horse, and stuck in the rain, you develop pneumonia. The next day your horse wanders back to you.", "Your horse is upset by your beard aggression, and bucks causing you to break your leg!"],
			resultsImgs: ["https://media.giphy.com/media/cQNRp4QA8z7B6/giphy.gif", "https://media.giphy.com/media/YLpZ4UmkixqmI/giphy.gif", "https://media.giphy.com/media/aHs1EAnUAxYgU/giphy.gif"]
		}, // end of scene # 1

		{	
			scene: 2,
			bgImg: "https://media.giphy.com/media/3o85xEkfikjZScMyKk/giphy.gif",
			dialogText: "You finally reach the mountain peak but find an ogre asleep beside the fountain of youth. You try to tiptoe over but the ogre awakens and demands you give him a gift or be eaten. What do you do?",
			choices: ["Realize ogres just want to fit in and give him your shades", "Throw your shoes at the ogre and make a run for the fountain", "Meekly tell the ogre you do not have a gift to give"],
			results: ["The ogre tearfully accepts your gesture and vows to always come to your aid!", "While the ogre tries to figure out what to do with the shoes, you narrowly escape!", "The ogre advances to eat you but is overcome with hiccups, allowing you to make a run for the fountain!"],
			resultsImgs: ["https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif", "https://media.giphy.com/media/7gwjvHLaxFFYc/giphy.gif", "https://media.giphy.com/media/8r9efp842pMAM/giphy.gif"]
		}, // end of scene # 2

		{	
			scene: 3,
			bgImg: "https://media.giphy.com/media/10j8xkuvZwEmnS/giphy.gif",
			dialogText: "You run to your horse with your newly acquired fountain of youth water and rush home to the village of SOS. However a band of river nymphs don't think that a mortal should have the power of immortality. They block your path and demand you return the water. What do you do?",
			choices: ["Tell them about your dying friend", "Cast your sleeping spell", "Ignore them and charge"],
			results: ["The nymphs accept your explanation and allow you to continue on your way.", "The nymphs all fall into peaceful slumber. You escape and continue your quest.", "You bumrush at the nymphs. Startled and confused they run into each other and tubmle into the river!"],
			resultsImgs: ["https://media.giphy.com/media/LHY856mtdadXy/giphy.gif", "https://media.giphy.com/media/xT5LMU3h3P73u1sKeQ/giphy.gif", "https://media.giphy.com/media/xThuW47nw3Ye71dhXG/giphy.gif"]
		}, // end of scene # 3

		{	
			scene: 4,
			bgImg: "https://media.giphy.com/media/Wen3tZFsGA1hu/giphy.gif",
			dialogText: "You finally reach the bottom of the mountain and get to the bridge again. With the wizard gone, you now find a ferocious dragon standing guard. What do you do?",
			choices: ["Throw your sword at the dragon", "Pull out your sword and attack", "Pray for a miracle"],
			results: ["The dragon is just a big puppy at heart. Thinking you are playing fetch, he rushes off to retreive the sword for you. You take this opportunity and sneak over the bridge.", "Mustering every bit of courage, you charge at the dragon. Accidentally tripping over a rock, you tumble through the air and accidentally impale the dragon, killing him instantly! Still in shock you cross the bridge and head home.", "The dragon rushes at you, but trips and falls, and stops moving. You step past him and cross the bridge, continually looking back over your shoulder to make sure he doesn't get up again."],
			resultsImgs: ["https://media.giphy.com/media/14piwq7qqnOyEE/giphy.gif", "https://media.giphy.com/media/sUfwrTTqi7lQI/giphy.gif", "https://media.giphy.com/media/urG1PJ1kp1Zu0/giphy.gif"]
		}, // end of scene # 4

		{	
			scene: 5,
			bgImg: "https://media.giphy.com/media/12VXXDTKF92IRq/giphy.gif",
			dialogText: "You finally reach the village of SOS and rush to your friend's cottage. What happens next?",
			choices: ["You realize you are thirsty", "You hear shrieking", "You get an itch"],
			results: ["Your long, hot, tiring quest has exhausted you both phyiscally and mentally. After the long journey your lips are parched. Without thinking, you gulp down the water you brought from the fountain of youth. Your friend dies. You will miss him, but at least you are no longer thirsty!", "The river nymphs are fickle creatures. They have decided you must be stopped, and have been chasing after you all this time and have finally caught up to you. They curse you and turn you into stone. Your friend dies a natural death but not before admiring the lovely new statue in his front yard!", "You scratch your nose, then quickly enter the cottage. You give the water from the fountain of youth to your friend who gratefully drinks it down and is restored to perfect youthful health!"],
			resultsImgs: ["https://media.giphy.com/media/vxoPYV8I6uEwM/giphy.gif", "https://media.giphy.com/media/l0MYRhh3HDLdGphhC/giphy.gif", "https://media.giphy.com/media/l0HFjc5CUvLcEOCfm/giphy.gif"]
		} // end of scene # 5

	] // end of scenes array

};// end of game_object

// console.log(game_object);

module.exports = game_object;