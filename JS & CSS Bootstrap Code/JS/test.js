console.log ("hello world");

var number = 5;{
    if (number === 5)
    console.log("ITS FIVE")
} //this code was correct, so it reutrned ITS FIVE

var a = 7;{
    if (a === 6)
    console.log("Got em!");
} //this code was incorrect, so it returned nothing
console.log(a); //console.log(a) runs the code of var a = 7 because it is outside the {}

var aa;
console.log(aa); // this code returns "undefined" because nothing has been declared

var aa = 1.5;
var bb = 2;
var cc = 3;
var dd = "I am the";

aa = aa + 100;
bb = bb + 100;
cc = cc + 100;
dd = dd + " designated driver";
console.log(aa, bb, cc, dd) 

var sum = 123456789 + 987654321;
console.log(sum)

var diff = 40 - 39;
console.log(diff)
/* it seems that it doesn't matter what variable you assign as long as the
the declaration is correct*/

var product = 8 * 100;
console.log(product)

var quotient = 66 / 33;
console.log(quotient)

myVar = 8;
myVar++;
console.log(myVar)
// ++ adds one integer while -- decrements one integer, or we could say myVar = myVar - 1;

var product = 2.2 * 3.6;
console.log(product) 
// * is the multiplication operator

var remainder;
remainder = 11 % 3;
console.log(remainder)
// % is the remainder operator used to determine if a number if even or odd

var e = 10;
var f = 15;

e += 30;
f -= 10.5;
console.log(e, f)
// += is the operator used for a shorthand to avoid typing e = e + 30
// -= is the operator used for subtraction 
// these operators are a shortcut that add (+=) or subtract (-=) the value to the variable and assigning the answer to that variable

// is for hiding one line of comments
/* is for hiding multiple lines of comments ending in */

/* 3 types of variables: var/variable can be used throughout the whole program
while let is used in the scope of you delcared it; where you const is a variable that never changes*/

// var a; assigns the variable a; it is undefined as it equals nothing yet 
// var a = 2; var a declares a and = 2 assigns 2 as the assignment operator;
// variables ARE case sensitive. Capitalization matters!

// go to https://www.youtube.com/watch?v=PkZNo7MFNFg for a JS tutorial by FreeCodeCamp; accidentally deleted over 100 lines of code/comments
// starting where we left off around 59 min mark.

console.log('hello')