// 											Regular expression

//  new RegExp('pattern', 'flag')
//  /pattern/flag

// const password = '@Q&^%#@!'
// const regExp = /\d/ig

// \d \w \s
// i g m

// console.log(password.replace(regExp, '*'))
// console.log(regExp.test(password))

// +996 xxx xx-xx-xx

// const phoneInput = document.querySelector('#phoneInput'),
// 	phoneBtn = document.querySelector('#phoneBtn'),
// 	phoneResult = document.querySelector('#phoneResult')
//
// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
//
// phoneBtn.addEventListener('click', () => {
// 	if(phoneRegExp.test(phoneInput.value)){
// 		phoneResult.innerText = 'Success';
// 		phoneResult.style.color = 'green'
// 	} else {
// 		phoneResult.innerText = 'Failed';
// 		phoneResult.style.color = 'red'
// 	}
// })

// [012]xxxxxxxxxxxxx

// 												Recursion

// let num = 0
// const count = () => {
// 	num++
// 	console.log(num)
//
// 	if(num > 50) return
// 	count()
// }
// count()



// recursion 2

// let i = 0
// let field = ''
// function func2(){
// 	i++
// 	field +=`${i} `
//
// 	if(i > 30) return
// 	func2()
// }
// func2()
// console.log(field)



// let field = ''
// for (let i = 0; i < 30; i++){
// 	field += `${i} `
// }
// console.log(field)

// const people = {
// 	"John": {
// 		age: 22,
// 		parents: {
// 			"Kelly": {
// 				age: 45
// 			},
// 			"Andrew": {
// 				age: 47,
// 				parents: {
// 					"George": {
// 						age: 89
// 					}
// 				}
// 			}
// 		}
// 	},
// 	"Antony": {
// 		age: 25,
// 		parents: {
// 			"Alice": {
// 				age: 50,
// 				parents: {
// 					"Katy": {
// 						age: 90
// 					}
// 				}
// 			},
// 			"Mikel": {
// 				age: 53,
// 				parents: {
// 					"AmeliaAlbert": {
// 						age: 95
// 					},
// 					"Albert": {
// 						age: 92
// 					}
// 				}
// 			}
// 		}
// 	}
// }
//
//
// const parentList = (obj) => {
// 	if(obj.parents){
// 		for (let key in obj.parents) {
// 			console.log(key)
// 			parentList(obj.parents[key])
// 		}
// 	}
// }
//
// for (let key in people) {
// 	parentList(people[key])
// }



// const block = document.querySelector('.block'),
// 	moveBtn = document.querySelector('.move');
//
// let position = 0
// moveBtn.addEventListener('click', animate)
//
//
// function animate () {
// 	position += 3
// 	block.style.left = `${position}px`
//
// 	if(position > 400) return
// 	setTimeout(animate, 20)
// }