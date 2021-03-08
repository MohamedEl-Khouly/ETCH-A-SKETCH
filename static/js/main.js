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

const playGround = document.querySelector('.play-ground');

let numberOfPixels = 16;

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


gridBuilder()