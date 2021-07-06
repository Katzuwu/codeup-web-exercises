"use strict";

// let userDecision = confirm("do you weawwy wanna weave me?");
// console.log(userDecision);
//
// if (userDecision === true){
//     alert("oh.... okay");
//     console.log("goodbye fwen")
// } else {
//     alert("thank you uwu");
//     console.log("ara ara welcome home master")
// }

var currentSpeedInMph = 65;
var plannedSpeedInMph = prompt("Master, how fast do you wish to go?");
var distanceLeftInMiles = prompt("Master, how much further do we have left?");
var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles / currentSpeedInMph) * 60;
var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles / plannedSpeedInMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);
console.log("Master, driving at " + plannedSpeedInMph + " mph, you will arrive " + minutesGained + ":" + seconds + " minutes earlier. Is that okay?");