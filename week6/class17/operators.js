// Arithmetic Operators

let y = 10;
let x = 5;

// console.log("Addition: " + (x + y)); // Addition: 15
// console.log("Subtraction: " + (y - x)); // Subtraction: 5
// console.log("Multiplication: " + (x * y)); // Multiplication: 50
// console.log("Division: " + (y / x)); // Division: 2
// console.log("Modulus: " + (y % x)); // Modulus: 0
// console.log("Exponentiation: " + (x ** 2)); // Exponentiation: 25


let add = x + y; // Addition
let sub = y - x; // Subtraction
let mul = x * y; // Multiplication
let div = y / x; // Division
let mod = y % x; // Modulus
let exp = x ** 2; // Exponentiation

// console.log("Addition: " + add); // Addition: 15
// console.log("Subtraction: " + sub); // Subtraction: 5
// console.log("Multiplication: " + mul); // Multiplication: 50
// console.log("Division: " + div); // Division: 2
// console.log("Modulus: " + mod); // Modulus: 0
// console.log("Exponentiation: " + exp); // Exponentiation: 25


// Comparison Operators

let a = "5";
let b = 5;

// loose check
let result = a == b
// console.log("Loose check: " + result); // Loose check: false


// strict check
let strictResult = a === b
// console.log("Strict check: " + strictResult); // Strict check: false


// inquality

result = a != b
// console.log("Loose inquality: " + result); // Loose inquality: false

strictResult = a !== b
// console.log("Strict inquality: " + strictResult); // Strict inquality: true


// Greater than and less than

let c = 10;
let d = 20;

// console.log("Greater than: " + (c > d)); // Greater than: false
// console.log("Less than: " + (c < d)); // Less than: true
// console.log("Greater than or equal to: " + (c >= d)); // Greater than or equal to: false
// console.log("Less than or equal to: " + (c <= d)); // Less than or equal to: true



// logical Operators
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  grade: 30
}

const isAdult = person.age >= 18 && person.isStudent;

console.log("Only adult are allow in this party", isAdult); // Only adult are allow in this party false