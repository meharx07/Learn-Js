"use strict";
// there is difference in js which was written in book 8 or 10 years ago and today js
// in old js there were no arrow function modules and classes etc now js community didnt want to broke old
// code due to new code so if you are using new code then we hav to tell that this is on new standard
// so we write use strict no it will treat all code as newer version

// in js we have two types of data
// 1- primitive data types
// 2- non-primitive data types

// here we will look at non primitive data types

let name = "Mehar Abdullah" // string
let age = 18 // integer
let bigInteger = 1283749218374912384n // big int to store big integers use n at end o tell its big int
let decimalInteger = 1.89 // here in js we dont have decimal the decimal are also integers
let isLoggedIn = true // boolean
let nothing = null // null is a stand alone value null is represantation of a empty value
let notDefined = undefined // means we have declared a va but didnt give value to it
let sym = Symbol("Id") // used to create completely unique identifiers.

// to check the data types of a varibale you can use typeof
// console.log(typeof name); // string
// if we see type of null we get object
console.log(typeof nothing); // object

// we will study every data type in detail later