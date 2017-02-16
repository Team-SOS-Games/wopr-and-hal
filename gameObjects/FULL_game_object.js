// This is the actual deployed game object
// When using, move to /game_object.js

// define object for rock/paper/scissors for now
// array of scenes, bgImg, dialong text, choices

var game_object = {
	scenes: [
		{	
			scene: 0,
			bgImg: "http://giphy.com/embed/NNTweliEw1djW",
			dialogText: "Your old friend in the village of SOS is dying and you must reach the fountain of youth at the top of the mountain to save him. You set out on your journey carrying a sleeping spell, a sword and shades. You reach a bridge but alas a wizard blocks your path and demands you solve his riddle: 'You will always find me in the past. I can be created in the present. But the future can never taint me. What am I?' What do you do?",
			choices: ["Cry and beg", "Push the wizard off the bridge", "Wildly guess 'history'"],
			choice0Result: "The wizard punishes you with an achy back and makes you grow a mile long beard",
			choice0Img: "http://giphy.com/embed/o7oGPYWTS4LGU",
			choice1Result: "The wizard curses you to wear shoes as heavy as a thousand souls in your afterlife",
			choice1Img: "http://giphy.com/embed/WCKIdGbb9fbyw",
			choice2Result: "The wizard lets you pass and gives you special flying shoes",
			choice2Img: "http://giphy.com/embed/tyymn70zGFXYk"
		}, // end of scene # 0

		{	
			scene: 1,
			bgImg: "http://giphy.com/embed/6ZhkSxi5KvORq",
			dialogText: "Suddenly a heavy rain storm breaks out, and scares your horse away. This is a big ass mountain and without a horse it's going to take you forever to climb. What do you do?",
			choices: ["Wait for the rain to pass then search for your horse", "Call out to your horse", "Use your beard as a lasso"],
			choice0Result: "You retrieve your horse and continue on your journey",
			choice0Img: "http://giphy.com/embed/cQNRp4QA8z7B6",
			choice1Result: "With no horse, and stuck in the rain, you develop pneumonia. The next day your horse wanders back to you.",
			choice1Img: "http://giphy.com/embed/YLpZ4UmkixqmI",
			choice2Result: "Your horse is upset by your beard aggression, and bucks causing you to break your leg",
			choice2Img: "http://giphy.com/embed/aHs1EAnUAxYgU"
		}, // end of scene # 1

		{	
			scene: 2,
			bgImg: "http://giphy.com/embed/3o85xEkfikjZScMyKk",
			dialogText: "You finally reack the mountain peak but find an ogre asleep beside the fountain of youth. You try to tiptoe over but the ogre awakens and demands you give him a give or be eaten. What do you do?",
			choices: ["Realize ogres just wants to fit in and give him your shades", "Throw your shoes at the ogre and make a run for the fountain", "Meekly tell the ogre you don't have a gift to give"],
			choice0Result: "The ogre tearfully accepts your gesture and vows to always come to your aid",
			choice0Img: "http://giphy.com/embed/3fmRTfVIKMRiM",
			choice1Result: "While the ogre tries to figure out what to do with the shoes, you narrowly escape",
			choice1Img: "http://giphy.com/embed/7gwjvHLaxFFYc",
			choice2Result: "The ogre advances to eat you but is overcome with hiccups, allowing you to make a run for the fountain",
			choice2Img: "http://giphy.com/embed/8r9efp842pMAM"
		}, // end of scene # 2

		{	
			scene: 3,
			bgImg: "http://giphy.com/embed/10j8xkuvZwEmnS",
			dialogText: "You run to your horse with your newly acquired fountain of youth water and rush home to the village of SOS. However a band of river nymphs don't think that a mortal should have the power of immortality. They block your path and demand you return the water. What do you do?",
			choices: ["Tell them about your dying friend", "Cast your sleeping spell", "Ignore them and charge"],
			choice0Result: "The nymphs accept your explanation and allow you to continue on your way",
			choice0Img: "http://giphy.com/embed/LHY856mtdadXy",
			choice1Result: "You escape and continue your quest",
			choice1Img: "http://giphy.com/embed/xT5LMU3h3P73u1sKeQ",
			choice2Result: "You bumrush at the nymphs. Startled and confused they run into each other and tubmle into the river",
			choice2Img: "http://giphy.com/embed/xThuW47nw3Ye71dhXG"
		}, // end of scene # 3

		{	
			scene: 4,
			bgImg: "http://giphy.com/embed/Wen3tZFsGA1hu",
			dialogText: "You finally reach the bottom of the mountain and get to the bridge again. With the wizard gone, you now find a ferocious dragon standing guard. What do you do?",
			choices: ["Throw your sword at the dragon", "Pull out your sword and attack", "Pray for a miracle"],
			choice0Result: "The dragon is just a big puppy at heart. Thinking you are playing fetch, he rushes off to retreive the sword for you. You take this opportunity and sneak over the bridge",
			choice0Img: "http://giphy.com/embed/14piwq7qqnOyEE",
			choice1Result: "Mustering every bit of courage, you charge at the dragon. Accidentally tripping over a rock, you tumble through the air and accidentally impale the dragon, killing him instantly. Still in shock you cross the bridge and head home",
			choice1Img: "http://giphy.com/embed/sUfwrTTqi7lQI",
			choice2Result: "The dragon rushes at you, but trips and falls, and stops moving. You step past him and cross the bridge, continually looking back over your shoulder to make sure he doesn't get up again",
			choice2Img: "http://giphy.com/embed/urG1PJ1kp1Zu0"
		}, // end of scene # 4

		{	
			scene: 5,
			bgImg: "http://giphy.com/embed/12VXXDTKF92IRq",
			dialogText: "You finally reach the village of SOS and rush to your friend's cottage. What happens next?",
			choices: ["You realize you are thirsty", "You hear shrieking", "You get an itch"],
			choice0Result: "Your long, hot, tiring quest has exhausted you both phyiscally and mentally. After the long journey your lips are parched. Without thinking, you gulp down the water you brought from the fountain of youth. Your friend dies. You will miss him, but at least you are no longer thirsty",
			choice0Img: "http://giphy.com/embed/vxoPYV8I6uEwM",
			choice1Result: "The enraged river nymphys have been chasing after you all along and have finally caught up to you. They curse you for your rudeness and turn you into stone. Your friend dies a natural death but not before admiring the lovely new statue in his front yard",
			choice1Img: "http://giphy.com/embed/l0MYRhh3HDLdGphhC",
			choice2Result: "You scratch your nose, then quickly enter the cottage. You give the water from the fountain of youth to his friend who gratefully drinks it down and is restored to perfect youthful health",
			choice2Img: "http://giphy.com/embed/l0HFjc5CUvLcEOCfm"
		} // end of scene # 5

	] // end of scenes array

}// end of game_object

// console.log(game_object);

module.exports = game_object;