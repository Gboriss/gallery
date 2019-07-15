let photos = [
	require('../gal/1.jpg'), 
	require('../gal/2.jpg'),
	require('../gal/3.jpg'), 
	require('../gal/4.jpg'),
	require('../gal/5.jpg'),
	require('../gal/6.jpg'),
	require('../gal/7.jpg'),
	require('../gal/8.jpg'),
	require('../gal/9.jpg'),
	require('../gal/10.jpg'),
	require('../gal/11.jpg'),
	require('../gal/12.jpg'),
	require('../gal/13.jpg'),
]

export default photos


// :root {
// 	--aside-width: 40px;
// 	--list-width: 300px;
// }

// body {
// 	position: relative;
// 	margin: 0;
// 	min-height: 100vh;
// 	background-color: #454343;
// }


// .full {
// 	display: flex;
// 	justify-content: space-between;

// 	position: fixed;

// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;

// 	/* margin-left: 10px;
// 	padding-right: 10px; */
	
// }

// @media (min-width: 960px) {
// 	.full {
// 		display: flex;
// 		justify-content: space-between;
	
// 		position: fixed;
// 		top: 0;
// 		left: 340px;
// 		bottom: 0;
// 		width: calc(100% - 100px - 350px);
		
// 	}
// }


// .img-wrap {
// 	position: fixed;
	
// }

// @media (min-width: 960px) {
// 	.img-wrap {
// 		display: flex;
// 		align-items: center;

// 		position: relative;
// 	}
// }

// #full-img {
// 	/* width: 100%; */
	
// 	max-width: 100%;

// 	box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .5);
// 	margin-top: 20px;
// 	margin-bottom: 20px;
	
// }

// @media (min-width: 960px) {
// 	#full-img {
// 		width: 100%;
// 		max-width: 100%;
	
// 		box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .5);
// 		margin-top: 20px;
// 		margin-bottom: 20px;
// 	}
// }


// img.edit {
// 	position: absolute;
// 	cursor: pointer;	

// 	top: 2%;
// 	right: -4%;
// }

// .left,
// .right {
// 	padding: 0;
// 	border: none;
// 	font: inherit;
// 	color: inherit;
// 	background-color: transparent;

// 	outline: none;
// 	cursor: pointer;
// 	-webkit-tap-highlight-color: rgba(0,0,0, 0);
	
// 	transition: .2s;
// }

// .left {
// 	top: 5vh;
// 	bottom: 20%;

// 	margin-right: 30px;

// }

// .right {
// 	margin-left: 30px;
// }

// @media (min-width: 960px) {
// 	.left {
		
		
// 	}
// }

// .left:hover,
// .right:hover {
// 	transform: none;
// }

// @media (min-width: 1700px) {
// 	.left:hover,
// 	.right:hover {
// 		cursor: pointer;
// 		transform: scale(1.5); 
// 	}
// }

// .list-wrap {
// 	margin: 20px 0;
// 	bottom: 0;
// 	position: absolute;
// }

// @media (min-width: 960px) {
// 	.list-wrap {
// 		bottom: 0;
// 		top: 0;
// 	}
// }


// .list {
// 	display: flex;
// 	flex-direction: row;
// 	/* flex-wrap: nowrap; */
	

// 	padding-left: 10px;
// 	margin-top: 20px;	
// }

// @media (min-width: 960px) {
// 	.list {
// 		display: flex;
// 		flex-direction: column;
// 		width: 255px;
// 		padding-left: 20px;
// 	}
// }

// .list img {
// 	/* max-width: 30%; */
// 	max-height: 80px;
// 	margin-right: 10px;
// 	bottom: 0;
// }


// @media (min-width: 960px) {
// 	.list img{
// 	max-width: 100%;
// 	max-height: none;
// 	margin-bottom: 15px;
// 	filter: grayscale(100%); /* делает фото в чб */
// 	opacity: .5; /* прозрачность */
	
// 	transition: .2s;

//     margin-right: 20px;
// 	}
// }

// .list img:focus {
// 	outline: none;
// }

// .list img:hover {
// 	cursor: pointer;
// 	box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
// 	opacity: 1;
// 	filter: grayscale(0);
// }

// .list img.active,
// .list img:focus {
// 	filter: grayscale(0);
// 	opacity: 1;
// 	box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
// }

// .list img:last-child {
// 	margin-bottom: 0;
// }

// input[type=range] {
// 	margin-bottom: 50px;
// 	margin-left: 20px;
// 	-webkit-appearance: none; 
// 	width: 18%;
// 	background: transparent; 
// }
  


// input[type=range]::-webkit-slider-thumb {
// 	-webkit-appearance: none;
// 	border: 1px solid #000000;
// 	height: 16px;
// 	width: 16px;
// 	border-radius: 5px;
// 	background: #ffffff;
// 	cursor: pointer;
// 	margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
// 	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
//   }
  
  
//   input[type=range]::-webkit-slider-runnable-track {
// 	height: 8.4px;
// 	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
// 	background: #3071a9;
// 	border-radius: 1.5px;
//   }


// a {
// 	text-decoration: none;
// 	color: #1f1c1f;
// }

// .close {
// 	padding: 35px 25px;
// 	margin: 0;
// 	border: 0;
// 	background-color: transparent;
// 	outline: none;
// }

// .close:hover {
// 	cursor: pointer;
// }

 