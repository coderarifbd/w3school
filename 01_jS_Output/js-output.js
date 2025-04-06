/**
 * JS display Possiblities
 * 
 * - Writing into an html element, using innerHTML or innerText
 * - document.write() 
 * - window.alert()
 * - console.log()
 * 
 */


// Using innerHTML when you want to change an HTML element
document.getElementById('demo').innerHTML = "<h2>Hello World</h2>"


// Using innerText when you only want to change the plain text
document.getElementById('demo').innerText = 'Hello World'


// Using document.write(); it's only be used for testing 
// document.write(5+6)


// Using window.alert(), it will show a alert box in the browser only
// window.alert(5+6)

// Using console.log(), this method work in the browser to display data
console.log(5+6)