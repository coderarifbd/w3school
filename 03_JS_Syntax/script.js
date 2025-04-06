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

let carName = 'Volvo';
document.getElementById('demo').innerText = carName;



// String concatenated 

let x = 'John' + ' ' + 'Doe';
document.getElementById('demo').innerText = x;

let y = '5' + 2 + 3;
console.log(y)

// let my-work 