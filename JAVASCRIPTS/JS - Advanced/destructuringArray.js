//----------Destructuring arrays------------//

var a, b, rest;

// Assignment

[a, b] = [10, 20];

console.log(a);
console.log(b);

// Using spread operator

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

// Skipping items

[a, , , , b] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);

// assigning variable to group of variable

let array = ["apple", "mango", "banana", "Orange", "Jackfruit"];

[a, b, ...rest] = array;

console.log(a);
console.log(b);

// Swaping variable

var a = 1;
var b = 3;

[a, b] = [b, a];

console.log(a); 
console.log(b); 

const arr = [1, 2, 3];

[arr[2], arr[1]] = [arr[1], arr[2]];

console.log(arr); // [1,3,2]
