// ES10

.flat()

// In an array, .flat() is a metho we can use on arrays to remove nested arrays

const array = [1, 2, [3, 4], 5]
array.flat()

// This will return [1, 2, 3, 4, 5]

// We can take this a step further with double nested arrays

const array2 = [1, 2, [3, 4, [5]]]
array2.flat()

// This will log [1, 2, 3, 4, Arrray (1)] because the default for .flat() is 1
// To "flatten" multiple levels of nested arrays, we need to write...

array2.flat(2)

// This will "flatten" the array completely 

// New Example

const jurassicPark = [['scorpion', 'fly'], 'amoeba', 'turtle', ['snake', 'lizard'], [[[['T-REX']]], 'dinosaur'], ['octopus', 'squid']]
jurassicPark.flat(4)

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()
// This will clean up the data and remove the commas

// flatMap()
// We will using the jurassicPark example above

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 'T-REX')
// Here we are flattening jurassicPark and mapping through the array and adding one of the array items

// trimStart() & trimEnd()
const userEmail = '              eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com              '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
//these user profiles are formatted in the wrong way as we can't really use them 

const obj = Object.fromEntries(userProfiles)
Object.entries(obj)
// fromEntries Transforms a list of key values pairs to an object
// Object.entries was from ES8, and it turned an object to an array ;)

// Try & Catch Block allows us to take a piece of code and if any errors, catch them!

try {
	4 + 5
} catch {

}

// This try & catch block above will return 9. The try & catch block below will convert the boolean and string
//into type conversion and log 'truehi'

try {
	true + 'hi'
} catch {
	console.log('you messed up')
}

// This is another example with a variable of bob, and it will catch the error!

try {
	bob + 'hi'
} catch {
	console.log('you messed up')
}

// With previous EcmaScript versions, we would have to pass in catch (error) to log the error, but with ES10, we 
// do not have to do that anymore!

