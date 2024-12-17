let slideIndex = 0; // Current slide index
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

// Initialize the slideshow
function showSlides(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
    slides[i].style.transform = "scale(0.9)"; // Shrink effect when hidden
    slides[i].style.opacity = "0"; // Fade out when hidden
  }

  // Wrap around if the index exceeds bounds
  slideIndex = (index + slides.length) % slides.length;

  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.transform = "scale(1)"; // Scale effect for active slide
  slides[slideIndex].style.opacity = "1"; // Fade in

  // Update dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[slideIndex].className += " active-dot";
}

// Navigate to the next slide
function nextSlide() {
  showSlides(slideIndex + 1);
}

// Navigate to the previous slide
function prevSlide() {
  showSlides(slideIndex - 1);
}

// Auto-move slides every 5 seconds
setInterval(() => nextSlide(), 5000);

// Add event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Initialize dots functionality
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => showSlides(i));
}

// Display the first slide by default
showSlides(slideIndex);