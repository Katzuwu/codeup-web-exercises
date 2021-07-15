"use strict";

// function showMultiplicationTable(num){
// 	console.log(num + " * 1 = " + (num * 1));
// 	console.log(num + " * 2 = " + (num * 2));
// 	console.log(num + " * 3 = " + (num * 3));
// 	console.log(num + " * 4 = " + (num * 4));
// 	console.log(num + " * 5 = " + (num * 5));
// 	console.log(num + " * 6 = " + (num * 6));
// 	console.log(num + " * 7 = " + (num * 7));
// 	console.log(num + " * 8 = " + (num * 8));
// 	console.log(num + " * 9 = " + (num * 9));
// 	console.log(num + " * 10 = " + (num * 10));
// }

// function showMultiplicationTable(number) {
// 	for (var i = 1; i <= 10; i++) {
// 		var result = number * i;
// 		console.log(number + " * " + i + ' = ' + result)
// 	}
// }

for (var i = 1; i <= 10; i++){
	var randomNumber = Math.floor(Math.random() * 181) + 20;
	if (randomNumber % 2 === 0){
		console.log("Here is your even number: " + randomNumber + "!");
	} else if (randomNumber % 2 !==0){
		console.log("Here is your odd number: " + randomNumber + "!");
	}
}

// for (var i = 0; i < 10; i++) {
// 	console.log('for loop iteration #' + i);
// }

for (var i = 1; i < 10; i++) {
	var length = i.toString().repeat(i);
	console.log(length);
}

// for(var i = 100; i > 0; i -= 5){
// 	console.log(i);
// }

