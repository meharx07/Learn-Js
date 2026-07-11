const score = 400;
// Here JS automatically understands that this is a Number, but we can explicitly define it like:
const balance = new Number(300); // This creates a Number object wrapper.

// Now let's explore some useful Number methods:

// To convert a number to a string, we use:
console.log(balance.toString().length); // Once it becomes a string, we can use all string methods like .length

// Especially when building e-commerce apps, decimal precision values can get too long, so we use toFixed:
console.log(balance.toFixed(2)); // Outputs: 300.00

const otherNumber = 23.8966;
// Here we specify the total number of significant digits (precision) we need:
console.log(otherNumber.toPrecision(3)); // Outputs: 23.9

const hundreds = 1000000;
// Reading large numbers can be difficult, so we can format them for readability:
console.log(hundreds.toLocaleString()); // Outputs: 1,000,000 (US standard by default)

// We can also format it using other country standards, like India's using "en-IN":
console.log(hundreds.toLocaleString("en-IN")); // Outputs: 10,00,000

// To check the maximum and minimum possible values a number can hold in JS:
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// There are many more methods available; you can test them out in the browser console.

// -------------------------------------------------------------
// Now let's talk about Math. The Math object is a built-in library that comes with JS.

// To convert negative values to positive (absolute value), we use:
console.log(Math.abs(-4)); // Outputs: 4

// To round numbers to the nearest integer:
console.log(Math.round(4.3)); // Rules of standard rounding apply (4.5 and up rounds to 5)

// If you want more control over rounding, you can use ceil or floor:
console.log(Math.ceil(4.1));  // Ceil (ceiling) rounds up to the next highest integer -> 5
console.log(Math.floor(4.9)); // Floor rounds down to the next lowest integer -> 4

// There are many methods in the Math library, but let's discuss a very important one:
console.log(Math.random()); 
// This value will always be a decimal between 0 (inclusive) and 1 (exclusive).

// But suppose you are making a dice game or another application where the range matters:
console.log((Math.random() * 10) + 1); // This shifts the decimal point, and adding 1 ensures the value is never 0.

// Here is a very handy formula to generate a random number within a specific range:
const min = 10;
const max = 20;
// We want values strictly between 10 and 20.

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

/* 
How this formula works under the hood:
1. We have min = 10 and max = 20, and we want a random whole number between them.
2. We use Math.floor() to remove the decimal part.
3. We multiply Math.random() by (max - min + 1), which evaluates to (20 - 10 + 1) = 11.
4. Math.random() * 11 yields a value from 0 up to (but not including) 11.
5. Math.floor() drops the decimals, converting that range into integers from 0 to 10.
6. Finally, we add the min number (10) to shift the range up. 
   For example, if the random number generated is 7, adding the min gives us: 7 + 10 = 17.
   This guarantees the final number will always fall perfectly within our [10 to 20] range.
*/