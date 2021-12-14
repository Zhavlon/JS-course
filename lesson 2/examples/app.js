const btns = document.querySelectorAll('button')
const wrapper = document.querySelector('.btn-block')

// btns.forEach(item => {
// 	item.addEventListener('click', (event) => {
// 		if(event.target.classList.contains('red')){
// 			event.target.classList.remove('red')
// 		} else {
// 			event.target.classList.add('red')
// 		}
// 	})
// })



wrapper.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		if (event.target.classList.contains('red')) {
			event.target.classList.remove('red')
		} else {
			event.target.classList.add('red')
		}
	}
})


const newBtn = document.createElement('button')
const newBtn2 = document.createElement('button')
newBtn2.classList.add('red')

