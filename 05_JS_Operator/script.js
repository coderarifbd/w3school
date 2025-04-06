/**
 * 
 * JS Operator 
 * Assignment Operator
 * Addition Operator
 * Multiplication 
 * Comparison Operator
 * 
 */

// Assignment Operator
let x = 10;

// Addition Operator
let num1 = 5;
let num2 = 6;
const sum = num1 + num2;

console.log(sum)


// Js Multiplication
const multi = num1 * num2;
console.log(multi)

/** 
 * There are different types of JavaScript operators:

    - Arithmetic Operators
    - Assignment Operators
    - Comparison Operators
    - String Operators
    - Logical Operators
    - Bitwise Operators
    - Ternary Operators
    - Type Operators
 * */ 

    // Addition assignment operators ( =, +=, -=, *=, /=, %=, **=)
    let a = 10;
    a += 5;
    console.log(a)


    // JS Comparison Operators ( ==, ===, !=, !==, >, <, >=, <=, ?)

    const c = 5, b = 10;

    if( c == b ){
        console.log( `${b} and ${c} are equal`);
    }else if ( c != b ) {
        console.log( `${b} and ${c} are not equal`);
    }

    // String Comparison
    let str = "A"
    let str1 = 'B'
    const result = str1 > str;
    console.log(result)

    // Number string
    const str2 = '20'
    const str3 = '30'
    const result1 = str2 > str3
    console.log(result1)

    // Left shift assignment 
    let number = -100;
    x <<= 5;
    console.log('left shift: ' + x);