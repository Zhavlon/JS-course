const text = document.querySelector('.test')


const regDis = /\(Discount/g
const idx = text.textContent.search(regDis)

const before = text.textContent.slice(0, idx)
const after = text.textContent.slice(idx)

let newText = before + '/' + after

const regExp = /\//g

newText = newText.replaceAll(regExp, '<br>')

text.innerHTML = newText