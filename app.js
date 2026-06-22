const paraEL = document.querySelector('#main-title')
paraEL.textContent = 'Welcome to Cozy Cafe'


const colorarr = 'lightblue'
const btnbtn = document.querySelector('#bg-color-btn')
const body1 = document.querySelector('body')
btnbtn.addEventListener('click', function(){
    if (body1.style.background==='bisque'){
    body1.style.backgroundColor = ""}
    else{
        body1.style.background='bisque'
    }}
)
const quoteofday = document.querySelector('#quote-of-the-day')
quoteofday.textContent = 'CAFFEINE ADDICTION IS NOT REAL YOU CAN NEVER HAVE ENOUGH MORE MORE MOREGIVE ME'

const titlethingy = document.querySelector('.highlight-title')
titlethingy.style.fontStyle = 'italic'


const listy = document.querySelector('#past-menu-items')
const newItem = document.createElement('li')
newItem.textContent = "Rose cake"
listy.append(newItem)

const cont = document.querySelector('#blogs')
const newdiv = document.createElement('div')
const listy2 = document.querySelector('#cafe-specialties')
const newitemtwo = document.createElement('li')
newitemtwo.textContent = "Karak Tea"
listy2.append(newitemtwo)
newdiv.classList.add('blog-post')

const h3e1 = document.querySelector('h3')
h3e1.textContent="Karak Tea Tasting Event"
const p3e1 = document.createElement('p')
p3e1.textContent = "Our brand new karak with its new exquisite flavor"


cont.append(h3e1)
cont.append(p3e1)
cont.append(newdiv)
