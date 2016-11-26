window.addEventListener('load', onWinowLoad, false )

function onWinowLoad() {

	var navButton = document.getElementsByClassName('nav-button')
document.body.classList.add('document-ready');
navButton[0].addEventListener('click', toggleNavClass)
	function toggleNavClass() {
		document.body.classList.toggle('nav-open');
	}
}	