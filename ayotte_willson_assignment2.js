// alert("JavaScript works!");

// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 10th, 2012
// Document: Deliverable 2
// Description: A day at the office


var newWaterHeater = true;
var wetFloor :|| noAction;
var total = 50;

console.log("A resident calls and said that he thinks his waterheater is leaking.")


// String Varible
var waterHeater = function(whatYouNeed) {
    if (newWaterHeater === true) {
        theNeed = "Looks like you need a " + whatYouNeed;
    } else {
        theNeed = "Looks like it's a fuse.";
    };
    return theNeed;
}; // end String Varible

console.log (waterHeater("new water heater"));



// create a boolean function for the (breaker === true) conditional like this:

// var breakerOn = function(power,breaker){
//     // do a conditional to find out if the breaker is on or off
//     // this will have an outcome of either true or false
//     // put that in the variable breakerCondition so you can return the value
//     // to the main code.
//     return breakerCondition;
// };

// You’d call the function with something like

//     console.log("It is " + breakerOn(240,true) + " that the breaker is on.");

var wet = function (wetFloor,noAction) {
	if (wetFloor || noAction) {
		console.log("The carpet is wet and the water needs to be extracted.");
	} else {
		console.log("No water can be found it might be another problem.");
	};
	return wetFloor
};

console.log (wetFloor);



// Boolean Function
// var wetLeaking = "water heater has water coming from it.", 
// wetFloor = "The carpet is wet", 
// carpetExtraction = "Call for carpet extraction", 
// noAction = "No water can be found.";
// 	if ((wetLeaking && wetFloor) || !(noAction)) {
// 		console.log(carpetExtraction);
// 	}	else {
// 		console.log(noAction);

// }

// Number Function
// While Loop
var work = function(total) {
	var water = 0;
		while (water < total) {
			console.log("The carpet company was called out to extract " + water + " gallons of water.")
			water+=4;
};
return water;
}; // End number function

console.log (work(total) + " gallons of water has been extracted from the carpet.");










// console.log("The carpet cleaners arrive at the residents apartment, and begin extraction the water from the carpet.");


// // String Function
// var jobDone = "The job is done "
// var lookingForPayment = " the carpet cleaners are looking for payment."
// console.log(jobDone + "and" + lookingForPayment)

// // Array Function
// // For Loop
// var payments = [
// 	"Log on to the computer,", 
// 	"Create a purchase order,", 
// 	"Give carpet cleaners the PO number",
// 	"The transaction is complete."
// ];

// for (var i=0, p=payments.length; i < p; i++) {
// 	console.log( payments[i] )
// }

// console.log("Now its time to kick back for a job well done.");