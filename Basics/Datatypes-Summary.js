// in javascript datat ypes are divided in two categories
// primitive types and non-primitive types
// the difference in these two are how they are stored in memory and how to accecc them

// there are 7 Primitive types
let name = "Mehar Abdullah"                        // String
let age = 18                                       // Number
let isLoggedIn = false                             // boolean
let city = undefined                               // undefined
let temperature = null                             // null
let bigNumber = 238719283719238127391823719283n    // bigInt
let sym = Symbol('Id')                             // Symbol

// primitive types are call by value means when we copy them from one place to another there reference of
// memory is not share are given as copy and the things we change are only maded in copy

// in non-primitive types we have
// Arrays, Objects and functions

// Arrays
const heros = ["Batman", "Superman", "Aquaman"]

// Objects
const user = {
    name: "Mehar Abdullah",
    age: 18,
    isLoggedIn: false
}

const greet = function(name){
    console.log(`Hello ${name}`);
}
greet("Mehar Abdullah")