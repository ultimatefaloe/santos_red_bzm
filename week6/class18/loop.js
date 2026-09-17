// prinitng hello worl 100 times using for loop

// for (let i = 0; i < 100; i++) {
//   console.log("Hello World", i);
// }

// pin = 1234

// for (let attempt = 3; attempt > 0; attempt--) {
//   let userInput= 1234
//   if(userInput ===  pin){
//     console.log("Access granted");
//     break;
//   } else {
//     console.log("Access denied");
//   }
// }

let numberOfStudents = 10;
let classes = 7


// let totalStudent = numberOfStudents * classes;

// while (totalStudent > 0) {
//   console.log(`Total students left: ${totalStudent}`)
//   totalStudent--
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let count = 0;

// do {
//   console.log("Count is: ", count);
//   count++;
// } while( count > 10 )


for (let a = 10; a >0; a--){
  if (a === 5) {
    console.log("Found 5!");
    continue;
  }
  console.log("Current value of a: ", a);
}