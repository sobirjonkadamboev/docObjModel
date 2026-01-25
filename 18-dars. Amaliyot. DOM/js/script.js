document.addEventListener('DOMContentLoaded', () => {
	const blockAd = document.querySelectorAll('.promo__adv img'),
		genreChange = document.querySelector('.promo__genre'),
		background = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector([(type = 'checkbox')])

	const seriesDB = {
		series: [
			'Omar',
			'The Final Legacy',
			'Ertugrul',
			'Magneficent Century',
			'The Great Seljuks: Guardians...',
		],
	}

	addForm.addEventListener('submit', event => {
		event.preventDefault()
		let newValue = input.value
		const favorite = checkbox.checked

		if (newValue) {
			if (newValue.length > 18) {
				newValue = `${newValue.slice(0, 18)}...`
			}
			if (favorite) {
				console.log('Your favorite one loaded')
			}
			seriesDB.series.push(newValue)
			sort()
			setList()
			event.target.reset()
		}
	})

	blockAd.forEach(item => {
		item.remove()
	})

	genreChange.textContent = 'Comedy'

	background.style.backgroundImage = 'url(./img/1.jpg)' //move from index.html not this .js

	function setList() {
		seriesList.innerHTML = ''

		seriesDB.series.forEach((item, index) => {
			seriesList.innerHTML += `<li class="promo__interactive-item"> ${index + 1} ${item}
	<div class="delete"></div></li>`

			document.querySelectorAll('.delete').forEach((trashBN, index) => {
				trashBN.addEventListener('click', () => {
					trashBN.parentElement.remove()
					seriesDB.series.splice(index, 1)
					setList()
				})
			})
		})
	}
	sort()
	setList()
})
