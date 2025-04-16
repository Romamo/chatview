document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form submission for demo request and early access
    const setupFormSubmission = (formId, successMessage) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would normally send the form data to your backend
                // For demo purposes, we'll just show a success message
                const formContainer = this.parentElement;
                formContainer.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>${successMessage}</h3>
                        <p>We'll be in touch soon!</p>
                    </div>
                `;
            });
        }
    };
    
    // Setup modal functionality
    const setupModal = (buttonId, modalId) => {
        const button = document.getElementById(buttonId);
        const modal = document.getElementById(modalId);
        
        if (button && modal) {
            // Open modal
            button.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close modal
            const closeButtons = modal.querySelectorAll('.close-modal');
            closeButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    };
    
    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const isInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        };
        
        const handleScroll = () => {
            elements.forEach(el => {
                if (isInViewport(el)) {
                    el.classList.add('animated');
                }
            });
        };
        
        // Initial check
        handleScroll();
        
        // Check on scroll
        window.addEventListener('scroll', handleScroll);
    };
    
    // Add animation classes to elements
    const addAnimationClasses = () => {
        document.querySelectorAll('.problem-card, .market-card, .feature-card').forEach(el => {
            el.classList.add('animate-on-scroll');
        });
    };
    
    // Initialize animations
    addAnimationClasses();
    animateOnScroll();
    
    // Add responsive styles for mobile menu
    const addResponsiveStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            nav ul.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                padding: 1rem;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                z-index: 1000;
            }
            
            .mobile-menu-toggle.active i:before {
                content: "\\f00d";
            }
            
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-on-scroll.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            header.scrolled {
                padding: 0.5rem 0;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .success-message {
                text-align: center;
                padding: 2rem;
            }
            
            .success-message i {
                font-size: 3rem;
                color: var(--success-color);
                margin-bottom: 1rem;
            }
        `;
        document.head.appendChild(style);
    };
    
    addResponsiveStyles();
});
