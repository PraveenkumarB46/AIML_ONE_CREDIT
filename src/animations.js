// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation classes
      entry.target.classList.add('visible');
      
      // Animate skill categories when in view
      if (entry.target.classList.contains('skills-grid')) {
        const cards = entry.target.querySelectorAll('.skill-category');
        cards.forEach((card, index) => {
          card.style.animationDelay = `${0.2 + index * 0.2}s`;
          card.classList.add('visible');
        });
      }
      
      // Animate project cards when in view
      if (entry.target.classList.contains('projects-grid')) {
        const cards = entry.target.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
          card.style.animationDelay = `${0.2 + index * 0.2}s`;
          card.classList.add('visible');
        });
      }
      
      // Animate experience items when in view
      if (entry.target.classList.contains('experience-timeline')) {
        const items = entry.target.querySelectorAll('.experience-item');
        items.forEach((item, index) => {
          item.style.animationDelay = `${0.2 + index * 0.2}s`;
          item.classList.add('visible');
        });
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
  // Observe section headers
  const sectionHeaders = document.querySelectorAll('section h2');
  sectionHeaders.forEach(header => observer.observe(header));
  
  // Observe skill grid
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) observer.observe(skillsGrid);
  
  // Observe projects grid
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) observer.observe(projectsGrid);
  
  // Observe experience timeline
  const experienceTimeline = document.querySelector('.experience-timeline');
  if (experienceTimeline) observer.observe(experienceTimeline);
  
  // Observe about content
  const aboutParagraphs = document.querySelectorAll('.about-content p');
  aboutParagraphs.forEach(p => observer.observe(p));
  
  // Observe contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) observer.observe(contactForm);
  
  // Smooth hover effects on buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Parallax effect on scroll (subtle)
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const circles = document.querySelectorAll('[class*="float-circle"]');
    
    circles.forEach((circle, index) => {
      const speed = 0.5 + index * 0.1;
      circle.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });
  
  // Counter animation for stats/metrics (if any)
  const animateCounters = (element) => {
    const target = parseInt(element.getAttribute('data-target')) || 0;
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      element.textContent = Math.floor(start + (target - start) * progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    };
    
    animate();
  };
  
  // Trigger counter animation when elements come into view
  const counters = document.querySelectorAll('[data-target]');
  counters.forEach(counter => {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters(counter);
        counterObserver.unobserve(counter);
      }
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
  });
});

// Add stagger animation to list items
export const staggerAnimation = (items, delay = 0.1) => {
  items.forEach((item, index) => {
    item.style.animationDelay = `${delay * index}s`;
    item.classList.add('stagger-item');
  });
};

// Add glow effect on click
export const addClickGlow = (element) => {
  element.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
};

// Smooth scroll to section
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
