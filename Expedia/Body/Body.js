document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll("h3");

    elements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            element.style.color = "#1668E3";
        });

        element.addEventListener("mouseout", function () {
            element.style.color = ""; // Reset the color
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Create the dropdown arrow element
//     const dropdownArrow = document.createElement("div");
//     dropdownArrow.className = "dropdown-arrow";
//     dropdownArrow.textContent = "▼";

//     // Append the dropdown arrow to the "More travel" section
//     const moreTravelSection = document.getElementById("more-travel");
//     moreTravelSection.appendChild(dropdownArrow);
// });

document.addEventListener("DOMContentLoaded", function () {
    const signInElement = document.getElementById("signin");

    signInElement.addEventListener("click", function () {
        // Add your sign-in logic here
        // For demonstration, we'll simply alert a message
        alert("You have clicked Sign In.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const datesInput = document.querySelector("#dates-input");
    const travelersInput = document.querySelector("#travelers-input");

    const radioButtons = document.querySelectorAll(".html");

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            const selectedOption = this.value;

            if (selectedOption === "Add a flight") {
                // Update the Dates and Travelers sections for "Add a flight" option
                datesInput.textContent = "Select your flight dates";
                travelersInput.textContent = "Select the number of travelers";
            } else if (selectedOption === "Add a car") {
                // Update the Dates and Travelers sections for "Add a car" option
                datesInput.textContent = "Select your car rental dates";
                travelersInput.textContent = "Select the number of passengers";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("button");

    searchButton.addEventListener("click", function () {
        alert("Please select the following information");
    });
});



// slider //
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".slider");
        const slides = document.querySelectorAll(".slide");
        const slideWidth = slides[0].offsetWidth;
        let currentIndex = 0;
        const slidesToShow = 1; // Adjust the number of slides to show

        function slideRight() {
            currentIndex += slidesToShow;
            if (currentIndex > slides.length - slidesToShow) {
                currentIndex = 0;
            }
            updateSlider();
        }

        function slideLeft() {
            currentIndex -= slidesToShow;
            if (currentIndex < 0) {
                currentIndex = slides.length - slidesToShow;
            }
            updateSlider();
        }

        function updateSlider() {
            const translateValue = -currentIndex * slideWidth;
            slider.style.transform = `translateX(${translateValue}px)`;
        }

        // Add buttons or events to control the slider
        // Example: Previous and Next buttons
        const prevButton = document.querySelector("#prev-button");
        const nextButton = document.querySelector("#next-button");

        prevButton.addEventListener("click", slideLeft);
        nextButton.addEventListener("click", slideRight);
    });






// JavaScript for expanding and collapsing sections
document.addEventListener('DOMContentLoaded', function () {
    const sectionHeaders = document.querySelectorAll('h3');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.nextElementSibling.classList.toggle('expanded');
        });
    });
});

// JavaScript for opening QR code scanner
const qrCodeImage = document.getElementById('twoimg');
qrCodeImage.addEventListener('click', () => {
    // Open QR code scanner app (you'd need a library or external API for this)
    alert('Opening QR code scanner...');
    // Replace 'alert' with code to open a QR code scanner
});


// JavaScript for creating an image slideshow
const slideImages = document.querySelectorAll('.slide2');
let currentSlideIndex = 0;

function showSlide(index) {
    slideImages.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slideImages.length) % slideImages.length;
    showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);


