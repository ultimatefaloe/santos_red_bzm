// const obj = {} key: value pair

// const car = {
//   maker: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "Blue",
// }

const student = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
  school_name: "XYZ University",
  department: "Engineering",
  courses: {
    course1: "Data Structures",
    course2: "Algorithms",
    course3: "Operating Systems",
  },
  greeting: () => {
    console.log(
      `Hello, my name is ${student.name} and I am majoring in ${student.major}.`,
    );
  },
};

// accessing object properties
// // dot notation
// console.log("Student Name:", student.name);
// console.log("Student Courses:", student.courses.course3);

// bracket notation
// console.log("Student Name:", student["name"]);
// console.log("Student Courses:", student["courses"]["course3"]);

student.email = "john.doe@xyzuniversity.com";
student.name = "Jane Smith";

// console.log("Student Email:", student);

delete student.age;

// console.log("Student after deleting age:", student);

// student.greeting()

// for (constant variables and object you want to iterate) {
//   logic to be executed for each iteration
// }

// for ( const key in student){
//   console.log(`Key: ${key}, Value: ${student[key]}`);
// }

const keys = Object.keys(student);
const values = Object.values(student);

// console.log("Student Object Keys:", keys);
// console.log("Student Object Values:", values);

// Object.entries(student).forEach(([key, value]) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });

const { name, email, courses } = student;

// console.log("Destructured Name:", name);
// console.log("Destructured Email:", email);
// console.log("Destructured Courses:", courses);

const printStudentInfo = ({ name, major, school_name }) => {
  console.log(`Name: ${name}, Major: ${major}, School: ${school_name}`);
};



// printStudentInfo(student);


const arr = [1, 2, 3, 4, 5];

const [first, second, third, ...rest] = arr;

// console.log("First:", first);
// console.log("Second:", second);
// console.log("Third:", third);
// console.log("Rest of the elements:", rest);


const timeTable = {
  monday: "Math",
  tuesday: "Science",
  wednesday: "History",
  thursday: "English",
  friday: "Physical Education",
};

// concation or copying two objects

const updateStudentInfo = {
  ...student,
  ...timeTable
}

console.log("Updated Student Info:", updateStudentInfo);

// practice: create an object with your personal information, and then create a function that takes that object as an argument and prints out your name, age, and major.
// create a sperade operator for arrays and objects, and then create a function that takes that array or object as an argument and prints out the values of the array or object.