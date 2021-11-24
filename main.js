window.onload = main;
// State for slider
let activeImageIndex = 0;

/** call all my functions */
function main() {
    toggleMenu();
    startSlider();
    changeNavBackgroundColor()
}

/** show and hide nav item */
function toggleMenu() {
    const selectElement = (element) => document.querySelector(element);
    selectElement('.mobile-menu').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
    });
}

/** Start the slider */
function startSlider() {
    setInterval(fadeToNextSlide, 6000)
}

/**  */
function fadeToNextSlide() {
    const images = document.querySelectorAll('.slider > img');
    const activeImage = images[activeImageIndex];

    if (activeImageIndex >= images.length -1) {
        activeImageIndex = 0;
    } else {
        activeImageIndex += 1;
    }
    const nextImage = images[activeImageIndex];
    activeImage.classList.toggle('show');
    nextImage.classList.toggle('show');
}

// changing the background color of the nav

const header = document.querySelector('header');
const sectionOne = document.querySelector('.slider');

function changeNavBackgroundColor() {
    
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
       if (!entry.isIntersecting) {
           header.classList.add('nav-scrolled');
       } else {
           header.classList.remove('nav-scrolled');
       }
    })
});

sectionOneObserver.observe(sectionOne)

}