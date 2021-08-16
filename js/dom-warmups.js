'use strict';


var header = document.getElementById('goodMorning');
var afternoonButton = document.getElementById('afternoon');
afternoonButton.addEventListener('click', function (){
	header.innerHTML = 'Good Afternoon, Draco!';
});