// var flavor = prompt("Welcome to Codeup Ice Cream! What flavor would you like?");

// if (flavor === "chocolate") {
// 	alert("One chocolate coming right up!")
// } else if (flavor === "vanilla") {
// 	alert("One vanilla coming up!")
// } else if (flavor === "strawberry") {
// 	alert("One strawberry coming right up!")
// } else {
// 	alert("We don't carry that flavor. Sorry :(")
// }

// switch (flavor) {
// 	case("chocolate"):
// 		alert("One chocolate!");
// 		break;
// 	case ("vanilla"):
// 		alert("One vanilla!");
// 		break;
// 	case("strawberry"):
// 		alert("One strawberry!");
// 		break;
// 	default:
// 		alert("We don't have that flavor.");
// }

// function getIceCreamOrder(flavor) {
// 	if (flavor === "chocolate") {
// 		alert("One chocolate coming right up!")
// 	} else if (flavor === "vanilla") {
// 		alert("One vanilla coming up!")
// 	} else if (flavor === "strawberry") {
// 		alert("One strawberry coming right up!")
// 	} else {
// 		alert("We don't carry that flavor. Sorry :(")
// 	}
// }

// function getIceCreamOrder(flavor) {
// 	if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry"){
// 		alert("Master, allow me to get you a scoop of " + flavor + ".");
// 	} else {
// 		alert("Gomenasai, I do not have that flavor on hand Master.");
// 	}
// }
//
// getIceCreamOrder("chocolate");
//
// var decision = confirm("Master, are you sure you want to close this page?");
// alert(decision);

// if (decision === true){
// 	alert("Yes Master, I will close the page right now.")
// } else {
// 	alert("Okay Master, we will stay on this page.")
// }

// alert( (decision === true)? "Yes Master, I will close the page right now." : "Okay Master, we will stay on this page.");

// var num = 10;

// if(num % 5 === 0){
// 	alert("Master, your number is divisible by 5.")
// } else {
// 	alert("Master, your number is not divisible by 5.")
// }

// function divisibleByFive(num){
// 	if(num % 5 === 0){
// 		alert("Master, your number is divisible by 5.")
// 	} else {
// 		alert("Master, your number is not divisible by 5.")
// 	}
// }

// function divisibleByFive(num) {
// 	alert( (num % 5 === 0)? "Master, you entered a number that is divisible by 5!" : "Master, gomen, you did not enter a number divisible by 5.");
// }

// function divisibleByFive(num){
// 	return num % 5 === 0;
// }


// function isUndefined(input) {
// 	return typeof input == "undefined";
// }

// function isMVPCustomer(totalPurchase) {
// 	return totalPurchase > 1000;
// }
//
// var totalPurchase = 1001;
//
// if (isMVPCustomer(totalPurchase)){
// 	alert("Master, a customer has spent over $1000! We have and MVP customer!");
// }