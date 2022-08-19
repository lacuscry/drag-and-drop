const block = document.querySelector('.block');

let posX,
	posY;

function dragAndDrop() {
	document.documentElement.style.cssText = `--mouse-x:${posX}px; --mouse-y:${posY}px`;
}


block.addEventListener('mousedown', () => block.classList.add('move'));

block.addEventListener('mouseup', () => block.classList.remove('move'));

block.addEventListener('mousemove', e => {
	if (block.classList.contains('move')) {
		setTimeout(dragAndDrop, 1);
	}


	posY = Math.round(e.clientY / 10) * 10;
	posX = Math.round(e.clientX / 10) * 10;
});



block.addEventListener('touchstart', () => block.classList.add('move'));

block.addEventListener('touchend', () => block.classList.remove('move'));

block.addEventListener('touchmove', e => {
	if (block.classList.contains('move')) {
		setTimeout(dragAndDrop, 10);
	}


	posX = Math.round(e.targetTouches[0].clientX / 10) * 10;

	posY = Math.round(e.targetTouches[0].clientY / 10) * 10;
});