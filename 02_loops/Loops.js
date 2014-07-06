function repeat(word, number) {
	var repeated = "";
		for (var i = 0; i <= number; i++) {
			repeated += word;
		} // end for loop
	return repeated;
} // end repeat function

function join(array, delimiter) {
	var joint = '';
	if (array, delimiter) {
		for (var i = 0; i <= array.length - 1; i++) {
			joint = joint + array[i];
				for (var i = 0; i <= array.length - 2; i++) {
				joint = joint + delimiter;	
		}; // end for statement
		} else if(array) {
			for (var i = 0; i <= array.length - 1; i++) {
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

}; // end paramify functiion

function factorial(number) {
	var fact = 1;
	for (var i = number; i >= 1; i --) {
		fact = fact * i;
	};
	return fact;
}; // end factorial function

function result(concat_string) {
	var string = concat_string.join('');
	return string;
}; // end result function

