const btn = document.querySelector('button')

btn.addEventListener('click', event => {
	console.log(event.target)
	event.target.style.backgroundColor = 'yellow'
	event.target.textContent = 'Button'
})

let counter = 0
const calculateElement = event => {
	counter++
	console.log(counter)
}
calculateElement()

//event.target.remove() - for removing events going on variables
/* btn.onclick = function () {
	console.log(1)
}

btn.ondblclick = function () {
	console.log(2)
}
*/
