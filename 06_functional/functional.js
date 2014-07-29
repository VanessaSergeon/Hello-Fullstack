function countWords(sentence) {
	// var arr = sentence.split(' ');
	// return arr.length;
  return sentence.split(' ').length;
}

function makeAdder(A) {
	return function(B) {
		return A + B;
	}
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
  // array.forEach(action);
}

function map(arr, multiple) {
	var timesArr = [];
	for(var i = 0; i < arr.length; i++) {
		timesArr.push(multiple(arr[i]));
	}
	return timesArr;
}

function filter(array, test) {
	var passTest = [];
	for(var i =0; i < array.length; i++) {
		if(test(array[i]))
		passTest.push(array[i]);
	}
  // could also use forEach function to iterate ofver array.
	return passTest;
}

function contains(arr, value) {
	var propArr = [];
	for (key in arr) {
		propArr.push(arr[key]);
	}
	var found = false;
	for(var i = 0; i < propArr.length; i++) {
		if(propArr[i] === value) {
			found = true;
		}
	}
	return found;
}

function reduce(array, start, action) {
	var result = start;
	for(var i = 0; i < array.length; i++) {
		result = action(result, array[i]);
	}
	return result;
}

function countWordsInReduce(result, wordsArray) {
  return result + countWords(wordsArray);
}

function sum(array) {
  var addFunc = function(currVal, newVal){
    return currVal + newVal;
  };
  return reduce(array, 0, addFunc);
}

function every(array, test) {
	var pass = true;
	for(var i = 0; i < array.length; i++) {
		if((array[i] === false) || (test(array[i]) === false)) {
			pass = false;
		}
	}
	return pass;
}

// passing 3/5
function any(array, test) {
  if(typeof test == "undefined"){
    test = function(item){
      return item;
    }
  }
	var passing = false;
	for(var i = 0; i < array.length; i++) {
		if((array[i] === true) || (test(array[i]) === true)) {
			passing = true;
		}
	}
	return passing;
}

function once(fun) {
	var run_flag = false;
	var fun_runner = function() {
		if (!run_flag)
			fun();
			run_flag = true;
	}
	return fun_runner;
}

function wrapper(fun, wrap) {
	return function() {return wrap(fun);}
}



