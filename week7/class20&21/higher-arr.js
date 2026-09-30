// const products = [
//   { name: "Laptop", price: 999.99 },
//   { name: "Smartphone", price: 699.99 },
//   { name: "Tablet", price: 399.99 },
//   { name: "Headphones", price: 199.99 },
//   { name: "Smartwatch", price: 299.99 },
// ];

// // looping and doing something
// // for each
// // products.forEach((product) => {
// //   console.log(`Product: ${product.name}, Price: $${product.price}`);
// // });

// // map method, iterating over the array and returning a new array, and it transform the element of an array
// // const productNames = products.map((product) => product.name);

// // console.log("Product Names:", productNames);
// // console.log("Products:", products);

// // let search = 200

// // const productGreaterThanSearch = products.filter(product => product.price >= search)

// // console.log("Products greater than or equal to $200:", productGreaterThanSearch)

// const posts = [
//   {
//     id: 1,
//     title: "First Post",
//     content: "This is the content of the first post.",
//   },
//   {
//     id: 2,
//     title: "Second Post",
//     content: "This is the content of the second post.",
//   },
//   {
//     id: 3,
//     title: "Third Post",
//     content: "This is the content of the third post.",
//   },
//   {
//     id: 4,
//     title: "fourth Post",
//     content: "This is the content of the first post.",
//   },
// ];

// let searchTerm = "Ou";

// // const filteredPosts = posts
// //   .map((post) => post.title.toLowerCase())
// //   .filter((title) => title.includes(searchTerm));

// const filteredPosts = posts.filter((post) =>
//   post.title.toLowerCase().includes(searchTerm.toLowerCase()),
// );
// // console.log(filteredPosts);


// // reducer method, it takes an array and reduces it to a single value
// // products.reduce((accumulator, currentValue) => {}, initialValue);

// const totalPrice = products.reduce((total, product) => total + product.price, 0);
// // console.log("Total Price of Products:", totalPrice);

// // const averagePrice = 
// // workout
// // - calculate average using reduce

// const scores = [85, 90, 78, 92, 88];


// const highestNumber = scores.reduce((acc, crr) => acc > crr ? acc : crr , 0)

// console.log(highestNumber)



// forEach, map, filter, reduce are higher order functions because they take a function as an argument and return a new array or a single value.

const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 699.99 },
  { name: "Tablet", price: 399.99 },
  { name: "Headphones", price: 199.99 },
  { name: "Smartwatch", price: 299.99 },
];

console.log("Products:", products);
// products.forEach(product => console.log(`Product: ${product.name}, Price: $${product.price}`));


const productNames = products.map(product => product.name);
// console.log("Product Names:", productNames);


const seacrhPrice = 200;
const productBelow200 = products.filter(p => p.price < seacrhPrice);
console.log("Products below $200:", productBelow200);


// const sumProductPrice = products.reduce((accumulator, currentValue)=>{}, initialValue);

const sumProductPrice = products.reduce((total, product) => total + product.price, 0)
console.log("Total Price of Products:", sumProductPrice);