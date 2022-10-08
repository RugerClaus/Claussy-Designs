import { UI } from "./js/UI.js"
import { Mobile } from "./js/Mobile.js"

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const home = fetch('components/home.html')
const projects = fetch('components/projects.html')

const links = document.querySelector('nav')
const nav = document.querySelector('.navigation')
const footer = document.querySelector('.footer')
const main = document.querySelector('main')

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

links.children.item(0).addEventListener('click', (e) => {
    if(e.target.id === 'home'){
        home.then(res => {
            res.text().then(content => {
                main.innerHTML = content
            })
        })
    }
    if(e.target.id === 'projects'){
        projects.then(res => {
            res.text().then(content => {
                main.innerHTML = content
            }) 
        })
    }
})