// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 15th, 2012
// Document: 1207 Scalable Data Infrastructures
// Description: A Day at the Office


// Global Varibles
var coWorkersArray = ["Perry", " Manny", " Edgar"],
    coWorkerDayOff = 2,
    groundsWork = "we'll have more help picking up trash off the grounds."
    charger = false,
    battery = true,
    timeInApt = 90,
    apt = 2117,
    bladeGood = "Ahh, new blades also make the work go a lot smoother, ",
    bladeBad = "compaired to dull blades."
; // End Global Varibles


// Global Object
var tools = {
    brand: "Ryobi",
    model: "18v",
    battery: "Lithium Ion",
    old: "Nicad",
    typeOfTools: ["Drill ", "Sawz-all ", "and a Circular Saw."],
    areBladesGood: true,
    work: function (apt) {
        console.log("Today we will be working in apt " + apt);
    }
}; // End Global Object



var goToWork = function () {
        console.log("Sunday through Thursday i wake up at 7:30AM, to make it to work by 8:00AM.");
};


var maintenanceCoWorkers = function (coWorkers, dayOff) {
    for (var i = 0, c = coWorkers.length; i < c; i++) {
    }   
    return coWorkers[dayOff];
};


var bringNewBattery = function (charger, battery) {
    var getBattery;
    if (charger === true && battery === true) {
        getBattery = true;
    }   else {
        getBattery = false;
    }   return getBattery;
};


var toolsBladeGood = function(good,bad) {
     return good + bad;
};



var workInApartment = function (timeInApt) {
    var timeTillDone = 90;
    var timeInApt = 0;
    while(timeInApt < timeTillDone) {
        console.log( "We have been working for " + timeInApt + " minuates." );
        timeInApt += 10;
        timeInApt++
    }
    return timeInApt
};


var aptsStillToTurn = function (json) {
    for (var i = 0; i < json.apartments.length; i++) {
        var apartments = json.apartments[i];
        console.log("Apartment Number: " + apartments.number + ", Type: " + apartments.type + ", Date to be ready: "
        + apartments.ready);  
    }
};


goToWork();

console.log("My co workers are " + coWorkersArray);

console.log("My supervisor just told me that" + maintenanceCoWorkers(coWorkersArray, coWorkerDayOff)
    + " is attending his english speaking class today, and will not be in to work today.");

console.log(coWorkersArray[1] + ", could you go to the key shop and bring me a new battry?" + coWorkersArray[1] + ' says, \"Sure!\"');

if(bringNewBattery(charger, battery) === true) {
        console.log(coWorkersArray[1] + " should have been back by now with my new battery.");
    } else {
        console.log(coWorkersArray[1] + ' says, "your charger wasn\'t plugging in, I don\'t have a battery for you..."');
};

console.log("I really like my new " + tools.brand +" " + tools.model + tools.battery + " set.");
console.log("My supervisor " + coWorkersArray[0] + " has the same " + tools.brand + tools.model + " set, but he has the older " 
    + tools.old + " batteries and they dont last nearly as long.");

console.log("Both " + tools.brand + " tool sets contain a " + tools.typeOfTools + " So i always find him with my " + tools.battery
    + " batteries in his tools.");
console.log("That's probably why my battery is dead...");

////// Insert String Here ////////
console.log(toolsBladeGood(bladeGood, bladeBad))

tools.work(apt)

console.log(workInApartment(timeInApt) +  " minuates we have been working in this apartment.");

console.log(coWorkersArray[0] + ' says, "Great job today guys, you guys worked very hard." '
+ '"Over the next few day\'s we will be working in these apartments..."');

aptsStillToTurn(json);

console.log("As soon as" + coWorkersArray[2] + " comes back tomorrow " + groundsWork);