
// two ways of create a function

// create a function using function declaration
// function addTwoNumbers() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log("This is coming from our add two number function");
//   console.log(sum);
// }


// addTwoNumbers(); // calling the function


// create a function using function expression
// const addTwoNumbers2 = function() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log("This is coming from our add two number function");
//   console.log(sum);
// };


// // Arrow function
// const addTwoNumbers3 = () => {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log("This is coming from our add two number function");
//   console.log(sum);
// }



// Workout
// create a function that returns the multiplication of those two numbers // using function declearation
// create a function that returns greeting message with the name of the person // arrow function


// const addNumbers = (a, b) => {
//   let sum = a + b;
//   return sum;
// }


// let sum  = addNumbers(2, 9)

// while (sum < 100) {
//   console.log(sum);
//   sum = addNumbers(sum, 10)
// }


// addNumbers(90.99, 80972.05)
// addNumbers(90, 5)
// addNumbers(99, 95)


// let student = {
//   name: "John Doe",
//   age: 20,
//   // grade: "A",
//   score: 90,
// }

// function getStudentGrade(student) {
//   if (student.score >= 90) {
//     return "A";
//   } else if (student.score >= 80) {
//     return "B";
//   } else if (student.score >= 70) {
//     return "C";
//   } else if (student.score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }


// const studentGrade = getStudentGrade(student);

// console.log(`The grade of ${student.name} is ${studentGrade}`);



let email = "john@example.com"  //global variable

const greetingFn = (name) => {
  console.log(email);
  // let email = "example@example.com"  // local variable

  return `Hello ${name}, welcome to our website!`;
}

greetingFn("John Doe");




// let statement = `This is John Doe email ${email}`

// console.log()