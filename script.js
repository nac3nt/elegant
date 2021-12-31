let headerImage = document.getElementById('header-img');
let aboutButton = document.getElementById('nav-two');
let startButton = document.getElementById('nav-one');
let contactForm = document.getElementById('contact');
let aboutPage = document.getElementById('about');
let contactButton = document.getElementById('nav-three');

contactButton.addEventListener('click', () => {
    if (headerImage.style.display !== 'none') {
        headerImage.style.display = 'none';
        contactForm.style.display = 'flex';
        aboutButton.style.display = 'none';
        startButton.style.display = 'none';
        contactButton.textContent = 'Cancel';
    } else {
        aboutButton.style.display = 'block';
        startButton.style.display = 'block';
        headerImage.style.display = 'flex';
        contactForm.style.display = 'none';
        contactButton.textContent = 'Contact';
    }
});

aboutButton.addEventListener('click', () => {
    if (headerImage.style.display !== 'none') {
        headerImage.style.display = 'none';
        aboutPage.style.display = 'flex';
        aboutButton.textContent = 'Back';
        startButton.style.display = 'none';
        contactButton.style.display = 'none';

        aboutButton.style.marginBottom = '50px';

    } else {
        aboutButton.style.display = 'block';
        startButton.style.display = 'block';
        contactButton.style.display = 'block';
        headerImage.style.display = 'flex';
        aboutPage.style.display = 'none';
        aboutButton.textContent = 'About';

        aboutButton.style.marginBottom = '5px';
    }
});

let mainElement = document.querySelector('main');
let bodyElement = document.body;
let warning = document.getElementById('warning');


window.onresize = () => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
    if(width > height && height < 500) {
        mainElement.style.display = 'none';
        warning.style.display = 'flex';
    } else {
        mainElement.style.display = 'flex';
        warning.style.display = 'none';
    }
}