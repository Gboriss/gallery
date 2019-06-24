let show = () => {
	let button = document.querySelector('.edit')


	button.addEventListener('click', function() {
		menu.classList.add('visible')
	})

	close.addEventListener('click', function () {
		menu.classList.remove('visible')
	})

}

export default show