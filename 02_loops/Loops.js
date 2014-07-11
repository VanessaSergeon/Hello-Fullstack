// passes test
function repeat(word, number) {
	var repeated = "";
		for (var i = 0; i <= number -1; i++) {
			repeated += word;
		} // end for loop
	return repeated;
} // end repeat function.

// passes test
function factorial(number) {
    if (number === 0 || number == 1) {
        return 1;
    } else {
    var fact = 1;
	for (var i = number; i >= 1; i --) {
		fact = fact * i;
	} // end for loop
	return fact;
    } // end if else statement
} // end factorial function

function paramify(hash) {
    var array = [];
    var propArray = Object.keys(hash); // array of properties
    for(p in hash) {
        var plus = propArray[p] + '=' + hash[propArray[p]];
        array.push(plus);
    } // end for in loop
    var sort = array.sort();
    var add = array.join('&');
    return add;
} // end paramify


function sum(object) {
    var add = 0;
	for (var i = 0; i < object.length; i++) {
		add += object[i];
	}
	return add;
} // end function sum

/*

// causes all code to fail test when un-commented.
function join(object, delimiter) {
	var joint = "";
	if (delimiter) {
		for (var i = 0; i <= object.length - 1; i++) {
			joint = joint + object[i];
				for (var x = 0; x <= object.length - 2; x++) {
				joint = joint + delimiter;	
		}; // end for statement
		} else if (object) {
			for (var y = 0; y <= object.length - 1; y++) {
				joint = joint + object[i];
			}
		} else {
			joint = "";
	} // end if, else if statement
	return joint;
}; // end join function


function paramify(hash) {
    var array = [];
    var propArray = Object.keys(hash); // array of properties
    for(p in hash) {
        var plus = propArray[p] + '=' + hash[propArray[p]];
        array.push(plus);
    } // end for in loop
    var sort = array.sort();
    var sum = array.join('&');
    return sum;
} // end paramify



function concat_string(argument) {
	var result = argument.join('');
	return result;
}; // end result function

*/