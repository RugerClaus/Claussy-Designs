const main = document.querySelector('main')
const nav = document.querySelector('nav')
const pageContent = []
export class UI {
    static loadNav(component,b,c,d) {
        b = b || 0
        c = c || 0
        d = d || 0
        component.then(res => {
            res.text().then(html =>{
                nav.innerHTML = html
            })
        })
    }
}


