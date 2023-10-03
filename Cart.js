function addToCart(product) {
    alert('Added ' + product + ' to cart.');
  } 



//Slider
  let slideIndex = 0;
  const slideWidth = document.querySelector('.slide').offsetWidth;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    if (index >= slides.length) {
      // Slide to a clone of the first slide (for a smooth loop)
      const offset = -slides.length * slideWidth;
      const transitionEnd = () => {
        slides[0].style.transition = 'none';
        slides[0].style.transform = `translateX(${offset}px)`;
        void slides[0].offsetWidth; // Force a reflow
        slides[0].style.transition = 'transform 0.5s ease';
        slides[0].removeEventListener('transitionend', transitionEnd);
      };
      slides[0].addEventListener('transitionend', transitionEnd);
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }
  
    const offset = -slideIndex * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
  }
  
  function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }
  
  // Show the first slide initially
  showSlide(slideIndex);
  
  // Automatically scroll every 3 seconds
  setInterval(autoSlide, 3000);

  
  //Menu dropdown
  function toggleSubmenu() {
    var submenu = document.querySelector('.submenu');
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  }

  
  
  
