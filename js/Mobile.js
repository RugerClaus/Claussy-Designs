let displayed = false
export class Mobile {
    static displayNav(a,b) {
        displayed = true
        a.style.display = 'flex'
        b.style.display = 'none'
    }
    static undisplayNav() {
        displayed = false
    }
}