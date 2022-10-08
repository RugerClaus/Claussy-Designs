import { UI } from "./js/UI.js"
import { Mobile } from "./js/Mobile.js"

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const home = fetch('index.html')

const links = document.querySelector('nav')
const nav = document.querySelector('.navigation')
const footer = document.querySelector('.footer')

const today = new Date()

footer.innerHTML = `Copyright Claussy Designs ${today.getFullYear()}`

nav.addEventListener('click', (e) => {
    Mobile.displayNav(links, nav)
})

links.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('link')) {
        UI.selectLink(e.target)
    }
})
links.addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('selectedLink')) {
        UI.deselect(e.target)
    }
})