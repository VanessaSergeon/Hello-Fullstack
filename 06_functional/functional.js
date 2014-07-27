function countWords(sentence) {
	var arr = sentence.split(' ');
	return arr.length;
}

function makeAdder(A) {
	return function(B) {
		return A + B;
	}
}

// works in repl.it but not passing spec
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function map(arr, multiple) {
	arr.forEach(multiple);
	return arr;
}

function filter(array, test) {
	var passTest = [];
	for(i =0; i < array.length; i++) {
		if(test(array[i]))
		passTest.push(array[i]);
	}
	return passTest;
}