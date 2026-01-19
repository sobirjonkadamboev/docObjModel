//Old versions of working with HTML elements

//const box = document.getElementById('box')
// const box = document.getElementsByClassName('box') //always returns an array of HTML Collection
//const button = document.getElementsByTagName('button')

//New versions

const box = document.querySelector('#box') //with IDs, use #
const classs = document.querySelector('.circle__wrapper') //with classes, use .
const buttons = document.querySelectorAll('button') //for buttons, use nothing
console.log(box)
console.log(classs)
console.log(buttons) //returns nodeList collection
