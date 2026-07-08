// Variables are names given to a location in memory; they act as containers for data.
// In JS, variables can be declared using let, const, and var.

const accountId = 12345
let accountEmail = "mehar.abdullahx07@gmail.com"
var accountPassword = 1234432
accountCity = "Sargodha"

// As we know, JS files are different from .txt files because JS files have reserved keywords.
// The compiler/runtime (like Node.js or the V8 engine) knows these keywords, meaning we cannot 
// use JS keywords as variable names. 
//
// Developers use specific habits to define variables, like using camelCase (where the first 
// word is lowercase and the second word starts with a capital letter, like accountPassword). 
// We can also use underscores (_) in between words. These are good habits, but ultimately it's up to you.

// Node.js knows exactly what to do with these keywords: 
// If it sees console.log(), it knows it needs to print to the log/terminal. 
// If it sees const or let, it knows to assign a location in memory to store data.

// Constants are values that cannot be changed. For example, the value of Pi cannot change. 
// Let's try to change everything:

// accountId = 2 // Not allowed!
// If you try to force a change, remember that Node.js is analyzing the code and will stop you.
// console.log(accountId); // This throws an assignment error.

// Let's make changes to the other variables and see what happens:
accountEmail = "abdullah.meharx07@gmail.com"
accountPassword = 43256
accountCity = "London"

// Here is another clean method of using console.log: using console.table() with an array [] inside.
// console.table([accountEmail, accountPassword, accountCity])

// Now let's dig deeper:
// As we can see, we can change the values of let and var. So why don't we just use var for everything?
// And for accountCity, we didn't even use let or var—so how is it still printing?

// Here is the story: 
// We generally don't use var anymore because of an old problem with JavaScript. 
// Initially, JavaScript didn't handle "scope" properly. By scope, we mean code wrapped inside curly braces:
{
  // This is a block scope
}

// In the early stages of JS, it had no control over things inside a block scope. 
// This created huge problems. Suppose one programmer writes a file and uses a var named accountPassword. 
// Then, a second developer comes along, imports that file, and uses the exact same var name in their own code. 
// The second developer's value would accidentally overwrite the first developer's value! 
// If a var name was reused in 10 different places across imported files, it would get replaced everywhere, 
// leading to a lot of confusion and bugs.
//
// To resolve this scoping problem, the community decided to introduce and use 'let'.

// --- FINAL SUMMARY ---

// const: Values that cannot be changed. They cannot be redeclared or reassigned. It is block-scoped.
// let: Variables that can be reassigned, but cannot be redeclared. It is also block-scoped.
// var: Variables that can be both redeclared and reassigned. It is globally or function-scoped (ignores block scope).