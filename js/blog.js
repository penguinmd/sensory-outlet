// JavaScript for blog functionality

document.addEventListener('DOMContentLoaded', function() {
    // Handle newsletter subscription
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real implementation, this would send the email to a server
            alert('Thank you for subscribing to our newsletter! This is a demo form, so no data has been sent.');
            emailInput.value = '';
        });
    }
    
    // Toggle for potential future mobile filtering
    const setupFilterToggle = () => {
        // This would be implemented if category filtering is added
    };
    
    // Function to handle blog article click
    const setupBlogLinks = () => {
        const blogLinks = document.querySelectorAll('.blog-link');
        
        blogLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // In a real implementation, this would navigate to the article page
                alert('This is a demo link. In a real site, this would take you to the full article.');
            });
        });
    };
    
    // Function for pagination
    const setupPagination = () => {
        const paginationLinks = document.querySelectorAll('.blog-pagination a');
        
        paginationLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                paginationLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // In a real implementation, this would load more articles
                if (this.textContent !== 'Next »') {
                    alert(`This would load page ${this.textContent} of blog articles in a real implementation.`);
                } else {
                    alert('This would load the next page of blog articles in a real implementation.');
                }
            });
        });
    };
    
    // Initialize all blog functionality
    const initBlog = () => {
        setupFilterToggle();
        setupBlogLinks();
        setupPagination();
    };
    
    initBlog();
});