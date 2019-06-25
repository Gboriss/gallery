import photos from './data'


let init = () => {

	let list = document.querySelector('.list')
	
	// creating list of photos
	let imgNodes = []

	for (let i = 0; i < photos.length; i++) { // Display a list of photos
		let img = document.createElement('img')

		img.tabIndex = '0'
		img.onfocus = () => {
			n = i
			set()
		}
	
		imgNodes.push(img)
	
		img.src = photos[i]
		list.appendChild(img) // added to item list img
	
		img.addEventListener('click', function () {
			n = i
			set()
		})
	}


	let full = document.querySelector('.full')
	let imgBig = document.getElementById('full-img')
	let imgShow = document.getElementById('img-show')
	let filters = document.getElementById('filters')
	
	let set = () => {
		imgBig.src = photos[n] // big photo add gallery
		imgShow.src = photos[n] //add a photo to right menu 
		
		for (let i = 0; i < imgNodes.length; i++) {
			imgNodes[i].classList.remove('active')
		}
		
	
		imgNodes[n].classList.add('active')
		imgNodes[n].focus()
	}
	
	
	let right = document.querySelector('.right')
	let n = 0
	
	set()
	// full.appendChild(imgBig) //

	
	
	let next = () => {
		n++ 
		n = n % photos.length
		set()
	}
	
	right.addEventListener('click', next)
	
	let left = document.querySelector('.left')

	let prev = () => { 
		n-- 
		n = n % photos.length
		if (n < 0) {
			n = photos.length - 1
		}
		set()
	}
	
	left.addEventListener('click', prev)  // back preview
		
	
	//Focus stays on selected photo
	
	imgBig.addEventListener('click', next)
	
	document.addEventListener('keydown', function(e) {
		e.keyCode === 39 && next()
	
	})

	document.addEventListener('keydown', function(e) {
		e.keyCode === 37 && prev()
	})

	document.addEventListener('keydown', function(e) {
		e.keyCode === 38 && prev()
	})

	document.addEventListener('keydown', function(e) {
		e.keyCode === 40 && next()
	})

}

export default init
