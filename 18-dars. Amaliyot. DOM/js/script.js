const blockAd = document.querySelectorAll('.promo__adv img'),
	genreChange = document.querySelector('.promo__genre'),
	background = document.querySelector('.promo__bg'),
	seris = document.querySelectorAll('promo__interactive-list')

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
