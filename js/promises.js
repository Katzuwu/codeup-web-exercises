"use strict";

let username = document.getElementById('username').value;
let submit = document.getElementById('submit');
// let username = "Katzuwu"
let githubRetrieval = (username) => {
	fetch(`https://api.github.com/users/${username}/events`, {
		method: 'GET',
		headers: {
			'Authorization': GITHUB_API_TOKEN
		}
	}).then(response => response.json()).then(data => {
		if(data[0].type === 'PushEvent') {
			console.log(data[0].created_at);
		}
	}).catch(console.error)
}

githubRetrieval(username);