function Calculator() {
	var total = 0;
	this.add = function(number) {
		total += number;
	};
	this.subtract = function(number) {
		total -= number;
	};
	this.value = function() {
		return total;
	};
}