// primitive datatype
// call by value hota hai 

// 7 type  : String, Numbar, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456789234567n



// Reference Type (Non Primitive Type)

// Array, Objects, Functions

const heros = ["Shivam", "Sumit", "Shubham"];
let myObj = {
    name: "Shivam",
    age: 22,
}

const myFunction = function(){
    console.log("Shivam");
    
}

console.log(typeof bigNumber);
