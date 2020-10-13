// Pass by Value

let a = 5;

let b = a;

b++;

// Pass by Reference 

let obj1 = { name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log('obj1Here', obj1)
console.log('obj2Here', obj2)

// Example 2 of Pass by Reference
// the example below shows that arrays are simply objects
       
let c = [1, 2, 3, 4, 5];
let d = c;
d.push(1233243)
console.log(c)
console.log(d)
// both examples will return undefined

let c = [1, 2, 3, 4, 5];
let d = [].concat(c);
d.push(1233243)
console.log(c)
console.log(d)
//c will remain the same, however d will return a new array of [1, 2, 3, 4, 5, 1233243];

let obj = { 
	a: 'a', 
	b: 'b', 
	c: {deep: 'try and copy me'
	}
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
 
obj.c = 5;

console.log(obj) 
console.log(clone)
console.log(clone2)
console.log(superClone)

// In the example above, you can see how we used Object.assign({}, obj);
//Object.assign() uses two params. 1st is empty object; 2nd is what we are referencing.
