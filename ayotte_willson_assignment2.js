// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 10th, 2012
// Document: Deliverable 2
// Description: A day at the office


var newWaterHeater = true;
var noAction = true
var total = 40;

console.log('\"A resident calls and puts in a work order.\"')



// Procedure

var getWorkRequest = function (workorder) 
{
	if (workorder === true)
	{	
		console.log ("Damn another work order, don't these things ever stop coming in...");
	}
	else 
	{	
		console.log ("I\'m not going to do this right now.");
	}
}


getWorkRequest(true)






// String Varible
var waterHeater = function(whatYouNeed) {
    if (newWaterHeater === true) {
        theNeed = "Looks like you need a " + whatYouNeed;
    } else {
        theNeed = "Looks like it's a fuse.";
    };
    return theNeed;
}; // end String Varible

console.log (waterHeater("new water heater."));


// Boolean Function

var wet = function (noAction) {
	var outcome;
	var wetFloor = false
	if (wetFloor != noAction) {
		outcome = true
	} else {
		outcome = false
	};
	return outcome
};

if (wet(noAction) === true) {
	console.log ("The carpet is wet, and a carpet company must extract the water from the carpet.");
} else {
	console.log ("The carpet is dry, and no water extraction is needed.");
}


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