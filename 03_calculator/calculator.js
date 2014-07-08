var val = 0;

function calculator() {
	number.value = function(number) {
		return val;
	}; // end value
	number.add = function(number) {
		value += number;
	}; // end add
	number.subtract = function(number) {
		value -= number;
	}; // end subtract
}; // end calculator function