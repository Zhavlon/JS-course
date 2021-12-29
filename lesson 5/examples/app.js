const som = document.querySelector('#som');
const usd = document.querySelector('#usd');

function convert (elem, target, isTrue) {
	elem.addEventListener('input', () => {
		const request = new XMLHttpRequest()
		request.open('GET', 'data.json')
		request.setRequestHeader('Content-type', 'application/json')
		request.send()

		request.addEventListener('load', () => {
			const response = JSON.parse(request.response)
			if(isTrue){
				target.value = (+elem.value/response.usd).toFixed(2)
			} else {
				target.value = (+elem.value * response.usd).toFixed(2)
			}

			elem.value === '' ? target.value = '' : null
		})
	})
}

convert(som, usd, 12)
convert(usd, som)
// '', NaN, false, null, undefined