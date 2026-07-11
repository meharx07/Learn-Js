// JavaScript Dates and Timestamps

// 1. Initializing and Formatting Dates
// JavaScript calculates dates in milliseconds. Instantiating a generic Date object 
// returns the current date and time in ISO format.
let myDate = new Date();
console.log(myDate); // Output: 2026-07-11T08:55:44.676Z

// Converting the Date object to various readable string formats:
console.log(myDate.toString());       // Output: Sat Jul 11 2026 13:56:56 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString());   // Output: Sat Jul 11 2026
console.log(myDate.toLocaleString()); // Output: 7/11/2026, 1:58:17 PM

// Confirming the data type:
console.log(typeof myDate); // Output: "object" (Date is a built-in object)

// ----------------------------------------------------------------------------
// 2. Creating Specific Dates
// Note: Month arguments are 0-indexed in JavaScript (0 = January, 11 = December).
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Output: Mon Jan 23 2023

// Creating a specific date with time parameters (Year, Month, Day, Hour, Minute):
let newCreatedDate = new Date(2025, 0, 23, 5, 14);
console.log(newCreatedDate.toLocaleString()); // Output: 1/23/2025, 5:14:00 AM

// Initializing using a "YYYY-MM-DD" string format. 
// Note: In string parsing, months are 1-indexed (01 = January).
let anotherDate = new Date("2024-01-14");
console.log(anotherDate.toLocaleString()); // Output: 1/14/2024, 5:00:00 AM

// 3. Timestamps and Date Comparison
// Timestamps represent milliseconds passed since the Unix Epoch (January 1, 1970).
// They are highly useful for time-tracking features like quizzes, polls, or logs.
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: 1783760994112

// You can extract timestamps from specific dates to compare them.
// This is essential for features like booking systems, reservations, or event tracking.
console.log(anotherDate.getTime()); // Output: 1705190400000
console.log(myTimeStamp);            // Output: 1783761149559

// Converting milliseconds to seconds:
// Divide by 1000 and use Math.floor() to remove decimal values.
console.log(Math.floor(Date.now() / 1000));

// 4. Useful Date Methods & Internationalization
let anotherNewDate = new Date();

// Extracting parts of a date:
console.log(anotherNewDate.getMonth());     // Returns 6 (July, due to 0-indexing)
console.log(anotherNewDate.getMonth() + 1); // Add 1 to display the standard calendar month to users

// Custom formatting with .toLocaleString():
// You can pass an options object to customize internationalization settings.
let weekdayName = anotherNewDate.toLocaleString('default', { 
    weekday: "long" // Returns full name of the day (e.g., "Saturday")
});
console.log(weekdayName);