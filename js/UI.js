const main = document.querySelector('main')
const pageContent = []
export class UI {
    static selectLink(a) {
        a.classList.add('selectedLink')
    }
    static deselect(a) {
        a.classList.remove('selectedLink')
    }
    static loadPage(page) {
        page.then(res => {
            res.text().then(content => {
                pageContent.push({content})
                console.log(pageContent)
            }) 
        })
    }
    static changePage(page) {
        if(page.id = 'home') {
            main.innerHTML = JSON.stringify(pageContent[0])
        }
        if(page.id = 'projects'){
            main.innerHTML = pageContent[1]
        }
        if(page.id = 'websites') {
            main.innerHTML = pageContent[2]
        }
    }
}

