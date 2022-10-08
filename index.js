import { UI } from "./js/UI.js"
import { Mobile } from "./js/Mobile.js"

window.onload = () => {
    UI.loadPage(home)
    UI.loadPage(projects)
    UI.loadPage(websites)
    UI.loadPage(templates)
    UI.loadPage(contact)
}

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const home = fetch('components/home.html')
const projects = fetch('components/projects.html')
const websites = fetch('components/websites.html')
const templates = fetch('components/templates.html')
const contact = fetch('components/contact.html')

const links = document.querySelector('nav')
const nav = document.querySelector('.navigation')
const footer = document.querySelector('.footer')

const ul = document.querySelector('ul')

const today = new Date()

footer.innerHTML = `Copyright Claussy Designs ${today.getFullYear()}`

nav.addEventListener('mouseover', () => {
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

ul.childNodes.forEach(child => {
    child.addEventListener('click', (e) => {
        UI.changePage(e.target)
    })
})