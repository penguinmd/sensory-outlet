// Main JavaScript file for Sensory Outlet website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to same-page links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile menu toggle
    const setupMobileMenu = () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');
        
        if (!mobileMenuBtn || !nav) return;
        
        // Toggle menu when button is clicked
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            // Prevent scrolling when menu is open
            if (isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', false);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                mobileMenuBtn.setAttribute('aria-expanded', false);
            }
        });
        
        // Add accessibility attributes
        mobileMenuBtn.setAttribute('aria-controls', 'primary-menu');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
        nav.setAttribute('id', 'primary-menu');
    };

    // Handle contact form validation
    const setupContactForm = () => {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name) {
                isValid = false;
                alert('Please enter your name');
            } else if (!email || !email.includes('@')) {
                isValid = false;
                alert('Please enter a valid email address');
            } else if (!message) {
                isValid = false;
                alert('Please enter a message');
            }
            
            if (isValid) {
                // In a real implementation, this would submit to a server
                alert('Thank you for your message! This is a demo form, so no data has been sent.');
                contactForm.reset();
            }
        });
    };

    // Accessibility improvements
    const setupAccessibility = () => {
        // Add ARIA attributes where needed
        const mainNav = document.querySelector('nav');
        if (mainNav) {
            mainNav.setAttribute('aria-label', 'Main Navigation');
        }
        
        // Ensure all interactive elements can be navigated with keyboard
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        focusableElements.forEach(el => {
            if (!el.getAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }
        });
    };

    // Initialize all components
    const init = () => {
        setupMobileMenu();
        setupContactForm();
        setupAccessibility();
    };

    init();
});