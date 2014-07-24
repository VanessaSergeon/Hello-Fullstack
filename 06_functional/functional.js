function countWords(sentence) {
	var arr = sentence.split(' ');
	return arr.length;
}

function makeAdder(A) {
	return function(B) {
		return A + B;
	}
}