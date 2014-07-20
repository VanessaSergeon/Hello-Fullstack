var ans;

function game() {
	var turns = 5;
	var correct = false;
	while((turns > 0) && (correct == false)) {
		var guess = prompt("Enter a guess, 1-100", "");
		var diff = Math.abs(guess - ans);
		var hotCold;
		if(diff < 70) {hotCold = 'You are ice cold!';}
		if(diff < 50) {hotCold = 'You are cold!';}
		if(diff < 30) {hotCold = 'You are warm!';}
		if(diff < 10) {hotCold = 'You are hot!';}

		if(guess > ans) {alert("Guess Lower! " + hotCold);}
		if(guess < ans) {alert("Guess Higher! " + hotCold);}
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