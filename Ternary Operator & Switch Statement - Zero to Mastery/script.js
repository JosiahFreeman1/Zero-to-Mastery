// condition ? expression1 : expression 2

function isUserValid(boolean) {
	return boolean;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied"

//this will return "You may enter" since the function was true.

var automatedAnswer = 
"Your account number is " + (isUserValid(false) ? "1234basesonme" : "not available")


//this code above is the same as an if else..look below for if else
//there is a check for a condition and two possible expressions
function condition() {
	if (isUserValid(true)) {
		return "You may enter";
	} else {
		return "Access denied";
	}
}

var answer2 = condition();

//Switch statement

function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You fooked up";
			break;
		case "right":
			whatHappens = "You found a river";
			break;
		case "left":
			whatHappens = "You ran into a troll";
			break;
		default:
			whatHappens = "Please enter a valid direction";
	}
	return whatHappens;
}