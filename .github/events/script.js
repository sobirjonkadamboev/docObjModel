const btn = document.querySelector('button')

btn.addEventListener('click', event => {
	console.log(event.target)
	event.target.style.backgroundColor = 'yellow'
	event.target.textContent = 'Button'
})

const deleteElement = event => {
	event.target.remove()
}

btn.addEventListener('click', deleteElement)

//event.target.remove() - for removing events going on variables
/* btn.onclick = function () {
	console.log(1)
}

btn.ondblclick = function () {
	console.log(2)
}
*/
