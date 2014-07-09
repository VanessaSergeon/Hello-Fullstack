// repeat works but will not pass test. why?
function repeat(word, number) {
	var repeated = "";
		for (var i = 0; i <= number -1; i++) {
			repeated += word;
		} // end for loop
	return repeated;
} // end repeat function.

function join(array, delimiter) {
	var joint = "";
	if (delimiter) {
		for (var i = 0; i <= array.length - 1; i++) {
			joint = joint + array[i];
				for (var x = 0; x <= array.length - 2; x++) {
				joint = joint + delimiter;	
		}; // end for statement
		} else if (array) {
			for (var y = 0; y <= array.length - 1; y++) {
				joint = joint + array[i];
			}
		} else {
			joint = "";
	} // end if, else if statement
	return joint;
}; // end join function

function sum(array) {
	var add = 0;
	for (var i = 0; i <= array.legnth; i++) {
		add = add + array[i];
	};
	return add;
}; // end function sum

function paramify(hash) {
	// Use for in loop
}; // end paramify functiion

// factorial works.
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

function result(concat_string) {
	var string = concat_string.join('');
	return string;
}; // end result function

