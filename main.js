window.onload = main;
// State for slider
let activeImageIndex = 0;

/** call all my functions */
function main() {
    toggleMenu();
    startSlider();
    changeNavBackgroundColor()
    loopOverTexts()
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


// typewriter effect

const textDisplay = document.getElementById('text');
const texts = ['Welcome to my cv.', 'i am a web developer', 'and i love coding.',];
let i = 0;
let j = 0;
let currentText = [];
isDeleting = false;
isEnd = false;

function loopOverTexts() {
    isEnd = false;
    textDisplay.innerHTML = currentText.join('');

    if (i < texts.length) {
        
    if (!isDeleting && j <= texts[i].length) {
        currentText.push(texts[i][j])
        j++
        textDisplay.innerHTML = currentText.join('');

    }
    if (isDeleting && j <= texts[i].length) {
        currentText.pop(texts[i][j])
        j--
        textDisplay.innerHTML = currentText.join('');
    }
    if (j ==  texts[i].length) {
        isEnd = true;
        isDeleting = true;
    }

    if (isDeleting && j === 0) {
        currentText = [];
        isDeleting = false;
        i++
        if (i == texts.length) {
            i = 0; 
        }
    }
    
  }
    const speedUp = Math.random() * (80 -50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 1000 : isDeleting ? speedUp : normalSpeed
    setTimeout(loopOverTexts, time)
}