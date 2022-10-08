import { UI } from "./UI.js"
import { Mobile } from './Mobile.js'

function pageEventListeners(a,b,c,d) {
    a.addEventListener('mouseover', () => {
        Mobile.displayNav(links, nav)
    })
    
    b.addEventListener('mouseover', (e) => {
        if(e.target.classList.contains('link')) {
            UI.selectLink(e.target)
        }
    })
    b.addEventListener('mouseout', (e) => {
        if(e.target.classList.contains('selectedLink')) {
            UI.deselect(e.target)
        }
    })
    
    c.childNodes.forEach(child => {
        child.addEventListener('click', (e) => {
            UI.changePage(e.target)
        })
    })
    d.addEventListener('contextmenu', (e) => e.preventDefault())
}
export default pageEventListeners