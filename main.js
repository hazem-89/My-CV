window.onload = main;
// State for slider
let activeImageIndex = 0;

/** call all my functions */
function main() {
    toggleMenu();
    startSlider();
    changeNavBackgroundColor();
    loopOverTexts();
    slideToNextJob()
}

/** show and hide nav item */
function toggleMenu() {
    const selectElement = (element) => document.querySelector(element);
    selectElement('#icon').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
    });
}
/** Remove mobile menu after clicking on nav item */
function linkAction() {
    const navMenu = document.getElementById('navbar');
    navMenu.classList.remove('active');
}
const navLink = document.querySelectorAll('.nav-item');
navLink.forEach(n => n.addEventListener('click', linkAction));

/** Start the slider */
function startSlider() {
    setInterval(fadeToNextSlide, 6000)
}

/** fading to the next image */
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


/** Change the background color of the nav on scroll*/
function changeNavBackgroundColor() {
    const header = document.querySelector('header');
const sectionOne = document.querySelector('.slider');
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

/** cAdding a typewriter effect to the intro section  */
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
    const normalSpeed = Math.random() * (100 - 50) + 50;
    const time = isEnd ? 200 : isDeleting ? speedUp : normalSpeed
    setTimeout(loopOverTexts, time)
}

/** sliding between job and education slides */
 function slideToNextJob() {
    const leftArrows = document.querySelectorAll('.left');
    const rightArrows = document.querySelectorAll('.right');
    let sectionsIndex = 0;
    
    for (const leftArrow of leftArrows) {
    leftArrow.addEventListener('click', function(){
    sectionsIndex = (sectionsIndex > 0) ? sectionsIndex - 1 : 0;
    leftArrow.parentElement.previousElementSibling.style.transform = 'translate(' + (sectionsIndex) * -25 + '%)'
});
    } 

    for (const rightArrow of rightArrows){
rightArrow.addEventListener('click', function(){
    sectionsIndex = (sectionsIndex < 3) ? sectionsIndex +1 : 3;
    rightArrow.parentElement.previousElementSibling.style.transform = 'translate(' + (sectionsIndex) * -25 + '%)'
});}
 }



// Portfolio Swiper 
let swiper = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //   Contact Form transform
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




