const home = document.getElementById('homeButton');
const portfolio = document.getElementById('portfolioButton');
const services = document.getElementById('servicesButton');
const contact = document.getElementById('contactButton');
const page = document.getElementById('page').value;
const footer = document.querySelector('footer')
const skills = document.querySelector('.skills')
const github = document.querySelector('.github')



const today = new Date()

footer.innerHTML = `Copyright Claussy Designs &copy; ${today.getFullYear()}`


if(page === 'Home'){
    home.classList.add('pageActive')
    portfolio.classList.remove('pageActive')
    services.classList.remove('pageActive')
    contact.classList.remove('pageActive')
    github.src = '../public/assets/icons/GitHub_Logo_White.png'
    setTimeout(() => {
        document.querySelector('.seemyskills').style.display = 'flex'
    }, 1000);
    document.querySelector('.seemyskills').addEventListener('click', () => {
        skills.style.animation = 'scale-in-center 5s'
        document.querySelector('.seemyskills').style.display = 'none';
        
    })
}
if(page === 'Portfolio'){
    portfolio.classList.add('pageActive')
    home.classList.remove('pageActive')
    services.classList.remove('pageActive')
    contact.classList.remove('pageActive')
    document.querySelector('.portfolio').addEventListener('scroll', ()=> {
        document.querySelector('.rms').style.animation = 'fadeIn 3s'
        
    })
}
if(page === 'Services'){
    services.classList.add('pageActive')
    portfolio.classList.remove('pageActive')
    home.classList.remove('pageActive')
    contact.classList.remove('pageActive')
}
if(page === 'Contact'){
    contact.classList.add('pageActive')
    portfolio.classList.remove('pageActive')
    services.classList.remove('pageActive')
    home.classList.remove('pageActive')
}



