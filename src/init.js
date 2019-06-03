import photos from './data'

let init = () => {

	let list = document.querySelector('.list')
	
	let imgNodes = []
	
	for (let i = 0; i < photos.length; i++) { // Display a list of photos
		let img = document.createElement('img')
	
		imgNodes.push(img)
	
		img.src = photos[i]
		list.appendChild(img) // added to item list img
	
		img.addEventListener('click', function () {
			n = i
			set()
		})
	}
	
	console.log(imgNodes);
	let full = document.querySelector('.full')
	let imgBig = document.getElementById('full-img')
	
	let set = () => {
		imgBig.src = photos[n]
	
		for (let i = 0; i < imgNodes.length; i++) {
			imgNodes[i].classList.remove('active')
		}
	
		imgNodes[n].classList.add('active')
		
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

	let backwards = () => { 
		n-- 
		n = n % photos.length
		if (n < 0) {
			n = photos.length - 1
		}
		set()
	}
	
	left.addEventListener('click', backwards)  // back preview
		
	
	//Focus stays on selected photo
	
	imgBig.addEventListener('click', next)
	
	document.addEventListener('keydown', function(e) {
		e.keyCode === 39 && next()
	
	})
	
	document.addEventListener('keydown', function(e) {
		e.keyCode === 37 && backwards()
	})
}



export default init
