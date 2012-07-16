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
    typeOfTools: ["Drill", "Sawz-all", "Circular Saw"],
    doesItWork: true,
    areBladesGood: true
    work: function (apt) {
        console.log("Today we will be working in apt " + apt);
    }
};

var goToWork = function () {
        console.log("Sunday through Thursday i wake up at 7:30AM, to make it to work by 8:00AM.");
};

var maintenanceCoWorkers = function (coWorkers, dayOff) {
    for (var i = 0, c = coWorkers.length; i < c; i++) {
        var workers = coWorkers[i];
            console.log(workers);
    }   return coWorkers[dayOff]
};