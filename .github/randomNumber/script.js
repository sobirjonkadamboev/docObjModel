document.addEventListener('DOMContentLoaded', function (event) {
	const randomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const generate = () => {
		const placeholder = document.querySelector('#placeholder')
		placeholder.textContent = 9
	}

	const btnElement = document.getElementById('generate')
	btnElement.addEventListener('click', generate)
})
