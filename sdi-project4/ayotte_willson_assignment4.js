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


	var urlAddress = function (url) { /// Found regex @ http://regexlib.com/ ///
		var urlCheck = /(http:\/\/|https:\/\/)(www\.)?([^\.]+)\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/gim;
			if (url.match(urlCheck)) {
				urlIsGood = url + " :is a valid URL.";
				return urlIsGood;
			} else {
				urlNotGood = url + ": is not a valid URL, please use http://xxx.xxx.xxx or https://xxx.xxx.xxx format.";
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


	////////////////////////////////////////////////////////////
	// Start change string seperator from "a,b,c" to "a/b/c/" //
	////////////////////////////////////////////////////////////


	var changeSeperator = function (format) {
		var newFormat = format.replace(/,/g,"/");
		return newFormat;
	};

	//////////////////////////////////////////////////////////
	// End change string seperator from "a,b,c" to "a/b/c/" //
	//////////////////////////////////////////////////////////

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


	/////////////////////////////////////////////////////////////////////////////////////////////////
	// Start fuzzy-match a number: is the number above or below a number within a certain percent? //
	/////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////
	// End fuzzy-match a number: is the number above or below a number within a certain percent? //
	///////////////////////////////////////////////////////////////////////////////////////////////


	/////////////////////////////////////////////
	// Start days difference between two dates //
	/////////////////////////////////////////////


	var dayDifference = function (bornDate, sonBornDate) {
		var aDay = 1000*60*60*24;
		var bornDate = new Date(1983, 8, 11);
		var sonBornDate = new Date(2006, 3, 6);
		var math = ("There is " + Math.ceil((sonBornDate.getTime() - bornDate.getTime())/(aDay)) + 
			" days between my birthday: " + bornDate + " to my son's birthday: " + sonBornDate + ".");
		return math;
	};

	///////////////////////////////////////////
	// End days difference between two dates //
	///////////////////////////////////////////

	
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

	///////////////////////////////////////////////////////////////////////////////////
	// Start find the smallest value in an array that is greater than a given number //
	///////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	// End find the smallest value in an array that is greater than a given number //
	/////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////
	// Start total value of numbers in an Array //	
	//////////////////////////////////////////////


	var totalValueArray = function (numberArray) {
		var total = 0;
		for (var i = 0, x = numberArray.length; i < x; i++) {
			total += numberArray[i];
		} return total;
	};

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
		"changeSeperator":changeSeperator, 	 //// Return for Change string seperator from "a,b,c" to "a/b/c/" ////
		"getDecimal":getDecimal, 			 //// Return for Format number to specific decimal place ////
		//// Need Fuzzy-match number: number above or below a certain percent
		"dayDifference":dayDifference, 		 //// Return for Find number of hours or days between two dates. ////
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
	/// Logging Change String Seperator from "a,b,c" to "a/b/c/" ///
	console.log(newLib.changeSeperator("a,b,c"));
	/// Logging Format Number to Specific Decimal Places ///
	console.log(newLib.getDecimal(2.1));
	/// Logging Fuzzy-match a Number: Is the Number Above or Below a Number Within a Certain Percent? ///
	console.log("Couldnt figure this out...")
	/// Logging Find Number of Hours or Days Between Two Dates. ///
	console.log(newLib.dayDifference());
	/// Logging String to a Number ///
	console.log(newLib.stringToNumber("42"));
	/// Logging Find the Smallest Value in an Array that is Greater than a Given Number ///
	console.log("Couldnt figure this out...")
	/// Logging Total Value of Objects in an Array ///
	console.log(newLib.totalValueArray([1, 2, 5, 7, 9, 3]));
	/// Logging Order of Objects - Of Marines :) ///
	console.log(newLib.randomObjects([
		{ Name: "Ayotte",    MOS: 1371 }, 
		{ Name: "Alexander", MOS: 1300 }, 
		{ Name: "Garcia",    MOS: 1312 }
		])
	);