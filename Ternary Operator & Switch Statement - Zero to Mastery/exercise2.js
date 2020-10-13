//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle(boolean) {
    return boolean;
}

var experiencePoints = winBattle(false) ? "You got 10 points!" : "You only get 1 point, loser!"

//make a function then use the function and pass true or false to run the ternary
//condition ? expr1 : expr2

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined
//#3 return value when moveCommand("back");
"you arrived home";
//#4 return value when moveCommand("right");
"you found a river";
//#5 return value when moveCommand("left");
undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


function lickTheLollipop(lickitySplit) {
    var howManyLicksDoesItTake;
    switch(lickitySplit) {
        case "lick":
            howManyLicksDoesItTake = "You barely made a dent!";
            break;
        case "crunch":
            howManyLicksDoesItTake = "Ouch! You got me good.";
            break;
        case "suck":
            howManyLicksDoesItTake = "Woahhh nah";
            break;
        case "gnaw":
            howManyLicksDoesItTake = "BOY! When I get out this rapper!";
            break;
        default:
            howManyLicksDoesItTake = "One, Two, THREEEE!";
    }
    return howManyLicksDoesItTake;
}