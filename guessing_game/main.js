function playGame() {
	var turns = 5;
	var guess = $('#guess').val();
	var correct = false;
	while((turns > 0) && (correct == false)) {
		$("#turns").text("You have " + turns + " turns left!");
		if(guess > ans) {$('#status').text("Guess lower.");}
		if(guess < ans) {$('#status').text("Guess Higher.");}
		$('#turns').text('You have ' + turns + ' left.');
		if(guess == ans) {
			correct == true;
			$('#status').text("You Win!"); 
			$('#turns').text('You have ' + turns + ' left.');
		}
		turns--;
	} // end while
}; // end playGame

function genRandNum() {
	var ans = Math.round((Math.random()*100));
}; // end genRandNum

window.onload = function() { genRandNum(); }

$('#submit').click(function() {
	'playGame()'
});

$('#newGame').click(function() {
	'playGame()'
