// JavaScript Functions

function products(p1, p2){ //p1, p2 is a parameter
    return p1 * p2
}
const result = products(4, 5) // 4, 5 is arguments
console.log(result);


// convert Fahrenheit to Celsius

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

const fahrenheit = toCelsius(77);
// const fahrenheit = toCelsius() // it will return NaN
// const fahrenheit = toCelsius // it will return the whole function [Function: toCelsius]
console.log(fahrenheit)