/**
 *A simple script responsible for building
 *Etch a sketch Playground and DOM
 *Manipulation.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 * @author Mohamed El-Khouly <msirag95@gmail.com>
*/

/**
 * Define Global Variables
 *
*/

const playGround = document.querySelector('.play-ground'),
	colorIn = document.querySelector('#pixel-color');

let numberOfPixels = 16,
	pixels = document.querySelectorAll('.play-ground div'),
	color = '#000';

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function gridBuilder() {

	removeAllChildNodes(playGround);
	const totalPixels = numberOfPixels ** 2;
	for (let i = 0; i < totalPixels; i++) {

		let div = document.createElement('div');
		playGround.appendChild(div);
	}
	playGround.setAttribute('style', `grid-template-columns: repeat(${numberOfPixels},1fr);`)
}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Initial grid builder
gridBuilder()

// Hover event Handler
pixels = document.querySelectorAll('.play-ground div');
pixels.forEach(pixel => {
	pixel.addEventListener("mouseover", e => {
		e.target.style.backgroundColor = color;
	});
});

// Color handle event
colorIn.addEventListener('change', e => {
	color = e.target.value;
});