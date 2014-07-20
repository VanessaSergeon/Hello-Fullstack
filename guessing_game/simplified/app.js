var ans;

function game() {
	var turns = 5;
	var correct = false;
	while((turns > 0) && (correct == false)) {
		var guess = prompt("Enter a guess, 1-100", "");
		if(guess > ans) {alert("Guess Lower!");}
		if(guess < ans) {alert("Guess Higher!");}
		if(guess == ans) {
			alert("Correct, You Win!!");
			correct = true;
		}
		turns--;
	} // end while
	if(turns == 0) {alert("Game Over! The correct number was " + ans + " .");}
}; // end game

function randomNumber() {
	ans = Math.round((Math.random() * 100));
};

window.onload = function () { randomNumber(); };

$('#play').click(function() {
	game(); 
});

$('#newGame').click(function() {
	randomNumber();
});