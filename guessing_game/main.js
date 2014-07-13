$(document).ready(function() {

var ans = null; // set to random 1-100 number.
var turns = 5; // number of turns. game over when zero.
var guess // players guess
var diff = ans - guess; // use to determain hot/cold.
var text = ''; // change with switch function
	// eg. '<p>You are ICE COLD</p>''


// switch function to determain what to display in game text.

switch(guess, ans) {
	case 
}; // end switch function


// display game text.

$(#status).append(text);

// click submit button
$(#submit).click(function() {
	// subtract one turn
	turns -= 1;
	// change value of guess variable
	guess = $(#gusss).val();
}); // end submit click


// display number of turns left in #turns div.

switch(turns) {
	case 5:
		text = 'You have 5 turns left';
		break;
	case 4:
		text = 'You have 4 turns left';
		break;
	case 3:
		text = 'You have 3 turns left';
		break
	case 2:
		text = 'You have 2 turns left';
		break
	case 1:
		text = 'You have 1 turns left';
		break
	case 0:
		text = 'Game Over!';
		break
	}; // end switch function

}); // end document ready