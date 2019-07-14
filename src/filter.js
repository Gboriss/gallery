let refine = () => {
 [ 	{
	 	name: 'blur',
	 	units: 'px',
	 	min: 0,
	 	max: 20,
	 },
	 
	{
		name: 'brightness',
		units: '%',
		min: 0,
		max: 200,
	},
	{
		name: 'contrast',
		units: '%',
		min: 0,
		max: 20,
	},
	{
		name: 'invert',
		units: '%',
		min: 0,
		max: 100,
	},
	{
		name: 'saturate',
		units: '%',
		min: 0,
		max: 300,
	},
	{
		name: 'sepia',
		units: '%',
		min: 0,
		max: 200,
	},

]
	

let effectLevel = document.createElement('div')
effectLevel.className = 'range'


document.effectLevel.style.filter = "grayscale(100%)" //add new change filter


}

export default refine