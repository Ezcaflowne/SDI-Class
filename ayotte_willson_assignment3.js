// alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 15th, 2012
// Document: 1207 Scalable Data Infrastructures
// Description: A Day at the Office

// Global Object
var tools = {
    brand: "Ryobi",
    model: "18v",
    battery: "Lithium Ion",
    old: "Nicad",
    typeOfTools: ["Drill ", "Sawz-all ", "and a Circular Saw"],
    doesItWork: true,
    areBladesGood: true,
    work: function (apt) {
        console.log("Today we will be working in apt " + apt);
    }
};



var goToWork = function () {
        console.log("Sunday through Thursday i wake up at 7:30AM, to make it to work by 8:00AM.");
};

goToWork();

var maintenanceCoWorkers = function (coWorkers, dayOff) 
{
    for (var i = 0, c = coWorkers.length; i < c; i++) 
    {
        var workers = coWorkers[i];
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



var workInApartment = function (time) {
    
    var timeTillDone = 100;
    var start = 0;
    while(time < timeTillDone) {
        console.log( "We have been working for " + time + " minuates." );
        time+=5;
        start++
    }
    return start
};
///// ENDED HERE


// Global Varibles
var coWorkersArray = ["Perry", " Manny", " Edgar"],
    coWorkerDayOff = 2,
    charger = false,
    battery = true,
    time = 200;

console.log("My co workers are " + coWorkersArray);

console.log("My supervisor just told me that" + maintenanceCoWorkers(coWorkersArray, coWorkerDayOff)
    + " is attending his english speaking class today, and will not be in to work today.");

console.log(coWorkersArray[1] + ", could you go to the key shop and bring me a new battry?" + coWorkersArray[1] + ' says, \"Sure!\"');

if(bringNewBattery(charger, battery) === true) {
        console.log(coWorkersArray[1] + " should have been back by now with my new battery.");
    } else {
        console.log(coWorkersArray[1] + ' says, your charger wasn\'t plugging in, I don\'t have a battery for you..."');
};

console.log("I really like my new " + tools.brand +" " + tools.model + tools.battery + " set.");
console.log("My supervisor " + coWorkersArray[0] + " has the same " + tools.brand + tools.model + " set, but he has the older " 
    + tools.old + " batteries and they dont last nearly as long.");

console.log("Both " + tools.brand + " tool sets contain a " + tools.typeOfTools + " so i always find him with my " + tools.battery
    + " batteries in his tools.");
console.log("That's probably why my battery is dead...");

