//scope

//root scope (window)

var b = "Can i use this?";

// function bb() {
// 	var a = "hello";
// }

function bb() {
	b = "hello";
}

//more practice with Scope

// var fun = 5;

// // function funFunction() {
// // 	//child scope
// // 	var fun = "hello!!";
// // 	console.log(1, fun);
// // }

// // function funnerFunction() {
// // 	//child scope
// // 	var fun = "bye";
// // 	console.log(2, fun);
// // }

// // function funnestFunction() {
// // 	//child scope
// // 	fun = "ahhhhhh";
// // 	console.log(3, fun);
// // }

// // console.log("window", fun);
// // funFunction();
// // funnerFunction();
// // funnestFunction();

var fun = 5;

function funnestFunction() {
	//childscope
	console.log(fun);
}