document.querySelector('.nav-icon').addEventListener('click', () => {
	document.querySelector('.nav div').classList.toggle('nav-content');
	for (var i = 0; i < document.querySelectorAll('.nav-link').length; i++) {
		document.querySelectorAll('.nav-link')[i].classList.toggle('nav-item');
	}
	document.querySelector('.tools-dropdown-content').style.display = 'none';
	document.querySelector('.fa-sort-down').style.display = 'none';
	document.querySelector('.tools-dropdown').style.display = 'block';
});
