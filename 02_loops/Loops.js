function repeat(word, number) {
	var repeated = "";
		for (var i = 0; i <= number -1; i++) {
			repeated += word;
		} // end for loop
	return repeated;
} // end repeat function.

// This version of join returns undefined when array is empty.
// function join(array, delimiter) {
//     var str = "";
//     for(i=0; i <= array.length - 2; i++){
//         str += array[i] + (delimiter || "");
//     }
//     str += array[array.length - 1];
//     return str;
//     } // end join


function join(array, delimiter) {
    var str = "";

    if(typeof delimiter === 'undefined'){
        delimiter = "";
    }


    for(var i=0; i < array.length; i++){
        str += array[i];
        if( i !== array.length - 1){
            str += delimiter;
    }
  }
   return str;
}

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

// concat_string works on repl_it. do not know why specs dont pass.
function concat_string() {
    return Array.prototype.slice.call(arguments).join('');
} // end concat_string