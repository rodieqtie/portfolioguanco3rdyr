// Smooth Scrolling and Navigation Highlighting
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.navbar a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only prevent default for anchor links, not page navigation
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Update active nav link on page load
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);
});

function updateActiveNav() {
  const navLinks = document.querySelectorAll('.navbar a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scroll Animation - Fade in elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section, .about-container, .projects, .contact-form');
  sections.forEach(section => {
    section.classList.add('fade-in-element');
    observer.observe(section);
  });
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑ Top';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c';
        isValid = false;
      } else {
        input.style.borderColor = '#ddd';
      }
    });
    
    if (isValid) {
      alert('Thank you! Your message has been received.');
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add hover animation to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 20px rgba(0,123,255,0.3)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
});

// Add hover animation to cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card, .tech-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
  });
});

// Mobile Menu Toggle
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('nav');

if (window.innerWidth <= 768 && navMenu) {
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.style.display = 'none';
  navbar.insertBefore(hamburger, navMenu);
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Close menu when link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
}

// Parallax effect on hero section (subtle)
const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', function() {
    const scrollProgress = window.pageYOffset / window.innerHeight;
    if (scrollProgress < 1) {
      heroSection.style.backgroundPosition = `center ${scrollProgress * 50}px`;
    }
  });
}

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Page transition animation
window.addEventListener('beforeunload', function() {
  document.body.style.opacity = '0.5';
});

document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
});
