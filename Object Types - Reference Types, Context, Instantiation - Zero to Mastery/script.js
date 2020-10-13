 //reference type
[] === []

[1] === [1]

const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

//object1 === object3 will return false as will all the other arrays/objects above


 //context

 //this is a special term in JS referring to where we are in the object environment
const havingFun = (randomShizz) => {
	console.log(this)
}


 //instantiation
//when you copy an object and reuse the code 

class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type; 
	}
	introduce() {
		console.log(`Hi I am ${this.name}, and I am ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEE, Im a ${this.type}`)
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');