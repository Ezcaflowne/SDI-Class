//alert("JavaScript works!");

// Name: Willson Ayotte
// Date: July 26th 2012
// Document: Assignment 4 SDI 1207
// Description: Javascript file for assignment 4


/////// Start by making a Library ///////

var myLibrary = function () {
	

// Start of Strings //

	//////////////////////////////////
	// Verify phone number function //
	//////////////////////////////////

	var isItAPhoneNumber = function (phoneNum) {
 		if ((phoneNum.charAt(3) === "-") && (phoneNum.charAt(7) === "-")) {
 			phoneIs = "This is a phone number.";
 		} else {
 			phoneIs = "This is not a phone number.";
 		};	
 		return phoneIs;
	};

	//////////////////////////////////////
	// End verify phone number function //
	//////////////////////////////////////


	///////////////////////////////
	// Verify of email function ///
	///////////////////////////////


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

	////////////////////////////////
	// End verify email function ///
	////////////////////////////////

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


// End of Number // 

	/// Returned values from functions inside library
	return {
		"isItAPhoneNumber":isItAPhoneNumber, //// Return for Verify phone number function ////
		"emailAddress":emailAddress, 		 //// Return for Verify of email function ////
		"getDecimal":getDecimal, 			 //// Return for Format number to specific decimal place ////
		"stringToNumber":stringToNumber, 	 //// Return for String to a number ////
		"titleCase":titleCase 				 //// Return for Title-case a string into Uppercase First words ////
	};


};

/// Make a seperate file that accesses that library ///
var newLib = new myLibrary();

/// Call that library from this LIB to run the console.log ///
/// Label what your calling here. ///
/// Logging of each function to check if they are working. ///
	
	/// Logging Phone Number Verify ///
	console.log(newLib.isItAPhoneNumber("702-324-4586"));
	/// Logging Email Address Verify ///
	console.log(newLib.emailAddress("ezcaflowne@fullsail.edu"));
	/// Logging Format Number to Specific Decimal Places //
	console.log(newLib.getDecimal(2.1));
	/// Logging String to a Number ///
	console.log(newLib.stringToNumber("42"));
	/// Logging Title-case a String into Uppercase First Words ///
	console.log(newLib.titleCase("This shit is driving me crazy!!"))




