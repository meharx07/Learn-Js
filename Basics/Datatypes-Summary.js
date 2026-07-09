"use strict";

// In JavaScript, data types are divided into two primary categories:
// 1. Primitive Types
// 2. Non-Primitive (Reference) Types
//
// The core difference between them lies in how they are stored in memory and how they are accessed.

// --- 1. The 7 Primitive Types ---
// Primitives are immutable and are stored directly in Stack memory. 
// They are "call by value", meaning when you assign or copy them to another variable, 
// JavaScript passes a completely independent copy of the value, not a link to the original data.
// Any changes made to the new variable happen only within that copy.

let name = "Mehar Abdullah";                        // String
let age = 18;                                       // Number
let isLoggedIn = false;                             // Boolean
let city = undefined;                               // Undefined
let temperature = null;                             // Null
let bigNumber = 238719283719238127391823719283n;    // BigInt
let sym = Symbol('Id');                             // Symbol

// --- 2. Non-Primitive (Reference) Types ---
// Non-primitives are mutable and are stored in Heap memory. 
// When you declare a non-primitive, the actual data is kept in the Heap, while a reference 
// (or memory address pointer) is stored in the Stack.
// They are "call by reference", meaning if you copy an object or array to a new variable, 
// both variables point to the exact same location in the Heap. Changing one will change the other!

// Arrays
const heroes = ["Batman", "Superman", "Aquaman"];

// Objects
const user = {
    name: "Mehar Abdullah",
    age: 18,
    isLoggedIn: false
};

// Functions
const greet = function(name) {
    console.log(`Hello ${name}`);
};

// Invoking the function
greet("Mehar Abdullah");

// We will study each non-primitive type in full detail later.