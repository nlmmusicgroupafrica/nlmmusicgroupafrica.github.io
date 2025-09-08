// Function to show the selected page and hide others
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the selected page
  document.getElementById(pageId).classList.add('active');
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Update URL hash
  window.location.hash = pageId;
}

// Check URL hash on page load
window.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    showPage(hash);
  } else {
    showPage('home');
  }
  
  // Start the slider
  startSlider();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  } else {
    header.style.padding = '15px 0';
    header.style.boxShadow = 'none';
  }
});

// Add floating animation to multiple elements
document.addEventListener('DOMContentLoaded', function() {
  const floatingElements = document.querySelectorAll('.floating');
  floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });
});

// Artist Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('slider-container');

function updateSlider() {
  if (slider) {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  if (slides.length > 0) {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
}

function prevSlide() {
  if (slides.length > 0) {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    updateSlider();
  }
}

function startSlider() {
  if (slides.length > 0) {
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
}

// Prevent default behavior for all navigation links
document.querySelectorAll('nav a, .btn').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});
