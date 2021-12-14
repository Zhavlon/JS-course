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
const modalTrigger = document.querySelector('[data-modal]')
const closeModal = document.querySelector('.modal__close')

modalTrigger.addEventListener('click', () => {
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'
})


closeModal.addEventListener('click', () => {
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = ''
})

modal.addEventListener('click', (e) => {
	if (!e.target.classList.contains('modal__dialog')) {
		modal.classList.add('hide')
		modal.classList.remove('show')
		document.body.style.overflow = ''
	}
})


document.body.addEventListener('keydown', (event) => {
	if (event.code === 'Backspace') {
		modal.classList.add('hide')
		modal.classList.remove('show')
		document.body.style.overflow = ''
	}
})