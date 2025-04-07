let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 10000); // Change image every 3 seconds
}
// Swipe functionality
let startX;
let endX;

const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Get the starting touch position
});

slideshowContainer.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX; // Get the current touch position
});

slideshowContainer.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        // Swipe left
        nextSlide();
    } else if (startX < endX - 50) {
        // Swipe right
        previousSlide();
    }
});

function nextSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    showCurrentSlide();
}

function previousSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }
    showCurrentSlide();
}

function showCurrentSlide() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}
// Music Control
const backgroundMusic = document.getElementById('background-music');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

playButton.addEventListener('click', () => {
    backgroundMusic.play();
});

pauseButton.addEventListener('click', () => {
    backgroundMusic.pause();
});

// Love Calculator
const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    if (name1 && name2) {
        const loveScore = Math.floor(Math.random() * 100 + 1);
        result.textContent = `Love Score between ${name1} and ${name2} is ${loveScore}%`;
    } else {
        result.textContent = 'Please enter both names!';
    }
});