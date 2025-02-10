const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;  // Initial index

// Show the active card
function updateCarousel() {
  // Hide all cards first
  cards.forEach(card => card.classList.remove('active'));

  // Show the current card
  cards[currentIndex].classList.add('active');
}

// Move the carousel to the previous card
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1; // Go to the last card
  }
  updateCarousel();
});

// Move the carousel to the next card
nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Go to the first card
  }
  updateCarousel();
});

// Initialize the carousel by showing the first card
updateCarousel();

// Get all collapsible buttons
var coll = document.getElementsByClassName("collapsible");

// Loop through each button and add event listener
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

