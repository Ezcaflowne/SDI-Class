// alert("JavaScript works!");

// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 10th, 2012
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

}

console.log("The carpet cleaners arrive at the residents apartment, and begin extraction the water from the carpet.");

// Number Function
// While Loop
var water = 0,
	minutes = 0
;
while (water < 40) {
	console.log("The carpet cleaners extracted " + water + " gallons of water, for " + minutes + " minutes.");
	water+=4;
	minutes+=5;
}

console.log("No more water to extract.");


// String Function
var jobDone = "The job is done "
var lookingForPayment = " the carpet cleaners are looking for payment."
console.log(jobDone + "and" + lookingForPayment)

// Array Function
// For Loop
var payments = [
	"Log on to the computer,", 
	"Create a purchase order,", 
	"Give carpet cleaners the PO number",
	"The transaction is complete."
];

for (var i=0, p=payments.length; i < p; i++) {
	console.log( payments[i] )
}

console.log("Now its time to kick back for a job well done.")
