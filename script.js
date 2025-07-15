document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu when clicking a link
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Typed.js initialization
    if (document.querySelector('.typed')) {
        const typed = new Typed('.typed', {
            strings: ['UI/UX Designer', 'Full-stack Developer', 'Creative Professional'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Portfolio filtering with Isotope
    if (document.querySelector('.portfolio-items')) {
        const portfolioIsotope = new Isotope('.portfolio-items', {
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });

        document.querySelectorAll('.portfolio-filter li').forEach(filterBtn => {
            filterBtn.addEventListener('click', function() {
                document.querySelector('.portfolio-filter .active').classList.remove('active');
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                portfolioIsotope.arrange({
                    filter: filterValue
                });
            });
        });
    }

    // Initialize circular progress bars
    document.querySelectorAll('.circular-progress').forEach(progress => {
        const percent = progress.getAttribute('data-percent');
        const circle = progress.querySelector('.circle');
        const inner = progress.querySelector('.inner');
        
        // Set CSS variable for percentage
        circle.style.setProperty('--percentage', percent + '%');
        
        // Animate the progress
        setTimeout(() => {
            circle.style.background = `conic-gradient(var(--primary-color) ${percent}%, var(--card-bg) ${percent}%)`;
        }, 100);
    });

    // Animate elements on scroll with Waypoints
    const animateElements = document.querySelectorAll('.animate__animated');
    
    animateElements.forEach(element => {
        new Waypoint({
            element: element,
            handler: function() {
                element.classList.add(element.classList[1]);
                this.destroy(); // Only trigger once
            },
            offset: '90%'
        });
    });

    // Lightbox initialization
    if (document.querySelector('[data-lightbox="portfolio"]')) {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'fadeDuration': 300,
            'imageFadeDuration': 300,
            'disableScrolling': true
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});