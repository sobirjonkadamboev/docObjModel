const btn = document.querySelector('button')

btn.addEventListener('click', event => {
	console.log(event.target)
	event.target.style.backgroundColor = 'yellow'
	event.target.textContent = 'Button'
	console.log('first click')
})

/* btn.onclick = function () {
	console.log(1)
}

btn.ondblclick = function () {
	console.log(2)
}
*/
