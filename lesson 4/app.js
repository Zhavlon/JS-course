// // // JSON - javascript object notation
// // // const obj = {
// // // 	name: 'John',
// // // 	age: 21
// // // }
// // // console.log(obj)
// //
// // // parse + stringify
// // // const data = JSON.stringify(obj)
// // // console.log(JSON.parse(data))
// // // AJAX - Asynchronous JS and xml
// // // const btn = document.querySelector('button')
// // //
// // // btn.addEventListener('click', () => {
// // // 	console.log('123')
// // // })
// //
// //
// // const btn = document.querySelector('.btn')
// // btn.addEventListener('click', () => {
// // 	const request = new XMLHttpRequest()
// // 	request.open('GET', 'data.json')
// // 	request.setRequestHeader('Content-type', 'application/json')
// // 	request.send()
// //
// // 	request.addEventListener('load', () => {
// // 		const data = JSON.parse(request.response)
// // 		document.querySelector('#name').innerHTML = data.name
// // 		document.querySelector('#age').innerHTML = data.age;
// // 	})
// // })
// //
// // // response
// // // readyState
//
//
// // number, str, null, undef, boolean, nan - primitive
// // array, func, obj - object
//
// // передача по значению
// const num = 5;
//
// let num2 = num
// num2 = num2 + 10
//
// // console.log(num)
// // console.log(num2)
// // передача по ссылке
//
// const obj = {
// 	name: 'Alex',
// 	num: +996555222222,
// 	childObj: {
// 		childName: 'Child',
// 		age: 1
// 	}
// }
//
// const obj2 = JSON.parse(JSON.stringify(obj))
// obj2.childObj.age = 40

// // exp
// const expression = function (){
// 	console.log('expression')
// }
//
// // arrow
// const arrow = () => {
// 	console.log('arrow')
// }
//


// hoisting
function dec() {
	console.log('decloration')
}

let num1 = 1;