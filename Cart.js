function addToCart(product) {
    alert('Added ' + product + ' to cart.');
  } 




  let slideIndex = 0;
const slideWidth = document.querySelector('.slide').offsetWidth;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Show the first slide initially
showSlide(slideIndex);

// Automatically scroll every 3 seconds
setInterval(autoSlide, 2300);
