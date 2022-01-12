//tabs
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabsContent = document.querySelectorAll('.tabcontent')


function hideTabContent() {
	tabsContent.forEach(item => {
		item.classList.add('hide', 'fade')
		item.classList.remove('show')
	})

	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active')
	})
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('show', 'fade')
	tabsContent[i].classList.remove('hide')
	tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) => {
	const target = event.target

	if (target.classList.contains('tabheader__item')) {
		tabs.forEach((item, i) => {
			if (target === item) {
				hideTabContent()
				showTabContent(i)
			}
		})
	}
})

// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelectorAll('[data-modal]')

modalTrigger.forEach(item => {
	item.addEventListener('click', openModal)
})

function openModal() {
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'

	clearInterval(modalTimeout)
}

function closeModal() {
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = ''
}


modal.addEventListener('click', (event) => {
	if (event.target === modal || event.target.classList.contains('modal__close')) {
		closeModal()
	}
})

function openModalScroll() {
	const page = document.documentElement

	if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
		openModal()

		window.removeEventListener('scroll', openModalScroll)
	}
}

window.addEventListener('scroll', openModalScroll)
const modalTimeout = setTimeout(openModal, 50000)


// data
const deadline = '2021-12-30'

function getTimeRemaining(deadline) {
	const t = new Date(deadline) - new Date(),
		days = Math.floor((t / (1000 * 60 * 60 * 24))),
		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		minutes = Math.floor((t / 1000 / 60) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		"total": t,
		"days": days,
		"hours": hours,
		"minutes": minutes,
		"seconds": seconds
	}
}


function setClock(element, deadline) {
	const elem = document.querySelector(element),
		days = elem.querySelector('#days'),
		hours = elem.querySelector('#hours'),
		minutes = elem.querySelector('#minutes'),
		seconds = elem.querySelector('#seconds');

	setInterval(updateClock, 1000)

	updateClock()


	function makeZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}`
		} else {
			return num
		}
	}

	function updateClock() {
		const t = getTimeRemaining(deadline);
		if (t.total < 0) {
			days.innerHTML = 0;
			hours.innerHTML = 0;
			minutes.innerHTML = 0;
			seconds.innerHTML = 0
		} else {
			days.innerHTML = makeZero(t.days);
			hours.innerHTML = makeZero(t.hours);
			minutes.innerHTML = makeZero(t.minutes);
			seconds.innerHTML = makeZero(t.seconds)
		}
	}
}

setClock('.timer', deadline)

// card
class Menu {
	constructor(img, altimg, title, descr, price) {
		this.src = img
		this.title = title
		this.price = price
		this.altimg = altimg
		this.description = descr
	}

	render() {
		const wrapper = document.querySelector('#cardWrapper')
		const elem = document.createElement('div')
		elem.classList.add('menu__item')

		elem.innerHTML = `
		<div class="menu__item">
			<img src=${this.src} alt=${this.altimg}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.description}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
			<div class="menu__item-cost">Цена:</div>
			<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		</div>
		`
		wrapper.append(elem)
	}
}

const getResource = async (url) => {
	const res = await fetch(url)

	if(!res.ok){
		new Error(`Couldn't fetch ${url}, status: ${res.status}`)
	}

	return await res.json()
}

getResource('db.json')
	.then((data) => {
		data.menu.forEach(({img, altimg, title, descr, price}) => {
			new Menu(img, altimg, title, descr, price).render()
		})
	})

// form
const forms = document.querySelectorAll('form')
const message = {
	loading: 'img/form/spinner.svg',
	success: 'Спасибо, скоро свяжемся !',
	fail: 'Что-то пошло не так'
}

forms.forEach(item => {
	bindPostData(item)
})


const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	})
	return await res.json()
}

function bindPostData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const messageBlock = document.createElement('img')
		messageBlock.src = message.loading
		messageBlock.style.cssText = `
			display: block;
			margin: 20px auto 0 auto;
		`
		form.insertAdjacentElement('afterend', messageBlock)

		const formData = new FormData(form)
		const object = {}

		formData.forEach((item, i) => {
			object[i] = item
		})

		postData('http://localhost:3000/requests', JSON.stringify(object))
			.then(data => {
				console.log(data)
				showThanksModal(message.success)
			})
			.catch(() => {
				showThanksModal(message.fail)
			})
			.finally(() => {
				form.reset()
				messageBlock.remove()
			})
	})
}

function showThanksModal(message) {
	openModal()
	const prevModal = document.querySelector('.modal__dialog')
	prevModal.classList.add('hide')

	const thanksModal = document.createElement('div')
	thanksModal.classList.add('modal__dialog')

	thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close">x</div>
			<div class="modal__title">${message}</div>
		</div>
	`
	modal.append(thanksModal)


	setTimeout(() => {
		prevModal.classList.remove('hide')
		closeModal()
		thanksModal.remove()
	}, 2000)
}

// calculator
const result = document.querySelector('.calculating__result span')
let gender = 'female', height, weight, age, ratio = 1.375;

function calcTotal() {
	if(!gender || !height || !weight || !age || !ratio) {
		result.textContent = '____'
		return
	}

	if(gender === 'female') {
		result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
	} else {
		result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
	}
}

calcTotal()

function getStaticInfo(parentSelector, classActive) {
	const elements = document.querySelectorAll(`${parentSelector} div`)

	elements.forEach(item => {
		item.addEventListener('click', (e) => {
			if(e.target.getAttribute('data-ratio')){
				ratio = +e.target.getAttribute('data-ratio')
			} else {
				gender = e.target.getAttribute('id')
			}

			console.log(ratio)

			elements.forEach(item => {
				item.classList.remove(classActive)
			})

			e.target.classList.add(classActive)

			calcTotal()
		})
	})
}

getStaticInfo('#gender', 'calculating__choose-item_active')
getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active')

function getDynamicInfo(selector){
	const input = document.querySelector(selector)

	input.addEventListener('input', () => {

		// \d \w \s
		// \D \W

		const reg = /\D/ig

		if(reg.test(input.value)){
			input.style.border = '1px solid red'
		} else {
			input.style.border = 'none'
		}

		switch (input.getAttribute('id')){
			case 'height':
				height = +input.value
				break
			case 'weight':
				weight = +input.value
				break
			case 'age':
				age = +input.value
		}

		calcTotal()
	})
}

getDynamicInfo('#height')
getDynamicInfo('#weight')
getDynamicInfo('#age')


// slider
const slides = document.querySelectorAll('.offer__slide'),
	next = document.querySelector('.offer__slider-next'),
	prev = document.querySelector('.offer__slider-prev'),
	current = document.querySelector('#current'),
	total = document.querySelector('#total');
let slideIndex = 1

if(slides.length > 10) {
	total.textContent = slides.length
} else {
	total.textContent = `0${slides.length}`
}

showSlide(slideIndex)

function showSlide(i){
	if(i > slides.length){
		slideIndex = 1
	}

	if(i < 1){
		slideIndex = slides.length
	}

	if(slideIndex > 10){
		current.textContent = slideIndex
	} else {
		current.textContent = `0${slideIndex}`
	}

	slides.forEach(item => {
		item.style.display = 'none'
	})

	slides[slideIndex - 1].style.display = 'block'
}

next.addEventListener('click', () => {
	showSlide(slideIndex += 1)
})

prev.addEventListener('click', () => {
	showSlide(slideIndex -= 1)
})