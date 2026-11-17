
// FEATURE 1: DARK MODE / LIGHT MODE

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = " Light Mode";

    } else {

        themeButton.textContent = " Dark Mode";

    }

});


// FEATURE 2: DIGITAL CLOCK

const clock = document.getElementById("digital-clock");

function displayClock() {

    const currentDate = new Date();

    const date = currentDate.toLocaleDateString();

    const time = currentDate.toLocaleTimeString();

    clock.textContent = date + " | " + time;

}

// Display the clock immediately.
displayClock();

// Update the clock every second.
setInterval(displayClock, 1000);


// FEATURE 3: SHOW / HIDE ABOUT ME

const aboutButton = document.getElementById("about-toggle");

const aboutDescription = document.getElementById("about-description");

aboutButton.addEventListener("click", function () {

    if (aboutDescription.hidden === false) {

        aboutDescription.hidden = true;

        aboutButton.textContent = "Read More";

    } else {

        aboutDescription.hidden = false;

        aboutButton.textContent = "Read Less";

    }

});


// FEATURE 4: PHOTOGRAPHY IMAGE SLIDESHOW

const galleryImages = document.querySelectorAll(".gallery-card img");

const slideshowImage = document.getElementById("slideshow-image");

const slideCaption = document.getElementById("slide-caption");

const slideCounter = document.getElementById("slide-counter");

const nextButton = document.getElementById("next-slide");

const previousButton = document.getElementById("previous-slide");

let currentSlide = 0;


// Function to display a photograph.
function displaySlide(index) {

    if (galleryImages.length === 0) {
        return;
    }

    // Allow the slideshow to move forwards and backwards.
    currentSlide = (index + galleryImages.length) % galleryImages.length;

    const selectedImage = galleryImages[currentSlide];

    // Change the slideshow image.
    slideshowImage.src = selectedImage.src;

    slideshowImage.alt = selectedImage.alt;

    // Retrieve the photograph title.
    const galleryCard = selectedImage.closest(".gallery-card");

    const imageTitle = galleryCard.querySelector("h3");

    slideCaption.textContent = imageTitle.textContent;

    // Update the slideshow counter.
    slideCounter.textContent =
        "Image " + (currentSlide + 1) +
        " of " + galleryImages.length;

}


// Next photograph button.
nextButton.addEventListener("click", function () {

    displaySlide(currentSlide + 1);

});


// Previous photograph button.
previousButton.addEventListener("click", function () {

    displaySlide(currentSlide - 1);

});


// Display the first photograph when the page loads.
displaySlide(0);


// FEATURE 5: BACK TO TOP BUTTON

const backToTopButton = document.getElementById("back-to-top");


// Show or hide the button when scrolling.
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTopButton.hidden = false;

    } else {

        backToTopButton.hidden = true;

    }

});


// Scroll back to the top when clicked.
backToTopButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});