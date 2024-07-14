// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
// • Task 2:
// Write a program to subtract two numbers and log the result to the console.
// • Task 3:
// Write a program to multiply two numbers and log the result to the console.
// • Task 4:
// Write a program to divide two numbers and log the result to the console.
// • Task 5:
// Write a program to find the remainder when one number is divided by another and log the result to the console.
// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
// • Task 7:
// Use the operator to subtract a number from a variable and log the result to the console.
// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
// • Task 9: Write a program to compare two numbers using and <= and log the result to the console.
// • Task 10: Write a program to compare two numbers using
// and log the result to the console.
// and
// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// • Task 12: Write a program that uses the I I operator to combine two conditions and log the result to the console.
// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
// Feature Request:
// 1 . Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
// Achievement:
// By the end of these activities, students will:
// •
// •
// •
// •
// •
// Understand and use arithmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.
// Use the ternary operator for concise conditional expressions.

//Activity 1:Arithmetic Operations
//Task 1
const a = 4;
const b = 3;
const c = a + b;
console.log(c);
//Task 2
const num1 = 5;
const num2 = 4;
const num = num1 - num2;
console.log(num);
//Task 3
const num3 = 5;
const num4 = 4;
const num5 = num4 * num3;
console.log(num5);
//Task4
const val1 = 2;
const val2 = 2;
const val = val1 / val2;
console.log(val);
//Task5
const val3 = 4;
const val4 = 2;
const val5 = val3 % val4;
console.log(val5);
//Activity 2:Assignment Operators
//Task6
let number = 7;
number += 3;
console.log(number);
//Task 7
number -= 3;
console.log(number);
//Activity 3: Comparison Operators
//Task 8
const n1 = 4;
const n2 = 6;
console.log(n1 > 2);
console.log(n1 < 2);
//Task 9
console.log(n1 >= 2);
console.log(n1 <= 2);
//Task 10
console.log(n1 == n2);
console.log(n1 === n2);
//Activity 4: Logical Operators
//Task 11
console.log(n1 >= 2 && n1 <= 2);
//Task 12
console.log(n1 >= 2 || n1 <= 2);
//Task 13
console.log(n1 != n2);

//Activiy 5: Ternary Operator
//Task 14
const value = 4;
{
  value < 0 ? console.log("negative") : console.log("positive");
}
