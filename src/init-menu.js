let show = () => {
	let button = document.querySelector('.edit')
	let menu = document.getElementById('menu')
	let close = document.getElementById('close')


	button.addEventListener('click', function() {
		menu.classList.add('visible')
	})

	close.addEventListener('click', function () {
		menu.classList.remove('visible')
	})

}

export default show