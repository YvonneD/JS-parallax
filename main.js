window.addEventListener('scroll', function(e) {
	let target = document.querySelectorAll('.scroll');
	let index = 0;
	const length = target.length;
	for (index; index < length; index++) {
		let PosX = window.pageXOffset * target[index].dataset.x;
		let PosY = window.pageYOffset * target[index].dataset.y;
		target[index].style.transform = 'translate3d(' + PosX + 'px,' + PosY + 'px, 0px)'
	}
})