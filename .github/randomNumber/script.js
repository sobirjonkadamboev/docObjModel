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
		const result = randomNum(min, max)
		pastNumbers.unshift(result)
		console.log(pastNumbers)

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
	history.innerHTML = ''
	pastNumbers.forEach(number => {
		document.createElement = 'li'
		newItem.textContent = number
		mainList.appendChild('newItem')
		const mainList = document.getElementById('history')
		mainList.innerHTML = ''
	})

	const btnElement = document.getElementById('generate')
	btnElement.addEventListener('click', generate)
})
