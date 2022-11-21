const home = document.getElementById('homeButton');
const portfolio = document.getElementById('portfolioButton');
const services = document.getElementById('servicesButton');
const contact = document.getElementById('contactButton');
const page = document.getElementById('page').value;

if(page === 'Home'){
    home.classList.add('pageActive')
    portfolio.classList.remove('pageActive')
    services.classList.remove('pageActive')
    contact.classList.remove('pageActive')
}
if(page === 'Portfolio'){
    portfolio.classList.add('pageActive')
    home.classList.remove('pageActive')
    services.classList.remove('pageActive')
    contact.classList.remove('pageActive')
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