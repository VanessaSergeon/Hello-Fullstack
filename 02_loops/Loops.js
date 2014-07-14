function repeat(word, number) {
	var repeated = "";
		for (var i = 0; i <= number -1; i++) {
			repeated += word;
		} // end for loop
	return repeated;
} // end repeat function.

function join(array, delimiter) {
    var str = "";
    for(i=0; i <= array.length - 1; i++){
        str += array[i];
    }
    return str;
    } // end join

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
    var arr = [];
    var add = "";
    var propArray = Object.keys(hash); // array of properties
    for(var i in propArray) {
        var plus = propArray[i] + "=" + hash[propArray[i]];
        arr.push(plus);
    } // end for in loop
    arr = arr.sort();
    add = arr.join('&');
    return add;
} // end paramify

function sum(object) {
    var add = 0;
	for (var i = 0; i < object.length; i++) {
		add += object[i];
	}
	return add;
} // end function sum

function concat_string(args) {
    var arr = Array.prototype.slice.call(arguments);
    var arr1 = [];
        for(i=0; i<=arr.length; i++) {
        if(arr[i] !== " ") {
    	    arr1.push(arr[i]);
    	}
    }
    var str = arr1.join(' ');
	return str;
} // end concat_string


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