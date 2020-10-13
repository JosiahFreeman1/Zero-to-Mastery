// ES8

.padStart()
.padEnd()

//gives padding before or after a string to align the characters


//Trailing Commas & Functions Paramater Lists and Calls

const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1,2,3,4,)

// Object.values & Object.entries

Object.values
Object.entries

let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr. Grinch'
}

// Because this object is not an array and we cant do map, filter or reduce, this is an ugly object 
// Below is an example to iterate through this object

// Old way to iterate through objects
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key])
})

// Below is the new way with Object.entries to iterate through the Objects
// Will log the values

Object.values(obj).forEach(value => {
	console.log(value);
})

// Will log both the property and values 
Object.entries(obj).forEach(value => {
	console.log(value);
})

// Real life scenario that changes the username property 
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '')
})

// Async Await