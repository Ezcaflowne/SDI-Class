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









	return {
		"isItAPhoneNumber":isItAPhoneNumber
	};


};

/// Make a seperate file that accesses that library ///
var newLib = new myLibrary();

/// Call that library from this LIB to run the console.log ///
/// Label what your calling here. ///
console.log(newLib.isItAPhoneNumber("702-324-4586"));

