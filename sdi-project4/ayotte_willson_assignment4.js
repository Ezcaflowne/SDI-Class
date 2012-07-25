//alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 26th 2012
// Document: Assignment 4 SDI 1207
// Description: Javascript file for assignment 4


/////// Start by making a Library ///////

var myLibrary = function () {
	

// Start of Strings //

	////////////////////////////////////////
	// Start verify phone number function //
	////////////////////////////////////////

	var isItAPhoneNumber = function (phoneNum) {
 		if ((phoneNum.charAt(3) === "-") && (phoneNum.charAt(7) === "-")) {
 			phoneIs = phoneNum + " is a phone number.";
 		} else {
 			phoneIs = phoneNum + " is not a phone number.";
 		};	
 		return phoneIs;
	};

	//////////////////////////////////////
	// End verify phone number function //
	//////////////////////////////////////


	/////////////////////////////////////
	// Start verify of email function ///
	/////////////////////////////////////


	var emailAddress = function (emailAddy) {
		if (emailAddy.indexOf(".") === -2) {
			return "Sorry " + emailAddy + " is not a valid email address."
		};
		if (emailAddy.indexOf("@") === -1) {
			return "Sorry " + emailAddy + " is not a correct email address."
		} else {
			return emailAddy + " is a correct email address."
		}
	};

	///////////////////////////////
	// End verify email function //
	///////////////////////////////


	////////////////////////////////////////
	// Start verify URL address function ///
	////////////////////////////////////////


	var urlAddress = function (url) {
		var urlCheck = /^(http[s]?:\/\/){0,1}([a-zA-Z]{2,5})[\.]{0,1}/;
			if (url.match(urlCheck)) {
				urlIsGood = url + " :is a valid URL.";
				return urlIsGood;
			} else {
				urlNotGood = url + ": is not a valid URL, please use http:// or https:// format.";
				return urlNotGood;
			} 
	};

	/////////////////////////////////////
	// End verify URL address function //
	/////////////////////////////////////


	//////////////////////////////////////////////////////////
	// Start Title-case a string into Uppercase first words //
	//////////////////////////////////////////////////////////

	var titleCase = function (aString) {
		return aString.toLowerCase().replace(/^(.)|\s(.)/g,
		function ($1) { return $1.toUpperCase();} );
		return titleCase;
	};

	////////////////////////////////////////////////////////
	// End Title-case a string into Uppercase first words //
	////////////////////////////////////////////////////////

// End of Strings //


// Start of Number //

	///////////////////////////////////////////////////
	// Start format number to specific decimal place //
	///////////////////////////////////////////////////


	var getDecimal = function (aNumber) {
		var format = aNumber.toFixed(2);
		return format;
	};

	/////////////////////////////////////////////////
	// End format number to specific decimal place //
	/////////////////////////////////////////////////


	//////////////////////////////
	// Start string to a number //
	//////////////////////////////


	var stringToNumber = function (stringNumber) {
		var aRealNumber = parseInt(stringNumber);
		return aRealNumber;
	};

	////////////////////////////
	// End string to a number //
	////////////////////////////

// End of Number // 

// Start of Array //

	//////////////////////////////////////////////
	// Start total value of numbers in an Array //	
	//////////////////////////////////////////////


	var totalValueArray = function (numberArray) {
		var total = 0;
		for (var i = 0, x = numberArray.length; i < x; i++) {
			total += numberArray[i];
		} return total;
	}

	///////////////////////////////////////////
	// End total vale of numbers in an Array //
	///////////////////////////////////////////


	////////////////////////////
	// Start order of objects //
	////////////////////////////


	var randomObjects = function (marines) {
		function sortRandomObjects (a,b) {
			return a.MOS - b.MOS;
		}
		var orderedObjects = (marines.sort(sortRandomObjects));
		return orderedObjects;
	};

	//////////////////////////
	// End order of objects //
	//////////////////////////

// End of Array //


	/// Returned values from functions inside library
	return {
		"isItAPhoneNumber":isItAPhoneNumber, //// Return for Verify phone number function ////
		"emailAddress":emailAddress, 		 //// Return for Verify of email function ////
		"urlAddress":urlAddress, 			 //// Return for Verify URL address function ////
		"titleCase":titleCase, 				 //// Return for Title-case a string into Uppercase First words ////
		//// Needs String list of things. Example "a,b,c" to "a/b/c"
		"getDecimal":getDecimal, 			 //// Return for Format number to specific decimal place ////
		//// Need Fuzzy-match number: number above or below a certain percent
		//// Need Find number of hours or days between two dates.
		"stringToNumber":stringToNumber,	 //// Return for String to a number ////
		//// Need Find smallest value in a array that is greater than a given number.
		"totalValueArray":totalValueArray, 	 //// Return for Total value of numbers in an array ////
		"randomObjects":randomObjects   	 //// Retrun for Order of objects /////
	};


};

/// Make a seperate function that accesses that library ///
var newLib = new myLibrary();

/// Call that library from this LIB to run the console.log ///
/// Label what your calling here. ///

/// Logging of each function to check if they are working. ///
	
	/// Logging Phone Number Verify ///
	console.log(newLib.isItAPhoneNumber("702-324-4586"));
	/// Logging Email Address Verify ///
	console.log(newLib.emailAddress("ezcaflowne@fullsail.edu"));
	/// Logging URL Address Verify ///
	console.log(newLib.urlAddress("http://www.facebook.com"));
	/// Logging Title-case a String into Uppercase First Words ///
	console.log(newLib.titleCase("This shit is driving me crazy!!"));
	/// Logging Format Number to Specific Decimal Places ///
	console.log(newLib.getDecimal(2.1));
	/// Logging String to a Number ///
	console.log(newLib.stringToNumber("42"));
	/// Logging Total Value of Objects in an Array ///
	console.log(newLib.totalValueArray([1, 2, 5, 7, 9, 3]));
	/// Logging Order of Objects - Of Marines :) ///
	console.log(newLib.randomObjects([
		{ Name: "Ayotte",    MOS: 1371 }, 
		{ Name: "Alexander", MOS: 1300 }, 
		{ Name: "Garcia",    MOS: 1312 }
		])
	);

	