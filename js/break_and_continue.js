"use strict";


// var userNumber;
// do {
// 	userNumber = (prompt("Master! Will you pick an odd number between 1 and 50 for me?"))
// } while (userNumber % 2 === 0);
// console.log("Master, your number to skip is: " + userNumber);
// for (var i = 1; i < 50; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else if (i === userNumber){
// 		console.log("Gomenasai Master, we are going to skip: " + userNumber);
// 	}
// 	console.log("Master, here is an odd number: " + i);
// }

do {
	var userNumber = parseFloat(prompt("Master, will you enter an odd number between 1 and 50 to skip for me?"));
	if (userNumber % 2 !== 0) {
		break;
	}
} while (userNumber % 2 === 0) {
	console.log("Master, your number to skip is: " + userNumber);
		for (var i = 1; i < 50; i++) {
			if (i % 2 === 0) {
				continue;
			} if (i === userNumber) {
				console.log("Gomenasai Master, we are going to skip: " + userNumber);
				continue;
			}
			console.log("Master, here is an odd number: " + i);
		}
	}