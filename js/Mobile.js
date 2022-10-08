let displayed = false

export class Mobile {
    static displayNav(a,b) {
        displayed = true
        a.style.display = 'flex'
        b.style.display = 'none'
        a.addEventListener('click', (e) => {
            if(e.target.classList.contains('link')){
                this.undisplayNav(a,b)
            }
        })
    }
    static undisplayNav(a,navbutton) {
        displayed = false
        a.style.display = 'none'
        navbutton.style.display = 'block'
        
    }
}