// let refine = () => {

// 	let filters = [
// 		{
// 			name: 'blur',
// 			units: 'px',
// 			min: 0,
// 			max: 20,
// 			value: 0,
// 		},

// 		{
// 			name: 'brightness',
// 			units: '%',
// 			min: 0,
// 			max: 200,
// 			value: 100,
// 		},
// 		// {
// 		// 	name: 'contrast',
// 		// 	units: '%',
// 		// 	min: 0,
// 		// 	max: 20,
// 		// 	value: 0,
// 		// },
// 		{
// 			name: 'invert',
// 			units: '%',
// 			min: 0,
// 			max: 100,
// 			value: 0,
// 		},
// 		{
// 			name: 'saturate',
// 			units: '%',
// 			min: 0,
// 			max: 300,
// 			value: 0,
// 		},
// 		{
// 			name: 'sepia',
// 			units: '%',
// 			min: 0,
// 			max: 200,
// 			value: 0,
// 		},
// 	]


// 	let controls = document.getElementById('controls') // ul#controls


// 	for (let i = 0; i < filters.length; i++) {

// 		let wrap = document.createElement('li')
// 		wrap.className = 'filter-control'
// 		controls.appendChild(wrap) // add li in ul#controls (<ul id="controls"><li class="filter-control"></li></ul>)

// 		let input = document.createElement('input')

// 		input.type = 'range' // input type="range" name ="" min =""...
// 		input.name = filters[i].name
// 		input.min = filters[i].min
// 		input.max = filters[i].max
// 		input.value = filters[i].value

// 		input.addEventListener('change', e => { //Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано
// 			filters[i].value = e.target.value

// 			render()
// 		})


// 		wrap.appendChild(input)
// 	}

// 	   let render = () => {

// 		let style = ''

// 		for (let i = 0; i < filters.length; i++) {

// 		 let filter = filters[i]

// 		 style += `${filter.name}(${filter.value}${filter.units})`
// 		}
// 		let imgShow = document.getElementById('img-show')
// 		imgShow.style.filter = style
// 	   }

// }

// export default refine