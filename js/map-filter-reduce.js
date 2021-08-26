"use strict";

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

let knowsMoreThan3Languages = users.filter(user => user.languages.length > 2);

console.log(knowsMoreThan3Languages);

let usersEmail = users.map(user => user.email);

console.log(usersEmail);

let totalYearsOfExperience = users.reduce((total, user) => {
	return total + user.yearsOfExperience;
}, 0);

console.log(totalYearsOfExperience);

let averageYearsOfExperience = users.reduce((total, user) =>{
	total = total + user.yearsOfExperience;
	return total;
	// return totalYears / array.length;
}, 0) / users.length;

console.log(averageYearsOfExperience);

let longestEmail = users.reduce((long, user) => {
	let currentEmail = user.email.split("");
	if(currentEmail.length > long.length){
		return currentEmail;
	} else {
		return long;
	}
}, "");

console.log(longestEmail.join(""));

let allInstructors = users.reduce((currentName, user) =>{
	currentName += `${user.name} `
	return currentName;
}, 'Your current instructors are: ');

console.log(allInstructors);