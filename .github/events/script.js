const data = document.querySelector('[data-item="4"]')
console.log(data.nextSibling)

/* 
const buttons = document.querySelectorAll('button')

buttons.forEach((item, idx) => {
	item.addEventListener(
		'click',
		() => {
			console.log(idx + 1)
		},
		{ once: true }, //works only one time
	)
})


const link = document.querySelector('.a_link')

link.addEventListener('click', event => {
	event.preventDefault()
	console.log('click')
})

const btn = document.querySelector('button'),
	overlay = document.querySelector('.overlay')

 const callback = event => {
	console.log(event.currentTarget)
}

overlay.addEventListener('click', callback)
btn.addEventListener('click', callback)
*/
/* btn.addEventListener('click', event => {
	console.log(event.target)
	event.target.style.backgroundColor = 'yellow'
	event.target.textContent = 'Button'
})

let counter = 0
*/
/* const deleteElement = event => {
	counter++
	console.log(counter)
	if (counter == 4) {
		btn.removeEventListener('click', deleteElement)
	}
}
*/
//btn.addEventListener('click', deleteElement)

//event.target.remove() - for removing events going on variables
/* btn.onclick = function () {
	console.log(1)
}

btn.ondblclick = function () {
	console.log(2)
}
*/
