"use strict";

// There is a massive difference between the JavaScript written 8 to 10 years ago and the modern JS we use today.
// Old JS lacked arrow functions, modules, classes, and other modern features. 
// The JavaScript community did not want to break old websites when introducing new features, so they made updates backward-compatible.
// If you want your code to be treated under modern standards, you can explicitly tell the engine by writing "use strict"; at the top.
// This forces the environment to execute all code using the stricter, newer rules.

// In JavaScript, data types are divided into two main categories:
// 1. Primitive data types (Storable directly in the stack memory)
// 2. Non-Primitive data types (Reference types like Objects and Arrays)

// Let's look closely at the Primitive Data Types:

let name = "Mehar Abdullah";            // String: Used for text.
let age = 18;                           // Number: Used for whole integers.
let bigInteger = 1283749218374912384n;  // BigInt: Used for numbers larger than safe integer limits. Ends with an 'n'.
let decimalInteger = 1.89;              // Number: In JS, decimals don't have a separate 'float' type; they are just 'numbers'.
let isLoggedIn = true;                  // Boolean: Can only be true or false.
let nothing = null;                     // Null: A standalone value representing an intentional, empty assignment.
let notDefined = undefined;             // Undefined: The variable is declared, but has not been assigned a value yet.
let sym = Symbol("Id");                 // Symbol: Used to create completely unique, unchangeable identifiers.

// To check the data type of a variable, you can use the 'typeof' operator:
// console.log(typeof name);            // Output: "string"

// Weird JS Quirk: If we check the type of null, it returns "object". 
// This is a historic bug in JavaScript, but 'null' is conceptually a primitive value, not an object.
console.log(typeof nothing);            // Output: "object"

// We will study each data type in detail later.