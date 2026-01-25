document.addEventListener('DOMContentLoaded', function () {
	const blockAd = document.querySelectorAll('.promo__adv img'),
		genreChange = document.querySelector('.promo__genre'),
		background = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		formBN = document.querySelector('form'),
		submitBTN = document.querySelector('button')

	const seriesDB = {
		series: [
			'Omar',
			'The Final Legacy',
			'Ertugrul',
			'Magneficent Century',
			'The Great Seljuks: Guardians...',
		],
	}

	blockAd.forEach(item => {
		item.remove()
	})

	genreChange.textContent = 'Comedy'

	background.style.backgroundImage = 'url(./img/1.jpg)' //move from index.html not this .js

	seriesList.innerHTML = ''

	seriesDB.series.forEach((item, index) => {
		seriesList.innerHTML += `<li class="promo__interactive-item"> ${index + 1} ${item}
	<div class="delete"></div></li>`
	})
})
