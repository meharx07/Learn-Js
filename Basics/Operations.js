"use strict";

// --- Basic Arithmetic Operators ---
// These are standard operators that you'll recognize from basic mathematics:
// console.log(2 + 2);   // Addition
// console.log(2 - 2);   // Subtraction
// console.log(2 * 2);   // Multiplication
// console.log(2 ** 3);  // Exponentiation (2 raised to the power of 3)
// console.log(2 / 3);   // Division
// console.log(2 % 3);   // Remainder / Modulus (Returns the remainder left over after division)

// --- String Concatenation ---
let str1 = "Mehar";
let str2 = " Abdullah";
let str3 = str1 + str2;
// console.log(str3); // Output: "Mehar Abdullah"

// --- The Tricky Part: Implicit Coercion (Mixed Types) ---
// When mixing numbers and strings with the '+' operator, JavaScript coerces types based on order:
// console.log("1" + 2);     // Output: "12"  (Evaluates left-to-right. String first forces conversion to string)
// console.log(1 + "2");     // Output: "12"  (Number + String converts the number to a string)
// console.log("1" + 2 + 2); // Output: "122" (String + 2 becomes "12", then "12" + 2 becomes "122")
// console.log(1 + 2 + "2"); // Output: "32"  (1 + 2 is evaluated first mathematically to 3, then 3 + "2" becomes "32")

// Pro-Tip: Avoid writing messy, unpredictable code like this. 
// If you want to control evaluation order, always use parentheses:
// console.log((3 + 4) * 5 % 3);

// The official rules governing how this happens under the hood can be found in the ECMAScript standard specification:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// --- Tricky Unary Conversions ---
// Using a unary plus '+' forces an implicit conversion to a number:
// console.log(+true); // Output: 1
// console.log(+"");   // Output: 0

// --- Prefix Increment (++operator) ---
let gameCounter = 100;
let scoreCounterIncrease = ++gameCounter; 

// console.log(gameCounter);          // Output: 101
// console.log(scoreCounterIncrease); // Output: 101
// Note: The prefix operator increments the value FIRST, and then returns the new, updated value.

// --- Postfix Increment (operator++) ---
let score = 50;
let scoreIncrease = score++;

// console.log(score);         // Output: 51
// console.log(scoreIncrease);  // Output: 50
// Note: The postfix operator returns the ORIGINAL value first, and then increments the underlying variable behind the scenes.