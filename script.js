/*==================== TOGGLE ICON NAVBAR ====================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== SCROLL SECTION ACTIVE LINKS ====================*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// STICKY NAVBAR 
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================ SCROLL REVEAL ANIMATION ================*/
    ScrollReveal ({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading, section', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .journey-area, .contact', { origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img, .journey-container', { origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content, .portfolio-box', { origin: 'right'});


/*================ SHOW & HIDE TABS ON JOURNEY SECTION ================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetSelector = tab.dataset.target,
        targetContent = document.querySelector(targetSelector)

        // Disable all content and active tabs
        tabContents.forEach((content) => content.classList.remove('journey-active'))
        tabs.forEach((t) => t.classList.remove('journey-active'))

        // active the tab and corresponding content
        tab.classList.add('journey-active')
        targetContent.classList.add('journey-active')
    })
})

/*================ SHOW & HIDE CAROUSEL ON PORTFOLIO SECTION ================*/
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 2) { 
        index++;
        arrowLeft.classList.remove('disabled');
    }

    if (index === 2) {
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) { 
        index--;
        arrowRight.classList.remove('disabled');
    }

    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});