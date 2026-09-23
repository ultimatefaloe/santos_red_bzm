// creating an array
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["hello", 42, true, null, undefined];
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 699.99 },
  { name: "Tablet", price: 399.99 },
];

// accessing array elements
// console.log(fruits[0])
// console.log(fruits[3])
// console.log(numbers[-1])

// console.log(fruits.length)
// console.log(fruits[fruits.length - 1]); // Accessing the last element of the array
// console.log(numbers.at(-1))

// modifying array elements

// console.log(fruits)
// fruits[0] = ["kiwi", "mango"];
// console.log(fruits)

// const student = ["Alice", "Bob", 12, ["Math", "Science", "History"], ["Basketball", "Soccer"]];
// console.log(student[3][0])
// console.log(student[4][1])

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[2][0])

// esential array methods

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(fruits);
// // push() - adds an element to the end of the array
// fruits.push("fig");
// // pop() - removes the last element from the array
// fruits.pop();

// shift() - removes the first element from the array
// fruits.shift();

// unshift() - adds an element to the beginning of the array
fruits.unshift("grape");

// console.log(fruits);

// // slice
// console.log(fruits.slice(1, 5))
// console.log(fruits)

// fruits.splice(1, 3, "kiwi", "mango");
// console.log(fruits)

// const roles = ["admin", "editor", "subscriber", "guest"];
// const roles2 = ["user", "vendor", "moderator", "contributor"];
// let isPermission = roles.includes("user");
// console.log("Checking if user have permission", isPermission)
// console.log(roles.indexOf("user"))

// let foundRole = roles.find(role => role === "editor")

// console.log("Found role", foundRole)

// converting array to string and combining arrays
// const newArray = roles.concat(roles2);

// spread operator
// const newArray = [...roles, ...roles2];

// converting from array to string

const roles = ["admin", "editor", "subscriber", "guest"];

const stringFromArray = roles.join(", ");

// console.log(stringFromArray)
// console.log(roles)

const string = "Hello, how are you?";
const arrayFromString = string.split(" ");
console.log(arrayFromString);

// workout
// create workout array with 5 exercises, 
// each exercise should be an array with name, duration and calories burned. 
// Then use array methods to add a new exercise, remove an exercise, 
// and find the exercise with the highest calories burned. Finally, 
// convert the workout array to a string and back to an array.
