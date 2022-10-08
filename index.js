import { UI } from "./js/UI.js"
import pageEventListeners from './js/pageEventListeners.js'

const home = fetch('components/home.html')
const projects = fetch('components/projects.html')
const websites = fetch('components/websites.html')
const templates = fetch('components/templates.html')
const contact = fetch('components/contact.html')

window.onload = () => {
    UI.loadPage(home)
    UI.loadPage(projects)
    UI.loadPage(websites)
    UI.loadPage(templates)
    UI.loadPage(contact)
}

const header = document.querySelector('header')
const links = document.querySelector('nav')
const nav = document.querySelector('.navigation')
const ul = document.querySelector('ul')

pageEventListeners(nav,links,ul,header)

const today = new Date()

const footer = document.querySelector('.footer')
footer.innerHTML = `Copyright &copy; Claussy Designs ${today.getFullYear()}`

