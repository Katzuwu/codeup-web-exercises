'use strict';

// var startNum = 2;
// var counter = 1;
//
// while(counter < 17){
// 	console.log(startNum);
// 	startNum *= 2;
// 	counter++;
// }


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;

do{
	var conesBought = Math.floor(Math.random() * 5) + 1;
	var conesLeft = allCones - conesBought;
	if(conesBought < conesLeft){
		allCones = conesLeft;
		console.log("Okay, you bought " + conesBought);
		console.log("Okay! here are your ice cream cones! I have " + (conesLeft) + " left!");
	} else if(conesBought > conesLeft){
		if(Math.sign(conesLeft) === -1){
			break;
		}
		console.log("I cannot sell you that amount of cones. I only have " + conesLeft + " left!");
	}
} while(allCones > 0);
console.log("All cones have been sold!");