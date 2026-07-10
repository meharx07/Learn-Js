// We can define strings using either double quotes "" or single quotes ''
const name = "Mehar Abdullah";
const repoCount = 50;

// console.log(name + repoCount);
// This is called concatenation, but this syntax is outdated and less readable. 
// Instead, we should use string interpolation.
// String interpolation uses backticks (``) and placeholders (${}) for variables, like this:
console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // We can also invoke methods inside placeholders.


// Another way to declare a string is by using the `new` keyword with the String constructor:
const gameName = new String("Meharx07");

// Behind the scenes, this creates a String wrapper object. It looks something like this:
// {
//     0: "M",
//     1: "e",
//     2: "h",
//     3: "a",
//     4: "r",
//     5: "x",
//     6: "0",
//     7: "7",
//     length: 8
// }

// Every character has an index in JavaScript, starting from 0.
// Strings come with many built-in methods. Let's look at a few:

// Accessing a character by its key/index (e.g., index 0 is 'M')
console.log(gameName[0]); 

// Checking the length of the string
console.log(gameName.length); 

// Converting all characters to uppercase
console.log(gameName.toUpperCase()); 
// Note: Since primitive values are stored in the Stack memory, these methods do not mutate the original string. 
// They perform operations on and return a copy.

// Finding which character is at a specific index
console.log(gameName.charAt(4)); // Output: r

// Finding the index of a specific character
console.log(gameName.indexOf("r")); // Output: 4

// Extracting parts of a string:
let newGameName = "Mehar-x07";

// The substring() method extracts characters between two indices (the end index is not included)
const newString = newGameName.substring(0, 5);
console.log(newString); // Output: Mehar

// The slice() method is similar to substring(), but it accepts negative indices to count backwards from the end of the string.
const anotherString = newGameName.slice(-3); 
console.log(anotherString); // Output: x07

// Cleaning up whitespace:
const newStringOne = "   Mehar   ";
console.log(newStringOne.trim()); // removes both leading and trailing whitespace. Very useful for form validation.
// JavaScript also provides trimStart() and trimEnd() if you only need to clean one side.

// Replacing parts of a string:
const url = "https://mehar.com/mehar%20abdullah"; 
// Replacing the URL-encoded space (%20) with a hyphen (-)
console.log(url.replace("%20", "-")); // Takes two arguments: (valueToReplace, replacementValue)

// Querying a string (returns a boolean):
console.log(url.includes("mehar")); // Checks if the string contains the specified substring. Output: true

// Splitting a string into an array:
let toArrString = "mehar-abdullah-x07";
// Converts the string into an array based on a separator. An optional limit can also be provided.
console.log(toArrString.split("-")); // Output: ['mehar', 'abdullah', 'x07']