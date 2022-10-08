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
                main.innerHTML = pageContent[0].content
                console.log(pageContent)
            }) 
        })
    }
    static changePage(page) {
        if(page.id === 'home') {
            main.innerHTML = pageContent[0].content
        }
        if(page.id === 'projects'){
            main.innerHTML = pageContent[1].content
        }
        if(page.id === 'websites') {
            main.innerHTML = pageContent[2].content
        }
        if(page.id === 'templates'){
            main.innerHTML = pageContent[3].content
        }
        if(page.id === 'contact'){
            main.innerHTML = pageContent[4].content
        }
    }
}

