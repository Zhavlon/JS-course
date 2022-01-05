// // // Promise
// // // callback hell
// // setTimeout(() => {
// // 	const num = 10
// // 	console.log('call 1')
// // 	setTimeout(() => {
// // 		const num = 10
// // 		console.log('call 2')
// //
// // 		setTimeout(() => {
// // 			const num = 10
// // 			console.log('call 3')
// //
// // 			setTimeout(() => {
// // 				const num = 10
// // 				console.log('call 4')
// //
// // 				setTimeout(() => {
// // 					const num = 10
// // 					console.log('call 5')
// //
// // 					setTimeout(() => {
// // 						const num = 10
// // 						console.log('call 6')
// //
// // 						setTimeout(() => {
// // 							const num = 10
// // 							console.log('call 7')
// //
// // 							setTimeout(() => {
// // 								const num = 10
// // 								console.log('call 8')
// // 							}, 1000)
// // 						}, 1000)
// // 					}, 1000)
// // 				}, 1000)
// // 			}, 1000)
// // 		}, 1000)
// // 	}, 1000)
// // }, 1000)
//
// console.log('Запрос данных...')
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...')
// 		const product = {
// 			name: 'Phone',
// 			price: 20000
// 		}
//
// 		resolve(product)
// 	}, 2000)
// })
//
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'ordered'
// 			console.log('1')
// 			resolve(product)
// 		}, 2000)
// 	})
// }).then((product) => {
// 	return new Promise((resolve, reject) => {
// 		product.isModified = true
// 		console.log('2')
//
// 		resolve(product)
// 	})
// }).then((product) => {
// 	product.wrapped = true
// 	console.log('3')
// 	console.log(product)
// }).catch(() => {
// 	console.log('error')
// }).finally(() => {
// 	console.log('finally')
// })
//
// // Fetch API - application programming interface
//
//
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => res.json())
	.then(data => console.log(data))