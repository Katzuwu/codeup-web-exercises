"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
// 	if(color === "blue"){
// 		return ("Master, blue is my favorite color!");
// 	} else if(color === "red"){
// 		return ("Master, red is sus.");
// 	} else if(color === "orange"){
// 		return ("Master, orange is a fruit and a color.");
// 	} else if(color === "yellow"){
// 		return ("Master, yellow tastes like a banana!")
// 	} else if(color === "green"){
// 		return("Master, green looks like the grass we grow!")
// 	} else if(color === "indigo"){
// 		return("Master, indigo is the actual color of blueberries!")
// 	} else if(color === "purple"){
// 		return("Master, purple and indigo are actually different.")
// 	} else {
// 		return("Master, I don't know anything about that color.");
// 	}
// }
//
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(color){
// 	switch(color){
// 		case("red"):
// 			return ("Master, red is sus.");
// 			break;
// 		case("orange"):
// 			return ("Master, orange is a fruit and a color.");
// 			break;
// 		case("yellow"):
// 			return ("Master, yellow tastes like a banana.");
// 			break;
// 		case("green"):
// 			return ("Master, green is like the grass we grow.");
// 			break;
// 		case("blue"):
// 			return ("Master, blue is my favorite color!");
// 			break;
// 		case("indigo"):
// 			return ("Master, blueberries are indigo.");
// 			break;
// 		case("violet"):
// 			return ("Master, violet and purple are different colors.");
// 			break;
// 		default:
// 			return ("Master, I don't know anything about that color.");
// 	}
// }



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Master, what color is your favorite?");
// alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(num1, num2){
// 	if(num1 === 0){
// 		return num2;
// 	} else if(num1 === 1){
// 		return num2 - (num2 * .1);
// 	} else if(num1 === 2){
// 		return num2 - (num2 * .25);
// 	} else if(num1 === 3){
// 		return num2 - (num2 * .35);
// 	} else if(num1 === 4){
// 		return num2 - (num2 * .5);
// 	} else if(num1 === 5){
// 		return num2 - (num2 * 1);
// 	}
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// var totalBill = prompt("Master, what is the total amount of your bill?");
// alert("Master, your lucky number is " + luckyNumber + "!");
// alert("Master, before the discount, your total was $" + totalBill);
// alert("Master, after the discount, your total is $" + calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if(confirm("Master, would you like to enter a number for me?")) {
	var userNumber = (prompt("What number will you pick, Master?"));
		} else {
			alert("Oh...okay. Thank you for your time Master.");
		}

		if(typeof parseFloat(userNumber) === "number"){
			if ((userNumber % 2 === 0)) {
				alert("Master, your number is even!");
			} else {
				alert("Master, your number is odd!");
			}

			alert("Master, your number + 100 is " + (parseFloat(userNumber + 100)) + "!");

			if (userNumber > 0) {
				alert("Master, you have a positive number.")
			} else {
				alert("Master, you have a negative number.")
			}
		} else {
			alert("Master, you entered something that isn't a number. Please try again and enter a number.")
		}


