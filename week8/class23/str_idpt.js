const name = "Alihu Johnoo";

// // length and accessing characters in a string
// console.log(name.length)
// console.log(name.at(-1))

// cases
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// searching
const search = "John";
// console.log(name.toLowerCase().includes(search.toLowerCase()))
// console.log(name.startsWith(search))
// console.log(name.endsWith(search))

// extracting
// console.log(name.slice(0,3))
// console.log(name.substring(0,3))

// replaceing
// console.log(name.replace("John", "Doe"))
// console.log(name.replace("o", "a"))
// console.log(name.replaceAll("o", "a"))

// spliting
const str = "Alihu Johnoo is a good boy";
// console.log(str.split(" "))
// console.log(str.split("o"))

const phone = "123-456-7890";
console.log(phone.split("-"));
// convert the array back to string

const trim = "   Alihu Johnoo   ";
// console.log(trim)
// console.log(trim.trim())
// console.log(trim.trimStart())
// console.log(trim.trimEnd())

// padding
// 10 digits
const price = "100";
const price2 = "1000";
// console.log(price.padStart(10, "0"))
// console.log(price2.padEnd(10, "0"))

// template literals
const firstName = "Alihu";
const lastName = "Johnoo";
const age = 20;

const multline = `
    <footer id="footer">
      <p>&copy; santos_rez_bzm 2026</p>
    </footer>
`;
// console.log(multline);

const greeting = `Good day ${firstName}, you are ${age} years old.`; 
// console.log(greeting)

let score = 90;

const grade = score >= 80 ? "A" : "B";
console.log(typeof grade)

const user = {
  username: "Alihu",
  isAuthenticated: false,
}

const display = user.isAuthenticated ? `Welcome ${user.username} | My Profile` : "Login | Register";

console.log(display)
const computedValue = `This is the result of the computation: 2 + 2 = ${2+2}`;

console.log(computedValue)