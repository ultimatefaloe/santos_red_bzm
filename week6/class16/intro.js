// Data Types

// String
let name = "John Alihu";

// Number
let age = 90;

// boolean
let isAlive = true; // false

// null
let emptyValue = null;

// undefined
let notDefined;

// Non Premitive Data Types

// Object (key-value pairs)
let person = {
  name: "John Alihu",
  age: 90,
  isAlive: true,
  address: {
    apartment: "Apt 1",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// Array (list of values)
let fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  60,
  true,
  null,
  undefined,
  { name: "John Alihu", age: 90 },
  ["nested array", 1, 2, 3],
];

function getDataType(value) {
  return typeof value;
}