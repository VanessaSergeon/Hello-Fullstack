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

// not passing
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