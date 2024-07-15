// Day 3: Control Structures
// Tasks/Activities:
// Activity 1:
// If-Else Statements
// • Task 1:
// Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// • Task 2:
// Write a program to check if a person is eligible to vote (age 18) and log the result to the console.
// Activity 2: Nested If-Else Statements
// • Task 3:
// Write a program to find the largest of three numbers using nested if-else statements.
// Activity 3.
// • Switch Case
// • Task 4:
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
// • Task 5:
// Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F) based on a score and log the grade to the console.
// Activity 4: Conditional (Ternary) Operator
// . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// Activity 5: Combining Conditions
// • Task 7:
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:
// Implement and understand basic if-else control flow.
// •
// Use nested if-else statements to handle multiple conditions.
// •
// • Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for concise condition checking.
// Combine multiple conditions to solve more complex problems.
// •

//Activity 1: If:Else Statements
//Task 1:
const num = 0;
if (num > 0) {
  console.log("positive number");
} else if (num < 0) {
  console.log("negative number");
} else {
  console.log("zero");
}

//Task 2:
const age = 18;
if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("Not Eligible for voting");
}
//Activity 2: Nested:If-Else Statements
//Task 3
const a = 4;
const b = 7;
const c = 8;

if (a > b && a > c) {
  console.log("a is greater");
} else if (b > a && b > c) {
  console.log("b is greater");
} else {
  console.log("c is greater");
}
//Activity 3:Switch Case
// Task 4
week = 5;
switch (week) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturady");
    break;
  case 7:
    console.log("sunday");
    break;
}
// Task 5
number = 50;
switch (true) {
  case number >= 90 && number <= 100:
    console.log("A");
    break;
  case number >= 80 && number < 90:
    console.log("B");
    break;
  case number >= 70 && number < 80:
    console.log("C");
    break;
  case number >= 60 && number < 70:
    console.log("D");
    break;
  case number >= 50 && number < 60:
    console.log("E");
    break;
  case number >= 40 && number < 50:
    console.log("F");
    break;
}
//Activity 4: Ternary Operator
val = 4;
{
  val % 2 === 0 ? console.log("even") : console.log("odd");
}
//Activity 5:Combining Condition
//Task 7
const leap_year = 2024;
if (leap_year % 4 == 0 && leap_year % 100 != 0) {
  console.log("Leap year", leap_year);
} else if (leap_year % 100 == 0 && leap_year % 400 == 0) {
  console.log("Leap year", leap_year);
} else {
  console.log("Not Leap year");
}
