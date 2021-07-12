"use strict";

function isOdd(num) {
	return (num % 2) === 1;
}

function isEven(num) {
	return num % 2 === 0;
}

function identity(input) {
	return typeof input;
}

function isFive(input) {
	return input === 5;
}

function addFive(num) {
	return num + 5;
}

function isThree(num) {
	return num === 3;
}

function isMultipleOfThree(num){
	return num % 3 === 0;
}

function isMultipleOfThreeAndFive(input){
	return input % 3 === 0 && input % 5 === 0;
}

function isMultipleOf(target, n) {
	return target % n === 0;
}

function isTrue(input){
	if(typeof input === 'boolean'){
		return input;
	}
	return false;
}

