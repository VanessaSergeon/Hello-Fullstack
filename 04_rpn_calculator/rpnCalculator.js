function Calculator() {
	var stack = [];
	var total = 0;
	var error = "calculator is empty"
	this.push = function(number) {
		stack.push(number)
	}; // end push
	this.plus = function() {
		if(stack.length < 2) {
			return error;
		} else {
			total = stack.pop() + stack.pop();
			stack.push(total);
		};
	} // end plus
	this.minus = function() {
		if(stack.length < 2) {
			return error;
		} else {
			total -= stack.pop();
			total += stack.pop();
			stack.push(total);
		};
	} // end minus
	this.divide = function() {
		if(stack.length < 2) {
			return error;
		} else {
			total = stack.pop() / stack.pop();
			stack.push(total);
		};
	} // end divide
	this.times = function() {
		if(stack.length < 2) {
			return error;
		} else {
			total = stack.pop() * stack.pop();
			stack.push(total);
		};
	} // end times
	this.value = function() {
		return total;
	}; // end value
}; // end Calculator function