// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 12th, 2012
// Document: Deliverable 2
// Description: 24 hour emergency


var newWaterHeater = true;
var noAction = true
var total = 40;
var workArray = ["badge", "wallet", "cell-phone", "tools"];
var numberArray = 1

// Procedure
var getWorkRequest = function(workorder) {
	if (workorder === true) {	
		console.log ("Damn another call, it's 3A.M. Don't these things ever stop coming in...");
	} else {	
		console.log ("I\'ll just call him back and say we will be over to look at it in the morning.");
	};
};// End Procedure

// String Varible
var waterHeater = function(whatYouNeed) {
    if (newWaterHeater === true) {
        theIssue = "I see some water leaking on the floor. It looks like you need a " + whatYouNeed;
    } else {
        theIssue = "Hmmm... I dont see any water, I think it might be a something else.";
    };
    return theIssue;
}; // End String Varible

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
}; // End Boolean Function

// Number Function
// While Loop
var work = function(total) {
	var water = 0;
		while (water < total) {
			console.log("The carpet company was called out to extract " + water + " gallons of water.")
			water+=4;
	};
	return water;
}; // End Number Funtion

// Array Function
// For Loop
var thingsIBringToWork = function (items, specificThing) {
	for (i = 0; 
		 i < 4; 
		 i++)
	{
		console.log(items[i]);
	}
		console.log("But I forgot my ");
		return items[specificThing];
}; // End Array Function

console.log('\"A resident calls the after hours emergency phone number saying that he has a problem with his water heater.\"')

console.log ("When I leave for work, I bring with me my ")
console.log (thingsIBringToWork(workArray, numberArray) + " at home.");

getWorkRequest(true)

console.log (waterHeater("new water heater."));

if (wet(noAction) === true) {
	console.log ("The carpet is wet, and a carpet company must extract the water from the carpet.");
} else {
	console.log ("The carpet is dry, and no water extraction is needed.");
}

console.log (work(total) + " gallons of water has been extracted from the carpet.");
