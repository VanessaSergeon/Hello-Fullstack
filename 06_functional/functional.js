function countWords(sentence) {
	var arr = sentence.split(' ');
	return arr.length;
}

function makeAdder(A) {
	return function(B) {
		return A + B;
	}
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function map(arr, multiple) {
	var timesArr = [];
	for(i = 0; i < arr.length; i++) {
		timesArr.push(multiple(arr[i]));
	}
	return timesArr;
}

function filter(array, test) {
	var passTest = [];
	for(i =0; i < array.length; i++) {
		if(test(array[i]))
		passTest.push(array[i]);
	}
	return passTest;
}

// passing 1/2
function contains(arr, value) {
	var propArr = Object.keys(arr);
	var found = false;
	for(i = 0; i < arr.length; i++) {
		if((arr[i] === value) || (propArr[i] === value)) {
			found = true;
		}
	}
	return found;
}

// passing 1/2
function reduce(array, start, action) {
	var result = start;
	for(i = 0; i < array.length; i++) {
		result = action(result, array[i]);
	}
	return result;
}

// not passing
function sum(arr) {
	arr.reduce(function(a, b) {return a + b;}, 0);
}

function every(array, test) {
	var pass = true;
	for(i = 0; i < array.length; i++) {
		if((array[i] === false) || (test(array[i]) === false)) {
			pass = false;
		}
	}
	return pass;
}

function any(array, test) {
	var passing = false;
	for(i = 0; i < array.length; i++) {
		if((array[i] === true) || (test(array[i]) === true)) {
			passing = true;
		}
	}
	return passing;
}