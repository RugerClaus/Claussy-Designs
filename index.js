import { UI } from "./js/UI.js"

const links = fetch('./components/links.html')
const today = new Date()

window.onload = (() => {
    UI.loadNav(links)
})()

const footer = document.querySelector('.footer')
footer.innerHTML = `Copyright &copy; Claussy Designs ${today.getFullYear()}`
