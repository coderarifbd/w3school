/**
 * JavaScript Identifiers / Names
 * Identifiers are JavaScript names.
 * Identifiers are used to name variables and keywords, and functions.
 * The rules for legal names are the same in most programming languages.
 * A JavaScript name must begin with:
 * A letter (A-Z or a-z)
 * A dollar sign ($)
 * Or an underscore (_)
 */

/** 
 * var, let, const 
 * 
 * */ 


// Always use 'const' if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)

// Only use let if you can't use const 

// let carName = 'Volvo';
// document.getElementById('demo').innerText = carName;



// String concatenated 

// let x = 'John' + ' ' + 'Doe';
// document.getElementById('demo').innerText = x;

// let y = '5' + 2 + 3;
// console.log(y)


// JS Let
/**
 * 'let' keyword have block scope
 * 'let' can't be redeclared in the same scope
 */


// Js had global scope and function scope

// let and const introduced the two new block scope

{
    let x = 'inside the scope';
}

let x = 'from outside the scope'

console.log(x);


// JS const 
/**
 * Variable defined with const cannot be redeclare, reassigned
 * const have Block Scope
 * when to use javascript const - 
 * A new array, Object, function, RegExp
 * const does not define a constant value. It defines a constant reference to a value.
 */

/*
const PI = 3.1416;
PI = 3.14 // this will give error
PI = PI + 10 // This will also give error
*/

// Constant Array
const cars = ['Saab', 'Volvo', 'BMW'];

// We can change the array elements
cars[0] = 'Toyota'

// We can add new element in const array
cars.push('Audi')

console.log(cars)


// const object 

const person = {
    name: 'Ariful',
    age: 32,
    haveLaptop: true
}

console.log(person)

person.haveBike = true;

console.log(person)