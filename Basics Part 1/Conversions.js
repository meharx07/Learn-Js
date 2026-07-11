"use strict";

// Suppose we receive a number as a string, like "33", but we know we need to perform numerical operations on it.
// To handle this, we use explicit type conversions:
let score = "33";
// console.log(typeof score);        // Output: "string"

// To convert a string to a number, we use the Number() constructor:
let integerScore = Number(score);
// console.log(integerScore);        // Output: 33
// console.log(typeof integerScore); // Output: "number"

// --- CRITICAL EDGE CASE: Mixed Characters ---
// What happens if the string contains non-numeric characters?
let weirdScore = "33abc";
let weirdScoreInt = Number(weirdScore);

// JavaScript will still technically change the data type to 'number'...
// console.log(typeof weirdScoreInt); // Output: "number"

// ...BUT if you look at the actual value inside, it cannot resolve to a real digit, so it yields NaN (Not a Number):
// console.log(weirdScoreInt);        // Output: NaN (Be very careful when validating input numbers!)

// --- Other Type to Number Conversion Behaviors ---
// 1. null to Number      -> Returns 0
// 2. undefined to Number -> Returns NaN
// 3. true to Number      -> Returns 1
// 4. false to Number     -> Returns 0

// --- Boolean Conversions ---
// We can use the Boolean() constructor to cast values into true or false:
let isLoggedIn = 1;
let inBoolean = Boolean(isLoggedIn);
// console.log(inBoolean);           // Output: true (Conversely, 0 converts to false)

// Checking empty vs. filled strings:
let newString = "";
let stringToBool = Boolean(newString);
// console.log(stringToBool);         // Output: false (An empty string is "falsy")

let filledString = "Mehar";
let filledStringToBool = Boolean(filledString);
// console.log(filledStringToBool);   // Output: true (Any non-empty string is "truthy")

// --- String Conversions ---
// We can use the String() constructor to convert numbers or booleans into text strings:
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);         // Output: "33"
// console.log(typeof stringNumber);  // Output: "string"

// Next up: Operations!