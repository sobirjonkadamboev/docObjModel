//Old versions of working with HTML elements

//const box = document.getElementById('box')
// const box = document.getElementsByClassName('box') //always returns an array of HTML Collection
//const button = document.getElementsByTagName('button')

/* New versions

const box = document.querySelector('#box') //with IDs, use #
const classs = document.querySelector('.wrapper') //with classes, use .
const buttons = document.querySelectorAll('button') //for buttons, use nothing
console.log(box)
console.log(classs)
console.log(buttons) //returns NodeList collection

const wrappers = document.querySelector('.wrapper')
const heartInside = wrappers.querySelectorAll('.heart')
console.log(wrappers)
console.log(heartInside) 


/* box.style.backgroundColor = 'yellow'
box.style.width = '400px'

console.log(buttons)
buttons[0].style.width = '200px' //be careful for an array elements

circles[0].style.borderRadius = '0'
circles[1].style.cssText = 'background-color: green' 

console.log(buttons)
console.log(circles)

for (let i = 0; i < circles.length; i++) {
	circles[i].style.borderRadius = '0'
} //you can't use forEach method for HTML Collection

buttons.forEach(item => {
	item.style.borderRadius = '100%'
}) //you can use forEach for NodeList collection 



 //creating new element
div.classList.add('heart') //adding a class
div.style.backgroundColor = 'brown'
//wrapper.append(div) //puts div into the bottom
wrapper.prepend(div) //puts div into the above 



circles[0].remove()

hearts[0].replaceWith(circles[1]) */

const box = document.querySelector('#box'),
	buttons = document.querySelectorAll('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart')

const div = document.createElement('div')
div.style.width = '400px'
div.style.height = '200px'
div.style.backgroundColor = 'blue'

document.querySelector('.app').append(div)

// div.innerHTML = '<h1>hello, world</h1>' //for html elements -old version

div.insertAdjacentHTML('beforebegin', '<h1>hello, world</h1>')
