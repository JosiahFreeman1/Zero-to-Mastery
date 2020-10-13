// // // function sayHello() {
// // // 	console.log("Hello");
// // // }

// // // sayHello();

// // // var sayBye = function() {
// // // 	console.log("Bye");
// // // }

// // // sayBye();

// // // function sing(song) {
// // // 	console.log(song);
// // // }

// // // sing("laaa ddeee daa");
// // // sing("Hey thereee");

// // // function multiply(a, b) {
// // // 		return a * b;
// // // 	}

// // // alert(multiply(3,4));


// // function sing(song) {
// // 	console.log(song);
// // }

// // sing("helllooooasaso");

// // function multiply(a,b){
// // 	return a*b
// // }

// // console.log(multiply(10, 1003));
// // // We can use the console to type any function of multiply(a, b), but by using console.log, it automatically multiplies these values.

// // function multiply(a, b) {
// // 	if (a>10 || b>10) {
// // 		return "Thats too hard";
// // 	}	else {
// // 	return a*b;
// // 	}
// // }

// // multiply (1, 3);


// // // Arrays //

// // var list = ["puppy", "lion", "tiger", "bear"]
// // console.log(list[0]);

// // var functionList = [function apple() {
// // 	console.log("applee");
// // }]

// // var mixedList = ["apples", 4, undefined, true, function apple() {
// // 	console.log("applee");
// // }]

// // var user = {
// // 	name: "Josiah",
// // 	age: 26,
// // 	hobby: "cooking",
// // 	isMarried: true,
// // 	shout: function() { 
// // 		console.log("AHHHH");
// // 	}
// // };


// // Facebook 

var database = [
		{
			username: "DirtyBird",
			password: "dirtybirdslair",
		},
		{
			username: "Sally",
			password: "123",
		},
		{
			username: "Ingrid",
			password: "777",
		}
		
	];

var newsFeed = [
		{
			username: "Henry",
			timeline: "I love Facebook!",
		},
		{
			username: "Bob",
			timeline: "Myspace was better.",
		},
		{
			username: "Shaniqua",
			timeline: "I miss Tom.",
		}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}	 
	}    
	return false;
}

function signIn(username, password) {
		if(isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

	// 	if (username === database[0].username && 
	// 		password === database[0].password)	{
	// 	console.log(newsFeed);	
	// } else {
	// 	alert("Sorry! Wrong username and password");
	// }
// }

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);

// For Loops

// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy",
// ];

// for (var i=0; i < todos.length; i++) {
// 	todos[i] = todos[i] + "!";
// }  

// to cross items off the todos list

// var theListOfShit = todos.length;
// for (var i=0; i < theListOfShit; i++) {
// 	console.log(todos[i], i);
// }  

// For Each Loops

// todos.forEach(function(iCanPutAnythingHere, i) {
// 	console.log(iCanPutAnythingHere, i);
// })

// A different way to write this For Each Loop below and call it
// log it with todos.forEach(logTodos)

// function logTodos(iCanPutAnythingHere, i) {
// 	console.log(iCanPutAnythingHere, i);
// }

// todos.forEach(logTodos)

// While Loops

// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// } 
      
// // Do While Loops

// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);