const car = {
    name: 'Fait',
    model: '500',
    weight: '850kg',
    color: 'White',
    start: function () {
        console.log('start');
    },
    drive: function () {
        console.log('Drive');
    },
    break: function () {
        console.log('Break');
    }, 
    stop: function () {
        console.log('Stop');
    }
}

const person = {
    firstName: 'Ariful',
    lastName: 'Islam', 
    id: 5566,
    // fullName: function () {
    //     return (this.firstName + ' ' + this.lastName).toUpperCase()
    // }
    age: 32
}

// console.log(person.fullName())

// const x = person;
// x.firstName = 'Razu'
// console.log(x)
// person.lastName = 'Ahmed'
// console.log(x)

const x = 'firstName'
const y = 'lastName'

// console.log(person[x]) // object expression 
// delete person.id
// console.log(person.fullName())

// nested object

const myObj = {
    name: 'John',
    age: 30,
    myCars: {
        car1: 'Ford',
        car2: 'BMw'
    }
}

// console.log(myObj.myCars.car1)

// document.getElementById('demo').innerHTML = person.fullName() + ', ' + person.id;

// let text = ''
// for(let x in person ){
//     text +=person[x] + ' '
//     // console.log(x)
// }

// document.getElementById('demo').innerText = text

const myArray = Object.values(person);
const myArray1 = Object.entries(person);

// console.log(typeof myArray1)

// for(let x in myArray1){
//     console.log(typeof x)
// }

// document.getElementById('demo').innerHTML = myArray1


const fruits = {Bananas:300, Oranges:200, Apples:500};
let text1 = ' '
for(let [fruit, value] of Object.entries(fruits)){
    text1 += fruit + ': ' + value + '<br>'
}
document.getElementById('demo').innerHTML = text1


// 
const student = {
    name: "Alice",
    age: 22,
    grade: "A",
    enrolled: true
};

let student1 = ''
for(let [key, value] of Object.entries(student)){
    student1 += key + ': ' + value + '<br>'
}

document.getElementById('demo').innerHTML = student1


const book = {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    available: true
  };

  let book1 = ''
  for( let [key, value] of Object.entries(book)){
    book1 += key + ': ' + value + '<br>'
  }

  document.getElementById('demo').innerHTML = book1


  /**
   * Object Constructor
   */

  function Person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last
    this.age = age
    this.eyeColor = eye
  }

  Person.prototype.nationality = 'Bangladeshi'

  const myFather = new Person('Afzal', 'Hossain', 50, 'Black')

  let afzal = ''
  for(let [key, value] of Object.entries(myFather)){
    afzal += key + ': ' + value + '<br>'
  }

  document.getElementById('demo').innerHTML = afzal;
  console.log(myFather)