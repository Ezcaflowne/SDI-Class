// alert("JavaScript works!");

// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 28th, 2012
// Document: Deliverable 2
// Description: A day at the office

console.log("A resident calls and said that he thinks his waterheater is leaking.")

// Boolean Function

var wetLeaking = "water heater has water coming from it.", 
wetFloor = "The carpet is wet", 
carpetExtraction = "Call for carpet extraction", 
noAction = "No water can be found.";
	if ((wetLeaking && wetFloor) || !(noAction)) {
		console.log(carpetExtraction);
	}	else {
		console.log(noAction);

}console.log("The carpet cleaners arrive at the residents apartment, and begin extraction the water from the carpet.");

// Number Function
// For Loop

var minutes = 0
for (var water = 0; water < 41; water+=4){
	if ( water >= 0 ) {minutes+=5};
	console.log("The carpet cleaners extracted " + water + " gallons of water, for " + minutes + " minutes.");
};
console.log("No more water to extract.");

// String Function

var jobDone = "The job is done "
var lookingForPayment = " the carpet cleaners are looking for payment."
console.log(jobDone + "and" + lookingForPayment)

