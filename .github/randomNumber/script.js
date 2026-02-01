let pastNumbers = []
document.addEventListener('DOMContentLoaded', function (event) {
	const randomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const generate = () => {
		const minNum = document.getElementById('min')
		const maxNum = document.getElementById('max')
		const min = Number(minNum.value)
		const max = Number(maxNum.value)
		const warning = document.getElementById('warning')

		warning.textContent = ''

		if (minNum.value === '' || maxNum.value === '') {
			alert('Please, enter values to min and max')
			return
		}

		if (min > max) {
			warning.textContent = 'Min should be lower than max'
			return
		}
		const placeholder = document.querySelector('#placeholder')
		placeholder.textContent = randomNum(min, max)
	}

	const history = document.getElementById('history')

	const btnElement = document.getElementById('generate')
	btnElement.addEventListener('click', generate)
})
