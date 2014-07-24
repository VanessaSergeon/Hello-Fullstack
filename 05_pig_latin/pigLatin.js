function translate(word) {
	var s = "";
	var pigEnding = "ay";
	var vowels = ["a", "e", "i", "o", "u"];
	var toFirstLetter = word.slice(0, 1);
	var secondLetter = word.slice(1, 2);
	var toSecondLetter = word.slice(0, 2);
	var toThirdLetter = word.slice(0, 3);

	for(i = 0; i < vowels.length; i++) {
		//first letter vowel changes end to 'ay'
		if(vowels[i] == toFirstLetter) {
			s = word + pigEnding;
			return s;
		}
		//first letter consonant changes end to 'first letter + ay'
		//first three letters consonants changes end to 'first 3 letters + ay'
		if(toFirstLetter != vowels[i]) {
			s = word.slice(1, word.length) + toFirstLetter + pigEnding;
			return s;
		}
		//first two letters consonants changes end to 'first 2 letters + ay'
		if(toFirstLetter && secondLetter != vowels[i]) {
			s = word.slice(2, word.length) + toSecondLetter + pigEnding;
		}
	}
	

	//works with two words

	//'sch' changes end to 'sch + ay'
	//'qu' changes end to 'qu + ay'
	//'consonant + qu' changes end to 'consonant + qu + ay'

	//works with multiple words

} //end translate