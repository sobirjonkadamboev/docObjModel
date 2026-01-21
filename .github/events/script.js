const btn = document.querySelector('button')

/* btn.onclick = function () {
	console.log(1)
}

btn.ondblclick = function () {
	console.log(2)
}
*/

btn.addEventListener('click', () => {
	console.log('first click')
})

btn.addEventListener('click', () => {
	console.log('second  click')
})
