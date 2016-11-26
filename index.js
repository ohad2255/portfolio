window.addEventListener('load', onWinowLoad, false )

function onWinowLoad() {

	var navButton = document.getElementsByClassName('nav-button')
	var logo = document.getElementsByClassName('logo')

	document.body.classList.add('document-ready');

	navButton[0].addEventListener('click', toggleNavClass)
	logo[0].addEventListener('click', spinLogo)

	function toggleNavClass() {
		document.body.classList.toggle('nav-open');
	}

	function spinLogo() {
		document.body.classList.toggle('spin-logo');
	}
}