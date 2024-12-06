const body = document.querySelector('body')
const ism = document.createElement('h1')

body.appendChild(ism)

body.style.backgroundColor = 'blue'
ism.style.color = 'yellow'
ism.style.textAlign = 'center'
ism.style.margin = 'auto 0'
ism.style.marginTop = '400px'
ism.style.fontSize = '70px'


let ismi = prompt('Ismingizni kiriting')
let rang = prompt('BackgroundColor=')

ism.innerHTML = `${ismi}`
body.style.backgroundColor = `${rang}`

console.log(body);
console.log(ism);

