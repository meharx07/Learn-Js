"use strict";

// --- Simple Numerical Comparisons ---
// Basic comparisons between the same data types are straightforward and always return a boolean (true/false):
console.log(2 > 1);   // Greater than -> true
console.log(2 >= 1);  // Greater than or equal to -> true
console.log(2 < 1);   // Less than -> false
console.log(2 == 1);  // Loose equality check -> false
console.log(2 != 1);  // Loose inequality check -> true

// --- Comparisons with Mixed Data Types ---
// Problems arise when you compare different data types:
// console.log("2" > 1);  // Output: true
// console.log("02" > 1); // Output: true
//
// Explanation: JavaScript implicitly coerces the numeric strings into numbers before making the comparison.
// Clean Coding Habit: To avoid unpredictable results, always ensure your variables are of the same data type before comparing them.

// --- The Weird Case of Null ---
console.log(null > 0);   // Output: false
console.log(null == 0);  // Output: false
console.log(null >= 0);  // Output: true
//
// Why does this happen? 
// An equality check (==) and comparison operators (> < >= <=) work completely differently under the hood. 
// Comparison operators convert 'null' into a number, treating it as 0. 
// That is why (null >= 0) evaluates to true (0 >= 0), while (null > 0) is false (0 > 0).
// Conversely, the equality check (==) does not convert null to 0; it only equals null or undefined.

// --- The Case of Undefined ---
// Comparing undefined to 0 using any of the above operators will always yield false:
console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined < 0);  // false

// --- Strict Equality Check (=== and !==) ---
// To avoid implicit type conversion completely, we use strict equality:
console.log("2" == 2);   // Output: true  (Because '==' converts the string "2" to number 2)
console.log("2" === 2);  // Output: false (Because '===' checks both the value AND the data type)
//
// Similarly, for strict inequality, we use '!=='.