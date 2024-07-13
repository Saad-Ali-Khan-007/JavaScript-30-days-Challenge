// Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
// • Task 1:
// Declare a variable using var , assign it a number, and log the value to the console.
// • Task 2:
// Declare a variable using let , assign it a string, and log the value to the console.
// Activity 2: Constant Declaration
// • Task 3:
// Declare a variable using const , assign it a boolean value, and log the value to the console.
// Activity 3: Data Types
// • Task 4.
// • Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
// Activity 5:
// Understanding const
// . Task 6: Try reassigning a variable declared with const and observe the error.
// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Achievement:
// By the end of these activities, you will:
// Know how to declare variables using var , let , and const .
// •
// Understand the different data types in JavaScript.
// •
// • Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.
// •

//Activity 1: Variable Declaration
//Task 1
var num = 10;
console.log(num);
//Task 2
let str = "hello world";
console.log(str);

//Activity 2: Constant Declaration
//Task 3
const bool = true;
console.log(bool);

//Activity 3: Data types

//Task 4
const age = 20;
const name = "John";
const isAdult = true;
const family = {
  brother: "Hamilton",
  Sister: "Sara",
};
const marks = [22, 44, 45, 50, 35];
console.log(typeof age);
console.log(typeof name);
console.log(typeof isAdult);
console.log(typeof family);
console.log(typeof marks);

//Activity 4: Reassigning variables

//Task 5
let val = 5;
console.log(val);
val = 4;
console.log(val);

//Activity 5: Understanding const
//Task 6

const value = 5;
console.log(value);
value = 6;
console.log(value);
