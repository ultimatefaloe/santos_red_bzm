const person = {
  name: "John",
  age: 3,
  city: "New York",
  isStudent: true,
  grade: 87,
};

// if (person.age >= 18) {
//   console.log(`Hello ${person.name}, you have access to the party lounge.`);
// } else {
//   console.log(`Hello ${person.name}, you are not allowed in the party lounge.`);
// }

if (person.grade >= 80) {
  console.log(`Hello ${person.name}, you have passed  A the exam.`);
} else if (person.grade >= 70 && person.grade < 80) {
  console.log(`Hello ${person.name}, you have passed the exam with a B grade.`);
} else if (person.grade >= 60 && person.grade < 70) {
  console.log(`Hello ${person.name}, you have passed the exam with a C grade.`);
} else if (person.grade >= 50 && person.grade < 60) {
  console.log(`Hello ${person.name}, you have passed the exam with a D grade.`);
} else {
  console.log(`Hello ${person.name}, you have failed the exam.`);
}

const isBestStudent =
  person.isStudent && person.grade >= 80
    ? "Yes, this is the best student."
    : person.grade >= 70
      ? "Yes, this is the best student."
      : person.age >= 18
        ? "Yes, this is the best student."
        : "No, this is not the best student.";

console.log(isBestStudent);


// switch case

// let currentDay = "fri"

// switch (currentDay) {
//   case "mon":
//     console.log("This is Monday")
//     return
//   case "tue":
//     console.log("This is Tuesday")
//     return
//   case "wed":
//     console.log("This is Wednesday")
//     return
//   case "thu":
//     console.log("This is Thursday")
//     return
//   case "fri":
//     console.log("This is Friday")
//     return
//   case "sat":
//     console.log("This is Saturday")
//     return
//   case "sun":
//     console.log("This is Sunday")
//     return
//   default:
//     console.log("Invalid day")
// }


let num = 21

const result = num % 2 === 0 ? "Even" : "Odd"
console.log(result)