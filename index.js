const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme') || 'light'
const getBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-moon'

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-right, .reveal-left');

const revealCallback = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('active');
		} else {
			entry.target.classList.remove('active');
		}
	});
};

const revealOptions = {
	root: null,
	threshold: 0.15,
	rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Read More Toggle Logic
const readMoreButtons = document.querySelectorAll('.btn--read-more');

readMoreButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		const description = btn.previousElementSibling;
		
		if (description.classList.contains('expanded')) {
			description.classList.remove('expanded');
			btn.textContent = 'Read More';
		} else {
			description.classList.add('expanded');
			btn.textContent = 'Read Less';
		}
	});
});