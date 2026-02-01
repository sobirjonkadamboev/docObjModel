document.getElementById('paragraph').innerText = 'Text'
//window.alert(5)
// this is a comment
let a = 4
let b = a
//console.log(a + b) //for declaring variables

let x, y, z //declaring 3 variables at once
x = 19
y = 20
z = 18

let _lastName = 'Sobirjon'
console.log(_lastName)

let text1 = 'Text'
let text2 = '2'
console.log(text1 + '' + text2)

let num = 3
num += 8
console.log(num)

let j = 5
let l = Math.pow(j, 2)
console.log(l)

let cars = ['BMW', 'Lamborghini', 'Audi', 'Damas']

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i])
}

for (let i = 0; i < 10; i++) {
	console.log(i)
} //for loop that executes numbers from 0 to 9

let text = ''
let k = 0
while (k < 13) {
	text += 'The number is ' + k + '\n'
	k++
}
console.log(text)

let number = +prompt('Enter the number: ', '')
function oddNumber() {
	if (number % 2 === 0) {
		console.log(`${number} is even number`)
	} else {
		console.log(`${number} is odd number`)
	}
}
oddNumber()
