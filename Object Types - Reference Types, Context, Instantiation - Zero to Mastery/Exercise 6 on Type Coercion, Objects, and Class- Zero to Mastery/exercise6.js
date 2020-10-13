//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4; //4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		// console.log('animal', this);
		this.name = name;
		this.type = type;
		this.color = color; 
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
		// console.log('cow', this);
	}
	introduce() {
		console.log(`Moooo, I am ${this.name}, and I am ${this.type} with a beautiful ${this.color} coat`)
	}
}

const cow = new Mamal('Mootzie', 'cow', 'spotted');