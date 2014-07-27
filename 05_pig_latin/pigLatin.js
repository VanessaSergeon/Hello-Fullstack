function translate(word) {
	var s = "";
	var pigEnding = "ay";
	var vowels = ["a", "e", "i", "o", "u"];
	var toFirstLetter = word.slice(0, 1);
	var secondLetter = word.slice(1, 2);
	var toSecondLetter = word.slice(0, 2);
	var thirdLetter = word.slice(2, 3);
	var toThirdLetter = word.slice(0, 3);

	for(i = 0; i < vowels.length; i++) {
		//first letter vowel changes end to 'ay'
		if((vowels[i] == toFirstLetter) && (secondLetter != vowels[i])) {
			s = word + pigEnding;
			return s;
		}
		//first letter consonant changes end to 'first letter + ay'
		//first three letters consonants changes end to 'first 3 letters + ay'
		if((toFirstLetter != vowels[i]) && (secondLetter == vowels[i])) {
			s = word.slice(1, word.length) + toFirstLetter + pigEnding;
			return s;
		}
		//first two letters consonants changes end to 'first 2 letters + ay'
		if((toFirstLetter != vowels[i]) && (secondLetter != vowels[i])) {
			s = word.slice(2, word.length) + toSecondLetter + pigEnding;
			return s;
		}
		//'sch' changes end to 'sch + ay'
		if(toThirdLetter == "sch") {
			s = word.slice(3, word.length) + toThirdLetter + pigEnding;
			return s;
		}
	}
	

	//'sch' changes end to 'sch + ay'
	//'qu' changes end to 'qu + ay'
	//'consonant + qu' changes end to 'consonant + qu + ay'

	//works with two words
	//works with multiple words

} //end translate